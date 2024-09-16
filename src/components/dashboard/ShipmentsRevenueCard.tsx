import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpIcon, ArrowDownIcon, BadgeJapaneseYen } from "lucide-react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function ShipmentsRevenueCard() {
  const [auctionData] = useState({
    totalRevenue: 15000000,
    previousRevenue: 14500000,
    averagePrice: 82000,
    totalAuctions: 18,
    revenueHistory: [
      { month: "4月", revenue: 0 },
      { month: "5月", revenue: 28200000 },
      { month: "6月", revenue: 0 },
      { month: "7月", revenue: 29300000 },
      { month: "8月", revenue: 0 },
      { month: "9月", revenue: 29900000 },
    ],
  });

  const revenueChange =
    ((auctionData.totalRevenue - auctionData.previousRevenue) /
      auctionData.previousRevenue) *
    100;
  const isPositiveChange = revenueChange >= 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>出荷の総収益</CardTitle>
        <BadgeJapaneseYen />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-3xl font-bold mb-2">
              ¥{auctionData.totalRevenue.toLocaleString()}
            </div>
            <div className="flex items-center text-sm">
              {isPositiveChange ? (
                <Badge variant="default" className="mr-2">
                  <ArrowUpIcon className="w-4 h-4 mr-1" />
                  {revenueChange.toFixed(1)}%
                </Badge>
              ) : (
                <Badge variant="destructive" className="mr-2">
                  <ArrowDownIcon className="w-4 h-4 mr-1" />
                  {Math.abs(revenueChange).toFixed(1)}%
                </Badge>
              )}
              <span className="text-muted-foreground">前期比</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">平均価格</span>
              <span className="font-medium">
                ¥{auctionData.averagePrice.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">総せり回数</span>
              <span className="font-medium">{auctionData.totalAuctions}回</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <ResponsiveContainer width="100%" height={120}>
            <LineChart data={auctionData.revenueHistory}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis hide={true} />
              <Tooltip
                contentStyle={{
                  background: "white",
                  border: "none",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
                labelStyle={{ color: "#6b7280" }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#8884d8"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 text-xs text-muted-foreground text-center">
          過去6ヶ月の総収益推移
        </div>
      </CardContent>
    </Card>
  );
}
