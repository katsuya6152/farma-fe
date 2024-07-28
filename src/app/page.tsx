"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getShippingData } from "@/lib/api";
import { Shipping } from "@/types/ShippingManagement";
import ShippingManagementTable from "@/app/components/shippingManagementTable/ShippingManagementTable";
import Header from "@/components/layouts/Header";
import { AddDataDialog } from "./components/common/dialog/AddDataDialog";
import { columns } from "@/app/components/shippingManagementTable/tableColumns";

export const runtime = "edge";

export default function TOP() {
  const router = useRouter();
  const [shippingData, setShippingData] = useState<Shipping[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    async function fetchData() {
      const data: Shipping[] = await getShippingData();
      setShippingData(data);
    }
    fetchData();
  }, []);

  return (
    <main className="container my-4 max-w-full overflow-x-auto">
      <Header />
      <div className="flex gap-4 my-4 justify-end">
        <AddDataDialog initialId={String(shippingData.length + 1)} />
      </div>
      <ShippingManagementTable columns={columns} data={shippingData} />
    </main>
  );
}
