import Button from "@/components/button";
import Input from "@/components/input";
import Label from "@/components/label";
import Select from "@/components/select";
import { Categories, TrendEnum } from "@/lib/constants/constants";

export default function TransactionForm() {
  const trendValues = Object.values(TrendEnum);
  const categoryValues = Object.values(Categories);

  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label className="mb-1">Type</Label>
          <Select>
            {trendValues.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </Select>
        </div>
        <div>
          <Label className="mb-1">Category</Label>
          <Select>
            {categoryValues.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </Select>
        </div>
      </div>

      <div>
        <Label className="mb-1">Date</Label>
        <Input />
      </div>

      <div>
        <Label className="mb-1">Amount</Label>
        <Input type={"number"} />
      </div>

      <div className="col-span-2">
        <Label className="mb-1">Description</Label>
        <Input type={"text"} />
      </div>

      <div className="flex justify-end">
        <Button type={"submit"}>Save</Button>
      </div>
    </form>
  );
}
