"use client";

import { createTodo } from "@/lib/api";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";
import { Button } from "@/components/ui/button";

const TodoForm = () => {
  const router = useRouter();
  const todoRef = useRef<HTMLInputElement>(null);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo = todoRef.current!.value;
    if (!todo) return console.log("Todoを入力してください");
    console.log(`TODO：${todo}`);
    await createTodo({ todo });
    todoRef.current!.value = "";
    router.refresh();
  };
  return (
    <form className="flex flex-col w-full" onSubmit={handleSubmit}>
      <label>TODO</label>
      <input type="text" className="border-2 rounded-lg p-1" ref={todoRef} />
      <div className="flex space-x-4 mt-4">
        <Button
          type="submit"
        >
          登録
        </Button>
        <Button
          type="reset"
        >
          リセット
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
