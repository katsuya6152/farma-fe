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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { baseColumns } from "./tableColumns";
import { useState } from "react";
import { Shipping } from "@/types/ShippingManagement";
import { updateShippingData } from "@/lib/api";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface EditDataDialogProps {
  data: Shipping;
}

export function EditDataDialog({ data }: EditDataDialogProps) {
  const [formData, setFormData] = useState(data);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (key: keyof Shipping, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSave = async () => {
    await updateShippingData(formData);
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className="w-full pl-2 pr-0 justify-start">
        <Button variant="ghost">編集</Button>
      </DialogTrigger>
      
      <DialogContent className="max-h-[70%]">
        
          <DialogHeader>
            <DialogTitle>編集</DialogTitle>
            <DialogDescription>
              出荷データを編集することができます
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-w-3xl max-h-96 whitespace-nowrap">
            <div className="grid grid-cols-1 gap-4 p-4 h-full">
              {baseColumns.map((column, index) => {
                const inputId = `input-${column.id}-${index}`;
                return (
                  <div key={index} className="grid grid-cols-2 items-center justify-start justify-items-start gap-4">
                    <Label htmlFor={inputId} className="text-right">
                      {column.header?.toString()}
                    </Label>
                    {
                      column.header?.toString() === "ID"
                      ? <p>{formData[column.id as keyof Shipping]}</p> 
                      : <Input
                          id={inputId}
                          value={formData[column.id as keyof Shipping] || ""}
                          onChange={(e) =>
                            handleChange(column.id as keyof Shipping, e.target.value)
                          }
                        />
                    }

                  </div>
                );
              })}
            </div>
            <ScrollBar />
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
