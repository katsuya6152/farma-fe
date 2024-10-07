"use client";

import React, { useState } from "react";
import {
  Upload,
  FileSpreadsheet,
  Edit,
  Trash2,
  Eye,
  Download,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DatePickerWithRange } from "@/components/ui/date-picker-with-range";
import { CartesianGrid, Line, LineChart, XAxis, Bar, BarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export default function AuctionResultsPage() {
  const [activeTab, setActiveTab] = useState("import");
  const [importedData, setImportedData] = useState<any[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // ファイルアップロードの処理をここに実装
    console.log("File uploaded:", event.target.files?.[0]);
  };

  const handleImport = () => {
    // インポート処理をここに実装
    console.log("Importing data...");
    // ダミーデータをセット
    setImportedData([
      {
        id: "A001",
        date: "2023-12-01",
        market: "市場A",
        price: 100000,
        weight: 500,
        buyer: "田中",
      },
      {
        id: "B002",
        date: "2023-12-02",
        market: "市場B",
        price: 150000,
        weight: 520,
        buyer: "山田",
      },
    ]);
  };

  const handleEdit = (id: string) => {
    // 編集処理をここに実装
    console.log("Editing item:", id);
  };

  const handleDelete = (id: string) => {
    // 削除処理をここに実装
    console.log("Deleting item:", id);
  };

  const handleGenerateReport = () => {
    // レポート生成処理をここに実装
    console.log("Generating report...");
  };

  const priceChartData = [
    { month: "1月", price: 650000 },
    { month: "2月", price: 590000 },
    { month: "3月", price: 800000 },
    { month: "4月", price: 810000 },
    { month: "5月", price: 560000 },
    { month: "6月", price: 550000 },
  ];

  const weightPriceChartData = [
    { weight: "400-450kg", price: 500000 },
    { weight: "450-500kg", price: 550000 },
    { weight: "500-550kg", price: 600000 },
    { weight: "550-600kg", price: 650000 },
    { weight: "600kg以上", price: 700000 },
  ];

  const priceChartConfig = {
    price: {
      label: "平均価格",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  const weightPriceChartConfig = {
    price: {
      label: "平均価格",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">せり結果分析</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="import">ファイルインポート</TabsTrigger>
          <TabsTrigger value="data">データ確認・編集</TabsTrigger>
          <TabsTrigger value="analysis">分析ダッシュボード</TabsTrigger>
          <TabsTrigger value="report">レポート生成</TabsTrigger>
        </TabsList>

        <TabsContent value="import">
          <Card>
            <CardHeader>
              <CardTitle>せり結果インポート</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="file-upload">ファイルアップロード</Label>
                  <Input
                    id="file-upload"
                    type="file"
                    onChange={handleFileUpload}
                    accept=".xlsx,.xls,.csv"
                  />
                </div>
                <Button onClick={handleImport}>
                  <Upload className="mr-2 h-4 w-4" /> インポート実行
                </Button>
                {importedData.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      インポート結果プレビュー
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>個体ID</TableHead>
                          <TableHead>出荷日</TableHead>
                          <TableHead>市場</TableHead>
                          <TableHead>せり価格</TableHead>
                          <TableHead>重量</TableHead>
                          <TableHead>購買者</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {importedData.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.date}</TableCell>
                            <TableCell>{item.market}</TableCell>
                            <TableCell>
                              {item.price.toLocaleString()}円
                            </TableCell>
                            <TableCell>{item.weight}kg</TableCell>
                            <TableCell>{item.buyer}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <div className="mt-4 space-x-2">
                      <Button>インポート確定</Button>
                      <Button variant="outline">キャンセル</Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data">
          <Card>
            <CardHeader>
              <CardTitle>せりデータ確認・編集</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    type="search"
                    placeholder="検索"
                    className="max-w-sm"
                  />
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="フィルター" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">すべて</SelectItem>
                      <SelectItem value="market">市場別</SelectItem>
                      <SelectItem value="buyer">購買者別</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>個体ID</TableHead>
                      <TableHead>出荷日</TableHead>
                      <TableHead>市場</TableHead>
                      <TableHead>せり価格</TableHead>
                      <TableHead>重量</TableHead>
                      <TableHead>購買者</TableHead>
                      <TableHead>アクション</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {importedData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.market}</TableCell>
                        <TableCell>{item.price.toLocaleString()}円</TableCell>
                        <TableCell>{item.weight}kg</TableCell>
                        <TableCell>{item.buyer}</TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(item.id)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>せり価格の推移</CardTitle>
                <CardDescription>2024年1月 - 6月</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={priceChartConfig}>
                  <LineChart
                    accessibilityLayer
                    data={priceChartData}
                    margin={{
                      left: 12,
                      right: 12,
                    }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Line
                      dataKey="price"
                      type="basis"
                      stroke="var(--color-price)"
                      strokeWidth={2}
                      dot={true}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                  前月比 5.2% 上昇 <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                  過去6ヶ月間の平均せり価格を表示
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>重量と価格の相関</CardTitle>
                <CardDescription>2023年データ</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={weightPriceChartConfig}>
                  <BarChart accessibilityLayer data={weightPriceChartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="weight"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Bar dataKey="price" fill="var(--color-price)" radius={8} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                  重量が増えるほど価格が上昇する傾向
                </div>
                <div className="leading-none text-muted-foreground">
                  重量帯ごとの平均せり価格を表示
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-4 flex justify-end space-x-2">
            <Button onClick={handleGenerateReport}>
              <FileSpreadsheet className="mr-2 h-4 w-4" /> レポート生成
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" /> PDFで保存
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" /> CSVでエクスポート
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="report">
          <Card>
            <CardHeader>
              <CardTitle>レポート生成</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label>レポート期間指定</Label>
                  <DatePickerWithRange />
                </div>
                <div>
                  <Label>レポートタイプ選択</Label>
                  <Select>
                    <SelectTrigger className="w-[250px]">
                      <SelectValue placeholder="レポートタイプを選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="price">価格推移レポート</SelectItem>
                      <SelectItem value="market">市場別レポート</SelectItem>
                      <SelectItem value="buyer">購買者レポート</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex space-x-2">
                  <Button onClick={handleGenerateReport}>
                    <FileSpreadsheet className="mr-2 h-4 w-4" /> レポート生成
                  </Button>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" /> PDFで保存
                  </Button>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" /> CSVでエクスポート
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
