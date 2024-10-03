"use client";

import ErrorHandler from "@/components/error/errorHandler";

export default function ErrorPage() {
  return <ErrorHandler statusCode={500} />;
}
