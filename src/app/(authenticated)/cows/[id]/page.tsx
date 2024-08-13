"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { getCows } from "@/lib/api";
import CowsTable from "@/app/components/cows/CowsTable";
import Header from "@/components/layouts/Header";
import { AddDataDialog } from "@/app/components/common/dialog/AddDataDialog";
import { cowsTableColumns } from "@/app/components/cows/cowsTableColumns";
import { Cow } from "@/types/Cow";

export const runtime = "edge";

export default function SinglePage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  return (
    <div>
      <div>{id}</div>
    </div>
  );
}
