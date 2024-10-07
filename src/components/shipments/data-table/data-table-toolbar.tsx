"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { DataTableViewOptions } from "@/components/ui/data-table/data-table-view-options";

import { priorities, statuses } from "../data/data";
import { DataTableFacetedFilter } from "@/components/ui/data-table/data-table-faceted-filter";
import { DataTablePagination } from "@/components/ui/data-table/data-table-pagination";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function ShipmentsPlanDataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Button variant="default" className="h-8 px-2 lg:px-3">
          新規出荷計画登録
        </Button>
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={priorities}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
        <DataTableViewOptions table={table} />
        {table.getFilteredSelectedRowModel().rows.length > 0 && (
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredRowModel().rows.length} 件中
            {table.getFilteredSelectedRowModel().rows.length}件選択中
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}

export function ShipmentsRecordPlanDataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Button variant="default" className="h-8 px-2 lg:px-3">
          新規出荷実績登録
        </Button>
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={priorities}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
        <DataTableViewOptions table={table} />
        {table.getFilteredSelectedRowModel().rows.length > 0 && (
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredRowModel().rows.length} 件中
            {table.getFilteredSelectedRowModel().rows.length}件選択中
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}
