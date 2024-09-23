import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const healthRecords = [
  {
    id: 1,
    recordDate: "2023-09-20",
    type: "ワクチン接種",
    description: "定期予防接種を実施",
    veterinarian: "田中獣医師",
  },
  {
    id: 2,
    recordDate: "2023-08-05",
    type: "疾病",
    description: "発熱と食欲不振を確認",
    veterinarian: "佐藤獣医師",
  },
];

export function HealthInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>健康記録</CardTitle>
        <CardDescription>
          <Button onClick={() => console.log("新規健康記録を追加")}>
            + 新規健康記録を追加
          </Button>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>記録日</TableHead>
              <TableHead>種類</TableHead>
              <TableHead>説明</TableHead>
              <TableHead>獣医師</TableHead>
              <TableHead>アクション</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {healthRecords.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.recordDate}</TableCell>
                <TableCell>{record.type}</TableCell>
                <TableCell>{record.description}</TableCell>
                <TableCell>{record.veterinarian}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      詳細
                    </Button>
                    <Button variant="outline" size="sm">
                      編集
                    </Button>
                    <Button variant="outline" size="sm">
                      削除
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
