"use client";

import Button from "@/components/button";
import FormError from "@/components/form-error";
import Input from "@/components/input";
import Label from "@/components/label";
import Select from "@/components/select";
import { purgeTransactionListCache } from "@/lib/actions";
import { Categories, TrendEnum } from "@/lib/constants/constants";
import { API_HOST } from "@/lib/constants/types";
import { transactionSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function TransactionForm() {
  const trendValues = Object.values(TrendEnum);
  const categoryValues = Object.values(Categories);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(transactionSchema),
  });

  const router = useRouter();
  const [isSaving, setSaving] = useState(false);

  const onSubmit = async (data: any) => {
    setSaving(true);
    try {
      await fetch(`${API_HOST}/transactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          created_at: `${data.created_at}T00:00:00`,
        }),
      });
      await purgeTransactionListCache();
      router.push("/dashboard");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label className="mb-1">Type</Label>
          <Select {...register("type")}>
            {trendValues.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </Select>
        </div>
        <div>
          <Label className="mb-1">Category</Label>
          <Select {...register("category")}>
            {categoryValues.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </Select>
        </div>
      </div>

      <div>
        <Label className="mb-1">Date</Label>
        <Input
          {...register("created_at", {
            required: "The date is required",
          })}
        />
        <FormError error={errors.created_at} />
      </div>

      <div>
        <Label className="mb-1">Amount</Label>
        <Input
          type={"number"}
          {...register("amount", {
            required: "The amount is required",
            valueAsNumber: true,
            min: { value: 1, message: "Amount must be at least 1" },
          })}
        />
        <FormError error={errors.amount} />
      </div>

      <div className="col-span-1 md:col-span-2">
        <Label className="mb-1">Description</Label>
        <Input
          type={"text"}
          {...register("description", {
            required: "The description is required",
          })}
        />
        <FormError error={errors.description} />
      </div>

      <div className="flex justify-end">
        <Button type={"submit"} disabled={isSaving}>
          Save
        </Button>
      </div>
    </form>
  );
}
