import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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

const breedingRecords = [
  {
    id: 1,
    estrusDate: "2023-08-15",
    breedingDate: "2023-08-16",
    pregnancyCheckDate: "2023-09-10",
    expectedBirthDate: "2024-05-10",
    actualBirthDate: null,
  },
  {
    id: 2,
    estrusDate: "2023-05-10",
    breedingDate: "2023-05-11",
    pregnancyCheckDate: "2023-06-05",
    expectedBirthDate: "2024-02-01",
    actualBirthDate: "2024-01-30",
  },
];

export function BreedingInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>繁殖記録</CardTitle>
        <CardDescription>
          <Button onClick={() => console.log("新規繁殖記録を追加")}>
            + 新規繁殖記録を追加
          </Button>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>発情日</TableHead>
              <TableHead>種付け日</TableHead>
              <TableHead>妊娠確認日</TableHead>
              <TableHead>分娩予定日</TableHead>
              <TableHead>実際の分娩日</TableHead>
              <TableHead>アクション</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {breedingRecords.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.estrusDate}</TableCell>
                <TableCell>{record.breedingDate}</TableCell>
                <TableCell>{record.pregnancyCheckDate}</TableCell>
                <TableCell>{record.expectedBirthDate}</TableCell>
                <TableCell>{record.actualBirthDate || "-"}</TableCell>
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
