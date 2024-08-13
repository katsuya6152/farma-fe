"use client";

import { useEffect, useState } from "react";

import { getCowData } from "@/lib/api";
import { Cow } from "@/types/Cow";
import { BasicInfoCard } from "@/app/components/cow/BasicInfoCard";
import { PedigreeInfoCard } from "@/app/components/cow/PedigreeInfoCard";
import { Timeline } from "@/app/components/cow/Timeline";

export const runtime = "edge";

export default function SinglePage({ params }: { params: { id: string } }) {
  const id = params.id;

  const [cowData, setCowData] = useState<Cow>();

  useEffect(() => {
    async function fetchData() {
      await getCowData(id)
        .then((cow) => {
          if (cow != null) setCowData(cow);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      <BasicInfoCard data={cowData} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PedigreeInfoCard />
        <Timeline />
      </div>
    </div>
  );
}
