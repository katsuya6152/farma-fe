"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getCows } from "@/lib/api";
import CowsTable from "@/app/components/cows/CowsTable";
import { AddDataDialog } from "@/app/components/common/dialog/AddDataDialog";
import { cowsTableColumns } from "@/app/components/cows/cowsTableColumns";
import { Cow } from "@/types/Cow";

export const runtime = "edge";

export default function ListPage() {
  const router = useRouter();
  const [cowData, setCowData] = useState<Cow[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    async function fetchData() {
      const data: Cow[] = await getCows();
      setCowData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="my-4">
      <div className="flex gap-4 my-4 justify-end">
        <AddDataDialog initialId={String(cowData.length + 1)} />
      </div>
      <CowsTable columns={cowsTableColumns} data={cowData} />
    </div>
  );
}
