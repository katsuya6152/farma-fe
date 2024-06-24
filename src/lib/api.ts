import { Shipping } from "@/types/ShippingManagement";

const BASE_URL = "https://farma-be.ka28.workers.dev";
// const BASE_URL = "http://127.0.0.1:8787";

export async function getShippingData() {
  const res = await fetch(`${BASE_URL}/api/shipping`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("データが取得できませんでした");
  }
  return res.json<Shipping[]>();
}

export async function createShippingData(data: Shipping) {
  const res = await fetch(`${BASE_URL}/api/shipping`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("データを登録できませんでした");
  }
  return res.json<Todo>();
}

export async function updateShippingData(data: Shipping) {
  const res = await fetch(`${BASE_URL}/api/shipping/${data.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("データを更新できませんでした");
  }
  return res.json<Todo>();
}

export async function deleteShippingData(id: number) {
  const res = await fetch(`${BASE_URL}/api/shipping/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("データを削除できませんでした");
  }
  return res.json<Todo>();
}
