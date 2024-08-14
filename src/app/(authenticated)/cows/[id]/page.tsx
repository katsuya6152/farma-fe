"use client";

import { useEffect, useState } from "react";

import { getCowData } from "@/lib/api";
import { Cow } from "@/types/Cow";
import { BasicInfo } from "@/app/components/cow/BasicInfo";
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
      <BasicInfo data={cowData} />
      <Timeline />
    </div>
  );
}
