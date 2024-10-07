"use client";

import { useEffect, useState } from "react";

import { getShipments } from "@/lib/api";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  planColumns,
  recordColumns,
} from "@/components/shipments/data-table/shipment-columns";
import { ShipmentData } from "@/components/shipments/data/schema";
import { DataTable } from "@/components/ui/data-table";
import {
  ShipmentsPlanDataTableToolbar,
  ShipmentsRecordPlanDataTableToolbar,
} from "@/components/shipments/data-table/data-table-toolbar";

export const runtime = "edge";

export default function ShipmentsPage() {
  const [shipmentsData, setShipmentsData] = useState<ShipmentData>();

  useEffect(() => {
    async function fetchData() {
      const data = await getShipments();
      setShipmentsData(data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <Tabs defaultValue="Plan">
        <TabsList>
          <TabsTrigger value="Plan">出荷計画</TabsTrigger>
          <TabsTrigger value="Record">出荷実績</TabsTrigger>
        </TabsList>
        <TabsContent value="Plan">
          {shipmentsData && (
            <DataTable
              data={shipmentsData.shipmentPlans}
              columns={planColumns}
              toolbar={(table) => (
                <ShipmentsPlanDataTableToolbar table={table} />
              )}
            />
          )}
        </TabsContent>
        <TabsContent value="Record">
          {shipmentsData && (
            <DataTable
              data={shipmentsData.shipmentRecords}
              columns={recordColumns}
              toolbar={(table) => (
                <ShipmentsRecordPlanDataTableToolbar table={table} />
              )}
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
