"use client";

import Button from "@/components/button";
import FormError from "@/components/form-error";
import Input from "@/components/input";
import Label from "@/components/label";
import Select from "@/components/select";
import { createTransaction, updateTransaction } from "@/lib/actions";
import { Categories, TrendEnum } from "@/lib/constants/constants";
import { transactionSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function TransactionForm({ initialData }: any) {
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
    defaultValues: initialData ?? {
      created_at: new Date().toISOString().split("T")[0],
    },
  });

  const router = useRouter();
  const [isSaving, setSaving] = useState(false);
  const [lastError, setLastError] = useState<unknown>();
  const editing = Boolean(initialData);

  const onSubmit = async (data: any) => {
    setSaving(true);
    setLastError(null);
    try {
      if (editing) {
        await updateTransaction(initialData.id, data);
      } else {
        await createTransaction(data);
      }
      router.push("/dashboard");
    } catch (error) {
      setLastError(error);
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
        <Input {...register("created_at")} disabled={editing} />
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

      <div className="flex justify-between items-center">
        {lastError ? <FormError error={lastError} /> : null}
      </div>

      <div className="flex justify-end">
        <Button type={"submit"} disabled={isSaving}>
          Save
        </Button>
      </div>
    </form>
  );
}
