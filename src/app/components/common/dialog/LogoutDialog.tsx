"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export function LogoutDialog() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className="w-full pl-2 pr-0 justify-start">
        <Button variant="ghost" size="sm">
          ログアウト
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="py-4">ログアウトしまか？</div>
        <DialogFooter>
          <Button
            variant="secondary"
            type="submit"
            onClick={() => setIsOpen(false)}
          >
            キャンセル
          </Button>
          <Button variant="destructive" type="submit" onClick={handleLogout}>
            ログアウト
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
