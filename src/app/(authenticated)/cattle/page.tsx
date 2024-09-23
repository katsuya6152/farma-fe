"use client";

import { useEffect, useState } from "react";

import { getCows } from "@/lib/api";
import { CattleDataTable } from "@/components/cattle/CattleTable";
import { columns } from "@/components/cattle/data-table/cattle-columns";
import { Cattle } from "@/components/cattle/data/schema";

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
      <CattleDataTable data={cowData} columns={columns} />
    </div>
  );
}
