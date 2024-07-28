import Link from "next/link";
import { ClipboardList, Folder, Truck, Calculator } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Folder className="h-6 w-6" />
            <span className="">FarMa(β)</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/cows"
              className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary bg-muted text-primary font-bold"
            >
              <ClipboardList className="h-6 w-6" />
              牛一覧
            </Link>
          </nav>
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/shipments"
              className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary"
            >
              <Truck className="h-6 w-6" />
              出荷一覧
            </Link>
          </nav>
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/auction-results"
              className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary"
            >
              <Calculator className="h-6 w-6" />
              せり結果
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
