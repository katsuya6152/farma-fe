"use client";

import { useEffect, useState } from "react";

import { getCows } from "@/lib/api";
import { columns } from "@/components/cattle/data-table/cattle-columns";
import { DataTable } from "@/components/ui/data-table";
import { CattleDataTableToolbar } from "@/components/cattle/data-table/data-table-toolbar";
import type { Cattle } from "@/components/cattle/data/schema";

export const runtime = "edge";

export default function ListPage() {
  const [cowData, setCowData] = useState<Cattle[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCows();
      setCowData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <DataTable
        data={cowData}
        columns={columns}
        toolbar={(table) => <CattleDataTableToolbar table={table} />}
      />
    </div>
  );
}
