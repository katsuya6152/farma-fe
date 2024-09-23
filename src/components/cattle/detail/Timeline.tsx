import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardActions,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TimelineEventCard } from "./timeline-event-card";

export function Timeline() {
  const events = [
    {
      title: "ワクチン接種",
      date: "2024/06/20",
      content:
        "定期的なワクチン接種を実施。感染症予防のため、BVDワクチンと口蹄疫ワクチンを接種しました。接種後の経過は良好で、副作用の兆候は見られません。",
    },
    {
      title: "治療",
      date: "2024/06/19",
      content:
        "左後脚に軽い炎症が見られたため、抗炎症剤を投与しました。投与後の経過観察では、炎症は次第に治まり、正常な歩行が確認されました。",
    },
    {
      title: "健康診断",
      date: "2024/06/18",
      content:
        "定期健康診断を実施。体重、体温、心拍数、呼吸数を測定し、異常は見られませんでした。栄養状態も良好で、一般的な健康状態は良好と診断されました。",
    },
    {
      title: "出産",
      date: "2024/06/10",
      content:
        "午前3時頃に無事に子牛を出産しました。子牛の体重は35kgで、母子ともに健康です。出産後のケアとして、母牛に栄養補給を行い、子牛には初乳を与えました。",
    },
    {
      title: "妊娠",
      date: "2024/06/01",
      content:
        "妊娠確認を実施。超音波検査により、胎児の成長が順調であることを確認しました。予想出産日は2024年6月10日です。",
    },
    {
      title: "受精",
      date: "2024/05/15",
      content:
        "人工授精を実施。優秀な種牛の精子を使用し、受精が成功しました。受精後の経過観察を行い、数週間後に妊娠確認を行う予定です。",
    },
    {
      title: "発情",
      date: "2024/04/01",
      content:
        "発情期に入り、行動に変化が見られました。人工授精に最適なタイミングを見極めるため、発情サイクルを観察しました。発情期間中は特に注意して管理を行いました。",
    },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <div>
          <CardTitle>タイムライン</CardTitle>
          <CardDescription>
            牛の記録のタイムラインを確認することができます。
          </CardDescription>
        </div>
        <CardActions>
          <Button onClick={() => console.log("編集ボタン")}>編集</Button>
        </CardActions>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 overflow-x-auto items-center">
          {events.map((event, index) => (
            <div key={index} className="relative">
              <TimelineEventCard event={event} />
              {index !== events.length - 1 && (
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-[2px] bg-gray-300" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
