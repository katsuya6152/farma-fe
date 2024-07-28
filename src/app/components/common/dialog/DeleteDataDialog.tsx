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
import { useState } from "react";
import { deleteShippingData } from "@/lib/api";

interface DeleteDataDialogProps {
  id: String;
}

export function DeleteDataDialog({ id }: DeleteDataDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onDelete = async () => {
    await deleteShippingData(Number(id));
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className="w-full pl-2 pr-0 justify-start">
        <Button variant="ghost">削除</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>削除</DialogTitle>
          <DialogDescription>
            出荷データを削除することができます
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">{`IDが${id}のデータを本当に削除しますか？`}</div>
        <DialogFooter>
          <Button
            variant="secondary"
            type="submit"
            onClick={() => setIsOpen(false)}
          >
            キャンセル
          </Button>
          <Button variant="destructive" type="submit" onClick={onDelete}>
            削除
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
