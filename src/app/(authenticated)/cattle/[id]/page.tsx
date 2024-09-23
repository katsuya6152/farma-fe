"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { getCowData } from "@/lib/api";
import { Cow } from "@/types/Cow";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BasicInfo } from "@/components/cattle/detail/BasicInfo";
import { Timeline } from "@/components/cattle/detail/Timeline";
import { MediaInfo } from "@/components/cattle/detail/MediaInfo";
import { BreedingInfo } from "@/components/cattle/detail/BreedingInfo";
import { HealthInfo } from "@/components/cattle/detail/HealthInfo";

export const runtime = "edge";

export default function SinglePage({ params }: { params: { id: string } }) {
  const id = params.id;

  const [cowData, setCowData] = useState<Cow>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await getCowData(id)
        .then((cow) => {
          if (cow != null) setCowData(cow);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }
    fetchData();
  }, []);

  return (
    <div className="p-4 space-y-6">
      <BasicInfo data={cowData} isLoading={isLoading} />
      <Tabs defaultValue="timeline">
        <TabsList>
          <TabsTrigger value="timeline">タイムライン</TabsTrigger>
          <TabsTrigger value="breeding">繁殖管理</TabsTrigger>
          <TabsTrigger value="health">健康管理</TabsTrigger>
          <TabsTrigger value="media">メディア</TabsTrigger>
        </TabsList>
        <TabsContent value="timeline">
          <Timeline />
        </TabsContent>
        <TabsContent value="breeding">
          <BreedingInfo />
        </TabsContent>
        <TabsContent value="health">
          <HealthInfo />
        </TabsContent>
        <TabsContent value="media">
          <MediaInfo />
        </TabsContent>
      </Tabs>
    </div>
  );
}
