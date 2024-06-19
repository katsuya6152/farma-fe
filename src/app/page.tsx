import { getShippingData } from "@/lib/api";
import { Shipping } from "@/types/ShippingManagement";
import ShippingManagementTable from "@/app/components/ShippingManagementTable"
import Sidebar from "./components/Sidebar";

import { columns } from "@/app/components/ShippingManagementTable";

export const runtime = "edge";


export default async function TOP() {
  const shippingData: Shipping[] = await getShippingData();

  return (
    <div className="grid min-h-screen md:grid-cols-[120px_1fr] lg:grid-cols-[180px_1fr]">
      <Sidebar/>
      <main className="container my-4 max-w-full overflow-x-auto">
        <ShippingManagementTable columns={columns} data={shippingData} />
      </main>
    </div>
  );
}
