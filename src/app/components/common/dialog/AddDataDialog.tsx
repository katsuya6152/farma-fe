import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { baseColumns } from "../../shippingManagementTable/tableColumns";
import { useEffect, useState } from "react";
import { Shipping } from "@/types/ShippingManagement";
import { createShippingData } from "@/lib/api";

interface AddDataDialogProps {
  initialId: string;
}

export function AddDataDialog({ initialId }: AddDataDialogProps) {
  const [formData, setFormData] = useState<Shipping>({
    id: initialId,
    name: "",
    father: "",
    mothersFather: "",
    mothersGrandfather: "",
    grandmothersGrandfather: "",
    matingDate: "",
    expectedBirthDate: "",
    birthDate: "",
    auctionDate: "",
    weight: 0,
    daysOld: 0,
    sex: "",
    price: 0,
    buyer: "",
    memo: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (key: keyof Shipping, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSave = async () => {
    await createShippingData(formData);
    setIsOpen(false);
    window.location.reload();
  };

  useEffect(() => {
    setFormData({ ...formData, id: initialId });
  }, [initialId]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">新規追加</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[70%]">
        <DialogHeader>
          <DialogTitle>新規追加</DialogTitle>
          <DialogDescription>
            出荷データを新しく追加することができます
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-w-3xl max-h-96 whitespace-nowrap">
          <div className="grid grid-cols-1 gap-4 p-4 h-full">
            {baseColumns.map((column, index) => {
              const inputId = `input-${column.id}-${index}`;
              return (
                <div
                  key={index}
                  className="grid grid-cols-2 items-center justify-start justify-items-start gap-4"
                >
                  <Label htmlFor={inputId} className="text-right">
                    {column.header?.toString()}
                  </Label>
                  {column.header?.toString() === "ID" ? (
                    <p>{initialId}</p>
                  ) : (
                    <Input
                      id={inputId}
                      value={formData[column.id as keyof Shipping] || ""}
                      onChange={(e) =>
                        handleChange(
                          column.id as keyof Shipping,
                          e.target.value,
                        )
                      }
                    />
                  )}
                </div>
              );
            })}
          </div>
        </ScrollArea>
        <DialogFooter>
          <Button type="submit" onClick={onSave}>
            保存
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
