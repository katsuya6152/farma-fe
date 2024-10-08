"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

export default function IndividualRegistration() {
  const router = useRouter();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    earTagNumber: "",
    name: "",
    breed: "",
    sex: "",
    birthDate: null,
    introductionDate: null,
    bloodlineInfo: "",
    photo: null,
    notes: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (name: string, date: Date | null) => {
    setFormData((prev) => ({ ...prev, [name]: date }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if (e.target.files && e.target.files[0]) {
    //   setFormData((prev) => ({ ...prev, photo: e.target.files![0] }));
    // }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // ここでフォームデータの送信処理を実装
    console.log("Form submitted:", formData);

    // 送信処理を模擬（実際のAPIコールに置き換えてください）
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 成功トーストを表示
    toast({
      variant: "default",
      title: "保存成功",
      description: "個体情報が正常に保存されました。",
      duration: 3000,
    });

    // 送信後に/cattle/newページに遷移
    router.push("/cattle");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">新規個体の登録</h1>

      <Card>
        <CardHeader>
          <CardTitle>個体情報入力</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="earTagNumber">
                耳標番号 <span className="text-red-500">*</span>
              </Label>
              <Input
                id="earTagNumber"
                name="earTagNumber"
                placeholder="例: 1234567890"
                value={formData.earTagNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">名前</Label>
              <Input
                id="name"
                name="name"
                placeholder="個体の名前（任意）"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="breed">
                品種 <span className="text-red-500">*</span>
              </Label>
              <Select
                name="breed"
                onValueChange={(value) => handleSelectChange("breed", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="品種を選択" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="勝忠平">勝忠平</SelectItem>
                  <SelectItem value="茂福">茂福</SelectItem>
                  <SelectItem value="平茂勝">平茂勝</SelectItem>
                  <SelectItem value="藤茂">藤茂</SelectItem>
                  <SelectItem value="福姫">福姫</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>
                性別 <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                name="sex"
                onValueChange={(value) => handleSelectChange("sex", value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="雄" id="male" />
                  <Label htmlFor="male">雄</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="雌" id="female" />
                  <Label htmlFor="female">雌</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthDate">
                生年月日 <span className="text-red-500">*</span>
              </Label>
              <div className="flex items-center">
                <DatePicker
                // id="birthDate"
                // selected={formData.birthDate}
                // onSelect={(date) => handleDateChange("birthDate", date)}
                // maxDate={new Date()}
                />
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="ml-2">
                        <HelpCircle className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        個体の生年月日を選択してください。未来の日付は選択できません。
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="introductionDate">導入日</Label>
              <DatePicker
              // id="introductionDate"
              // selected={formData.introductionDate}
              // onSelect={(date) =>
              //   handleDateChange("introductionDate", date)
              // }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bloodlineInfo">血統情報</Label>
              <Textarea
                id="bloodlineInfo"
                name="bloodlineInfo"
                placeholder="両親の情報などを記入"
                value={formData.bloodlineInfo}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="photo">写真</Label>
              <Input
                id="photo"
                name="photo"
                type="file"
                onChange={handleFileChange}
                accept="image/*"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">備考</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="特記事項やメモを記入"
                value={formData.notes}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex justify-end space-x-2">
              <Button type="submit">保存</Button>
              <Button
                variant="outline"
                type="button"
                onClick={() => router.push("/cattle")}
              >
                キャンセル
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
