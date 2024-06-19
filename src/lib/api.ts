import { Shipping } from "@/types/ShippingManagement";

const BASE_URL = "https://farma-be.ka28.workers.dev";
// const BASE_URL = "http://127.0.0.1:8787";

export async function deleteTodo(id: number) {
  const res = await fetch(`${BASE_URL}/api/todos/${id}`, {
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

export async function createTodo(todo: Todo) {
  const res = await fetch(`${BASE_URL}/api/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!res.ok) {
    throw new Error("データを登録できませんでした");
  }
  return res.json<Todo>();
}

export async function getTodos() {
  const res = await fetch(`${BASE_URL}/api/todos`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("データが取得できませんでした");
  }
  return res.json<Todo[]>();
}

export async function getShippingData() {
  const res = await fetch(`${BASE_URL}/api/shipping`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("データが取得できませんでした");
  }
  return res.json<Shipping[]>();
}
