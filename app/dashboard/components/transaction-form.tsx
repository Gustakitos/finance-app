"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import Label from "@/components/label";
import Select from "@/components/select";
import { Categories, TrendEnum } from "@/lib/constants/constants";
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
  });

  const onSubmit = (data: any) => console.log("formData: ", data);

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
        {errors.created_at ? (
          <p className="mt-1 text-red-500">{errors.created_at.message}</p>
        ) : null}
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
        {errors.amount ? (
          <p className="mt-1 text-red-500">{errors.amount.message}</p>
        ) : null}
      </div>

      <div className="col-span-1 md:col-span-2">
        <Label className="mb-1">Description</Label>
        <Input
          type={"text"}
          {...register("description", {
            required: "The description is required",
          })}
        />
        {errors.description ? (
          <p className="mt-1 text-red-500">{errors.description.message}</p>
        ) : null}
      </div>

      <div className="flex justify-end">
        <Button type={"submit"}>Save</Button>
      </div>
    </form>
  );
}
