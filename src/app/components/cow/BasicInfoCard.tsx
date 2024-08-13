import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Cow } from "@/types/Cow";

interface BasicInfoCardProps {
  data: Cow | undefined;
}

export function BasicInfoCard({ data }: BasicInfoCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>基本情報</CardTitle>
        <CardDescription>
          牛の基本情報を確認することができます。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <div>
            <p>個体識別番号：{data?.id}</p>
            <p>名号：{data?.name}</p>
            <p>性別：{data?.gender}</p>
            <p>生年月日：{data?.birthDate}</p>
            <p>生産者：{data?.producerName}</p>
            <p>現在の状態：{data?.status}</p>
            <p>備考：{data?.notes}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>編集</Button>
      </CardFooter>
    </Card>
  );
}
