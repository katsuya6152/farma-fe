import { ColumnDef } from "@tanstack/react-table";
import { LucideSettings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EditDataDialog } from "@/app/components/common/dialog/EditDataDialog";
import { DeleteDataDialog } from "@/app/components/common/dialog/DeleteDataDialog";
import { Cow } from "@/types/Cow";

export const baseColumns: ColumnDef<Cow>[] = [
  {
    id: "id",
    header: "個体識別番号",
    accessorFn: (row) => row.id,
  },
  {
    id: "name",
    header: "名号",
    accessorFn: (row) => row.name,
  },
  {
    id: "gender",
    header: "性別",
    accessorFn: (row) => row.gender,
  },
  {
    id: "birthDate",
    header: "生年月日",
    accessorFn: (row) => row.birthDate,
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
    id: "motherName",
    header: "母牛",
    accessorFn: (row) => row.motherName,
  },
  {
    id: "motherRegistrationNumber",
    header: "母牛登録番号",
    accessorFn: (row) => row.motherRegistrationNumber,
  },
  {
    id: "motherScore",
    header: "母得点",
    accessorFn: (row) => row.motherScore,
  },
  {
    id: "motherBirthDate",
    header: "母年月",
    accessorFn: (row) => row.motherBirthDate,
  },
  {
    id: "producerName",
    header: "生産者",
    accessorFn: (row) => row.producerName,
  },
  {
    id: "status",
    header: "状態",
    accessorFn: (row) => row.status,
  },
  {
    id: "notes",
    header: "備考",
    accessorFn: (row) => row.notes,
  },
];

export const cowsTableColumns: ColumnDef<Cow>[] = [
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
