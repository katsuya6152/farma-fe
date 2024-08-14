import * as React from "react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardActions,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Cow } from "@/types/Cow";

interface BasicInfoProps {
  data: Cow | undefined;
}

const InfoItem = ({ label, value }: { label: string; value?: string }) => (
  <p>
    <span className="font-bold">{label}：</span>
    {value || "不明"}
  </p>
);

export function BasicInfo({ data }: BasicInfoProps) {
  if (!data) {
    return <p>データが見つかりません。</p>;
  }

  const {
    name,
    status,
    id,
    gender,
    birthDate,
    producerName,
    notes,
    father,
    mothersFather,
    mothersGrandfather,
  } = data;

  return (
    <Card className="w-full">
      <CardHeader>
        <div>
          <CardTitle>
            {name}
            <Badge variant="outline" className="ml-4">
              {status}
            </Badge>
          </CardTitle>
          <CardDescription>個体識別番号：{id}</CardDescription>
        </div>
        <CardActions>
          <Button onClick={() => console.log("編集ボタン")}>編集</Button>
        </CardActions>
      </CardHeader>
      <CardContent>
        <div className="flex gap-8">
          <Image
            src="/default-parent-cow.webp"
            width={120}
            height={120}
            alt="Avatar"
            className="rounded-full"
          />
          <div className="space-y-2 whitespace-nowrap">
            <InfoItem label="性別" value={gender} />
            <InfoItem label="生年月日" value={birthDate} />
            <InfoItem label="生産者" value={producerName} />
            <InfoItem label="備考" value={notes} />
          </div>
          <div className="space-y-2 whitespace-nowrap">
            <InfoItem label="父" value={father} />
            <InfoItem label="母の父" value={mothersFather} />
            <InfoItem label="母の祖父" value={mothersGrandfather} />
            <InfoItem label="母の母の祖父" value={mothersGrandfather} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
