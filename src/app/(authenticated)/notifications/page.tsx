"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

type Notification = {
  id: number;
  title: string;
  content: string;
  date: string;
  isRead: boolean;
  type: "システム" | "メッセージ" | "警告";
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "新しい個体が登録されました",
      content: "個体ID: C001が新しく登録されました。詳細を確認してください。",
      date: "2023-12-01 10:00",
      isRead: false,
      type: "システム",
    },
    {
      id: 2,
      title: "出荷予定の通知",
      content: "来週の出荷予定をご確認ください。",
      date: "2023-11-30 09:45",
      isRead: true,
      type: "メッセージ",
    },
    {
      id: 3,
      title: "健康チェックの警告",
      content:
        "個体ID: C005の健康状態に異常が見られます。早急な確認が必要です。",
      date: "2023-11-29 14:30",
      isRead: false,
      type: "警告",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [readFilter, setReadFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 検索処理を実装
    console.log("Searching for:", searchTerm);
  };

  const handleMarkAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification,
      ),
    );
  };

  const handleDelete = (id: number) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id),
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, isRead: true })),
    );
  };

  const handleDeleteSelected = () => {
    // 選択された通知の削除処理を実装
    console.log("Deleting selected notifications");
  };

  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch =
      notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notification.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesReadFilter =
      readFilter === "all" ||
      (readFilter === "unread" && !notification.isRead) ||
      (readFilter === "read" && notification.isRead);
    const matchesTypeFilter =
      typeFilter === "all" || notification.type === typeFilter;

    return matchesSearch && matchesReadFilter && matchesTypeFilter;
  });
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">通知一覧</h1>

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4">
        <form onSubmit={handleSearch} className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="通知を検索"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
        </form>
        <div className="flex space-x-4">
          <Select onValueChange={(value) => setReadFilter(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="表示する通知" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">すべて表示</SelectItem>
              <SelectItem value="unread">未読のみ</SelectItem>
              <SelectItem value="read">既読のみ</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setTypeFilter(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="通知タイプ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">すべてのタイプ</SelectItem>
              <SelectItem value="システム">システム</SelectItem>
              <SelectItem value="メッセージ">メッセージ</SelectItem>
              <SelectItem value="警告">警告</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>通知</CardTitle>
        </CardHeader>
        <CardContent>
          {filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex items-start space-x-4 py-4 ${notification.isRead ? "" : "bg-gray-50"}`}
            >
              <Checkbox />
              <div className="flex-1 min-w-0">
                <p
                  className={`text-sm font-medium ${notification.isRead ? "text-gray-900" : "text-black font-semibold"}`}
                >
                  {notification.title}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {notification.content}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {notification.date}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                {!notification.isRead && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleMarkAsRead(notification.id)}
                  >
                    既読にする
                  </Button>
                )}
                <Button variant="ghost" size="sm">
                  詳細
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDelete(notification.id)}
                >
                  削除
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="mt-6 flex justify-end space-x-4">
        <Button variant="outline" onClick={handleMarkAllAsRead}>
          すべて既読にする
        </Button>
        <Button variant="destructive" onClick={handleDeleteSelected}>
          選択した通知を削除
        </Button>
      </div>
    </div>
  );
}
