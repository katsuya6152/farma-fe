import { ColumnDef } from "@tanstack/react-table";
import { Shipping } from "@/types/ShippingManagement";
import { LucideSettings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { deleteShippingData, } from "@/lib/api";
import { EditDataDialog } from "./EditDataDialog";
import { DeleteDataDialog } from "./DeleteDataDialog";

export const baseColumns: ColumnDef<Shipping>[] = [
  {
    id: "id",
    header: "ID",
    accessorFn: (row) => row.id,
  },
  {
    id: "name",
    header: "名前",
    accessorFn: (row) => row.name,
  },
  {
    id: "father",
    header: "父牛",
    accessorFn: (row) => row.father,
  },
  {
    id: "mothersFather",
    header: "母の父",
    accessorFn: (row) => row.mothersFather,
  },
  {
    id: "mothersGrandfather",
    header: "母の祖父",
    accessorFn: (row) => row.mothersGrandfather,
  },
  {
    id: "grandmothersGrandfather",
    header: "母の母の祖父",
    accessorFn: (row) => row.grandmothersGrandfather,
  },
  {
    id: "matingDate",
    header: "種付け年月日",
    accessorFn: (row) => row.matingDate,
  },
  {
    id: "expectedBirthDate",
    header: "出産予定日",
    accessorFn: (row) => row.expectedBirthDate,
  },
  {
    id: "birthDate",
    header: "生年月日",
    accessorFn: (row) => row.birthDate,
  },
  {
    id: "auctionDate",
    header: "せり年月日",
    accessorFn: (row) => row.auctionDate,
  },
  {
    id: "weight",
    header: "体重",
    accessorFn: (row) => row.weight,
  },
  {
    id: "daysOld",
    header: "日齢",
    accessorFn: (row) => row.daysOld,
  },
  {
    id: "sex",
    header: "性別",
    accessorFn: (row) => row.sex,
  },
  {
    id: "price",
    header: "価格",
    accessorFn: (row) => row.price,
  },
  {
    id: "buyer",
    header: "購買者",
    accessorFn: (row) => row.buyer,
  },
  {
    id: "memo",
    header: "備考",
    accessorFn: (row) => row.memo,
  },
];

export const columns: ColumnDef<Shipping>[] = [
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const data = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-4 w-4 p-0">
              <span className="sr-only">Open menu</span>
              <LucideSettings className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>データ操作</DropdownMenuLabel>
            <EditDataDialog data={data} />
            <DeleteDataDialog id={data.id} />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  ...baseColumns,
];
