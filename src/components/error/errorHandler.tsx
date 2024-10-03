"use client";

import Link from "next/link";
import { ArrowLeft, Home, HelpCircle } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface ErrorHandlerProps {
  statusCode: 404 | 500;
}

export default function ErrorHandler({ statusCode }: ErrorHandlerProps) {
  const router = useRouter();
  const isNotFound = statusCode === 404;
  const title = isNotFound ? "404" : "500";
  const message = isNotFound
    ? "お探しのページは見つかりませんでした。"
    : "内部サーバーエラーが発生しました。";
  const illustration = isNotFound ? "🧭" : "🔧";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <main className="flex flex-col items-center justify-center w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-9xl font-extrabold text-gray-900">{title}</h1>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            {message}
          </p>
          <p className="mt-4 text-lg text-gray-600">
            ご不便をおかけして申し訳ありません。
          </p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4">
          <Link
            href="/"
            className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Home className="mr-2 h-5 w-5" />
            ホームページに戻る
          </Link>
          <Button
            onClick={() => router.back()}
            className="flex items-center justify-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            前のページに戻る
          </Button>
          <Link
            href="/help"
            className="flex items-center justify-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <HelpCircle className="mr-2 h-5 w-5" />
            ヘルプ・サポート
          </Link>
        </div>

        <div className="text-center">
          <span
            className="text-9xl"
            role="img"
            aria-label={
              isNotFound ? "迷子になったキャラクター" : "壊れたサーバー"
            }
          >
            {illustration}
          </span>
        </div>
      </main>
    </div>
  );
}
