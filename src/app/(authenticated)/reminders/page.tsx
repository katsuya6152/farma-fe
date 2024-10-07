"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface InewRiminder {
  title: string;
  date: string;
  time: string;
  repeat: string;
  methods: string[];
}

export default function RemindersPage() {
  const [reminders, setReminders] = useState([
    {
      id: 1,
      title: "ワクチン接種",
      date: "2023-12-01",
      time: "10:00",
      repeat: "なし",
      methods: ["メール"],
      enabled: false,
    },
    {
      id: 2,
      title: "出荷予定",
      date: "2023-12-05",
      time: "14:00",
      repeat: "毎週",
      methods: ["LINE", "SMS"],
      enabled: false,
    },
    {
      id: 3,
      title: "健康チェック",
      date: "2023-12-10",
      time: "08:00",
      repeat: "毎月",
      methods: ["メール", "LINE"],
      enabled: true,
    },
    {
      id: 4,
      title: "出産予定日",
      date: "2024-11-10",
      time: "08:00",
      repeat: "なし",
      methods: ["メール", "LINE"],
      enabled: true,
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newReminder, setNewReminder] = useState<InewRiminder>({
    title: "",
    date: "",
    time: "",
    repeat: "繰り返しなし",
    methods: [],
  });

  const handleAddReminder = () => {
    setReminders([
      ...reminders,
      { ...newReminder, id: reminders.length + 1, enabled: true },
    ]);
    setIsAddModalOpen(false);
    setNewReminder({
      title: "",
      date: "",
      time: "",
      repeat: "繰り返しなし",
      methods: [],
    });
  };

  const handleDeleteReminder = (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const handleToggleReminder = (id: number) => {
    setReminders(
      reminders.map((reminder) =>
        reminder.id === id
          ? { ...reminder, enabled: !reminder.enabled }
          : reminder,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>リマインダー設定</CardTitle>
        </CardHeader>
        <CardContent>
          {reminders.map((reminder) => (
            <div
              key={reminder.id}
              className="flex items-center justify-between py-4 border-b last:border-b-0"
            >
              <div className="flex items-center space-x-4">
                <Switch
                  checked={reminder.enabled}
                  onCheckedChange={() => handleToggleReminder(reminder.id)}
                />
                <div>
                  <h3 className="font-medium">{reminder.title}</h3>
                  <p className="text-sm text-gray-500">
                    通知日時: {reminder.date} {reminder.time} | 繰り返し:{" "}
                    {reminder.repeat}
                  </p>
                  <p className="text-sm text-gray-500">
                    通知方法: {reminder.methods.join(", ")}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  編集
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDeleteReminder(reminder.id)}
                >
                  削除
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogTrigger asChild>
          <Button>新しいリマインダーを追加</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>新しいリマインダーを追加</DialogTitle>
            <DialogDescription>
              新しいリマインダーの詳細を入力してください。
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                タイトル
              </Label>
              <Input
                id="title"
                value={newReminder.title}
                onChange={(e) =>
                  setNewReminder({ ...newReminder, title: e.target.value })
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                日付
              </Label>
              <Input
                id="date"
                type="date"
                value={newReminder.date}
                onChange={(e) =>
                  setNewReminder({ ...newReminder, date: e.target.value })
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="time" className="text-right">
                時間
              </Label>
              <Input
                id="time"
                type="time"
                value={newReminder.time}
                onChange={(e) =>
                  setNewReminder({ ...newReminder, time: e.target.value })
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="repeat" className="text-right">
                繰り返し
              </Label>
              <Select
                onValueChange={(value) =>
                  setNewReminder({ ...newReminder, repeat: value })
                }
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="繰り返し設定を選択" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="繰り返しなし">繰り返しなし</SelectItem>
                  <SelectItem value="毎日">毎日</SelectItem>
                  <SelectItem value="毎週">毎週</SelectItem>
                  <SelectItem value="毎月">毎月</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">通知方法</Label>
              <div className="col-span-3 space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="app"
                    checked={newReminder.methods.includes("LINE")}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setNewReminder({
                          ...newReminder,
                          methods: [...newReminder.methods, "LINE"],
                        });
                      } else {
                        setNewReminder({
                          ...newReminder,
                          methods: newReminder.methods.filter(
                            (m) => m !== "LINE",
                          ),
                        });
                      }
                    }}
                  />
                  <Label htmlFor="app">LINE通知</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="email"
                    checked={newReminder.methods.includes("メール")}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setNewReminder({
                          ...newReminder,
                          methods: [...newReminder.methods, "メール"],
                        });
                      } else {
                        setNewReminder({
                          ...newReminder,
                          methods: newReminder.methods.filter(
                            (m) => m !== "メール",
                          ),
                        });
                      }
                    }}
                  />
                  <Label htmlFor="email">メール通知</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="sms"
                    checked={newReminder.methods.includes("SMS")}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setNewReminder({
                          ...newReminder,
                          methods: [...newReminder.methods, "SMS"],
                        });
                      } else {
                        setNewReminder({
                          ...newReminder,
                          methods: newReminder.methods.filter(
                            (m) => m !== "SMS",
                          ),
                        });
                      }
                    }}
                  />
                  <Label htmlFor="sms">SMS通知</Label>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleAddReminder}>
              保存
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
