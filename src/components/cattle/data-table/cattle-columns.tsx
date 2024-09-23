"use client";

import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { labels, priorities, statuses } from "@/components/cattle/data/data";
import { Cattle } from "@/components/cattle/data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<Cattle>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="個体識別番号" />
    ),
    cell: ({ row }) => <div className="w-[100px]">{row.getValue("id")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="名号" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px] text-blue-500 hover:text-blue-700 underline hover:no-underline">
        <Link href={`/cattle/${row.getValue("id")}`}>
          {row.getValue("name")}
        </Link>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
    // accessorKey: "name",
    // header: ({ column }) => (
    //   <DataTableColumnHeader column={column} title="名号" />
    // ),
    // cell: ({ row }) => {
    //   const label = labels.find((label) => label.value === row.original.label);

    //   return (
    //     <div className="flex space-x-2">
    //       {label && <Badge variant="outline">{label.label}</Badge>}
    //       <span className="max-w-[500px] truncate font-medium">
    //         {row.getValue("name")}
    //       </span>
    //     </div>
    //   );
    // },
  },
  {
    accessorKey: "gender",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="性別" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("gender")}</div>,
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "birthDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="生年月日" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("birthDate")}</div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "father",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="父牛" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("father")}</div>,
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "mothersFather",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="母の父" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("mothersFather")}</div>
    ),
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "mothersGrandfather",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="母の祖父" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("mothersGrandfather")}</div>
    ),
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "grandmothersGrandfather",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="母の母の祖父" />
    ),
    cell: ({ row }) => (
      <div className="w-[100px]">{row.getValue("grandmothersGrandfather")}</div>
    ),
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "motherName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="母牛" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("motherName")}</div>
    ),
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "motherRegistrationNumber",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="母牛登録番号" />
    ),
    cell: ({ row }) => (
      <div className="w-[100px]">
        {row.getValue("motherRegistrationNumber")}
      </div>
    ),
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "motherScore",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="母得点" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("motherScore")}</div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "motherBirthDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="母年月" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("motherBirthDate")}</div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "producerName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="生産者" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("producerName")}</div>
    ),
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="状態" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("status")}</div>,
    enableSorting: false,
    enableHiding: true,
    // accessorKey: "status",
    // header: ({ column }) => (
    //   <DataTableColumnHeader column={column} title="状態" />
    // ),
    // cell: ({ row }) => {
    //   const status = statuses.find(
    //     (status) => status.value === row.getValue("status")
    //   );

    //   if (!status) {
    //     return null;
    //   }

    //   return (
    //     <div className="flex w-[100px] items-center">
    //       {status.icon && (
    //         <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
    //       )}
    //       <span>{status.label}</span>
    //     </div>
    //   );
    // },
    // filterFn: (row, id, value) => {
    //   return value.includes(row.getValue(id));
    // },
  },
  {
    accessorKey: "notes",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="備考" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("notes")}</div>,
    enableSorting: false,
    enableHiding: true,
    // accessorKey: "notes",
    // header: ({ column }) => (
    //   <DataTableColumnHeader column={column} title="備考" />
    // ),
    // cell: ({ row }) => {
    //   const priority = priorities.find(
    //     (priority) => priority.value === row.getValue("notes")
    //   );

    //   if (!priority) {
    //     return null;
    //   }

    //   return (
    //     <div className="flex items-center">
    //       {priority.icon && (
    //         <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
    //       )}
    //       <span>{priority.label}</span>
    //     </div>
    //   );
    // },
    // filterFn: (row, id, value) => {
    //   return value.includes(row.getValue(id));
    // },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
