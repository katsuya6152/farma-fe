import { Shipping } from "@/types/ShippingManagement";
import { AuthFormData } from "@/types/Auth";
import { Cow } from "@/types/Cow";
import cowsData from "./apiTestCowsData.json";
import { Cattle } from "@/components/cattle/data/schema";

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
  return res.json<Shipping>();
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
  return res.json<Shipping>();
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
  return res.json<Shipping>();
}

export async function auth(data: AuthFormData, isLogin: Boolean) {
  const endpoint = isLogin ? "/api/users/login" : "/api/users/register";
  const res = await fetch(BASE_URL + endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res;
}

export async function getCows() {
  // const res = await fetch(`${BASE_URL}/api/cows`, {
  //   cache: "no-store",
  // });
  // if (!res.ok) {
  //   throw new Error("データが取得できませんでした");
  // }
  // return res.json<Cow[]>();

  return new Promise<Cattle[]>((resolve, reject) => {
    setTimeout(() => {
      if (cowsData) {
        resolve(cowsData);
      } else {
        reject(new Error("No data found"));
      }
    }, 1000);
  });
}

export async function getCowData(id: string) {
  return new Promise<Cow | null>((resolve, reject) => {
    setTimeout(() => {
      const cowData = cowsData.find((c) => c.id === id);
      if (cowData) {
        resolve(cowData);
      } else {
        reject(new Error(`Cow with id ${id} not found`));
      }
    }, 1000);
  });
}

export async function updateCowData(data: Cow) {
  const res = await fetch(`${BASE_URL}/api/cow/${data.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("データを更新できませんでした");
  }
  return res.json<Cow>();
}
