"use client";

import { useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import {
  Baby,
  Users,
  Truck,
  HeartPulse,
  Stethoscope,
  CalendarHeart,
  User,
  HandHeart,
  Calendar,
  AlertTriangleIcon,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import ShipmentsRevenueCard from "@/components/dashboard/ShipmentsRevenueCard";

export default function DashboardPage() {
  const [summaryData] = useState({
    totalCattle: 500,
    parentCattle: 200,
    calfCattle: 300,
    shippedCattle: 1000,
    healthStatus: [
      { name: "健康", value: 400 },
      { name: "妊娠中", value: 50 },
      { name: "病気", value: 30 },
      { name: "治療中", value: 20 },
    ],
    totalAuctionRevenue: 150000000,
  });

  const [breedingData] = useState({
    pregnantCows: 50,
    expectedDeliveries: 10,
    breedingSuccessRate: 75,
  });

  const [healthEvents] = useState([
    { id: "C001", event: "ワクチン接種", date: "2023-09-25" },
    { id: "C002", event: "治療", date: "2023-09-28" },
    { id: "C003", event: "健康診断", date: "2023-09-30" },
  ]);

  const [alerts] = useState([
    {
      type: "健康",
      message: "C002の体調が悪化しています。獣医の診察が必要です。",
      severity: "high",
    },
    {
      type: "在庫",
      message: "ミネラルの在庫が20%を下回っています。発注を検討してください。",
      severity: "medium",
    },
    {
      type: "繁殖",
      message: "C007の人工授精の時期が近づいています。",
      severity: "low",
    },
  ]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="h-full overflow-y-auto p-6 bg-gray-100">
      <h1 className="text-4xl font-extrabold tracking-tight">ダッシュボード</h1>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>アラート</CardTitle>
          <AlertTriangleIcon />
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[100px]">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className="mb-4 p-3 border rounded-lg flex items-start"
              >
                <AlertTriangleIcon
                  className={`w-5 h-5 mr-2 ${
                    alert.severity === "high"
                      ? "text-red-500"
                      : alert.severity === "medium"
                        ? "text-yellow-500"
                        : "text-blue-500"
                  }`}
                />
                <div>
                  <h3 className="font-semibold">{alert.type}</h3>
                  <p className="text-sm text-gray-600">{alert.message}</p>
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
        <Card>
          <CardHeader>
            <CardTitle>総頭数</CardTitle>
            <Users />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {summaryData.totalCattle}頭
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>親牛の数</CardTitle>
            <User />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {summaryData.parentCattle}頭
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>子牛の数</CardTitle>
            <Baby />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summaryData.calfCattle}頭</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>出荷済み頭数</CardTitle>
            <Truck />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {summaryData.shippedCattle}頭
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>健康状態の内訳</CardTitle>
            <Stethoscope />
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={summaryData.healthStatus}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {summaryData.healthStatus.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <ShipmentsRevenueCard />
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">繁殖管理</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>妊娠中の牛の数</CardTitle>
            <HeartPulse />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {breedingData.pregnantCows}頭
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>分娩予定</CardTitle>
            <CalendarHeart />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {breedingData.expectedDeliveries}頭
            </div>
            <p className="text-sm text-muted-foreground">今後30日以内</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>繁殖成功率</CardTitle>
            <HandHeart />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {breedingData.breedingSuccessRate}%
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">健康管理</h2>
      <Card>
        <CardHeader>
          <CardTitle>直近の健康イベント</CardTitle>
          <Calendar />
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>個体ID</TableHead>
                <TableHead>イベント</TableHead>
                <TableHead>日付</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {healthEvents.map((event, index) => (
                <TableRow key={index}>
                  <TableCell>{event.id}</TableCell>
                  <TableCell>{event.event}</TableCell>
                  <TableCell>{event.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
