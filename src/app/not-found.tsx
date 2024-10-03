export const runtime = "edge";

import ErrorHandler from "@/components/error/errorHandler";

export default function NotFound() {
  return <ErrorHandler statusCode={404} />;
}
