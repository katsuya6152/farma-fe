import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const mediaFiles = [
  { id: 1, name: "牛A_正面.jpg", type: "image", url: "/placeholder.svg" },
  { id: 2, name: "牛A_側面.jpg", type: "image", url: "/placeholder.svg" },
  { id: 3, name: "健康診断書.pdf", type: "document", url: "/placeholder.svg" },
];

export function MediaInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>メディア</CardTitle>
        <CardDescription>
          <Button onClick={() => console.log("新規メディアをアップロード")}>
            + 新規メディアをアップロード
          </Button>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mediaFiles.map((file) => (
            <div key={file.id} className="relative group">
              <Image
                src={file.url}
                alt={file.name}
                width={40}
                height={40}
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="secondary" size="sm" className="mr-2">
                  表示
                </Button>
                <Button variant="destructive" size="sm">
                  削除
                </Button>
              </div>
              <p className="mt-2 text-sm text-gray-600">{file.name}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
