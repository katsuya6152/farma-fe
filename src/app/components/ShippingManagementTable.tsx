"use client";

import { Shipping } from "@/types/ShippingManagement";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const columns: ColumnDef<Shipping>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "名前",
  },
  {
    accessorKey: "father",
    header: "父牛",
  },
  {
    accessorKey: "mothersFather",
    header: "母の父",
  },
  {
    accessorKey: "mothersGrandfather",
    header: "母の祖父",
  },
  {
    accessorKey: "grandmothersGrandfather",
    header: "母の母の祖父",
  },
  {
    accessorKey: "matingDate",
    header: "種付け年月日",
  },
  {
    accessorKey: "expectedBirthDate",
    header: "出産予定日",
  },
  {
    accessorKey: "birthDate",
    header: "生年月日",
  },
  {
    accessorKey: "auctionDate",
    header: "せり年月日",
  },
  {
    accessorKey: "weight",
    header: "体重",
  },
  {
    accessorKey: "daysOld",
    header: "日齢",
  },
  {
    accessorKey: "sex",
    header: "性別",
  },
  {
    accessorKey: "price",
    header: "価格",
  },
  {
    accessorKey: "buyer",
    header: "購買者",
  },
  {
    accessorKey: "memo",
    header: "備考",
  },
];

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function ShippingManagementTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <ScrollArea className="whitespace-nowrap rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default ShippingManagementTable;
