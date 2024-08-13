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

export function Timeline() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>タイムライン</CardTitle>
        <CardDescription>
          牛の記録のタイムラインを確認することができます。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>contents</div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>編集</Button>
      </CardFooter>
    </Card>
  );
}
