import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TimelineEventCardProps {
  event: {
    title: string;
    date: string;
    content: string;
  };
}

export function TimelineEventCard({ event }: TimelineEventCardProps) {
  const { title, date, content } = event;
  return (
    <Card className="">
      <CardHeader>
        <div>
          <CardTitle className="whitespace-nowrap">{title}</CardTitle>
          <CardDescription>{date}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="w-full overflow-ellipsis line-clamp-3">
        {content}
      </CardContent>
    </Card>
  );
}
