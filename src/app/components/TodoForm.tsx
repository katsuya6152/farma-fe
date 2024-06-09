"use client";


import { createTodo } from "@/lib/api";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

const TodoForm = () => {
const router = useRouter();
const todoRef = useRef<HTMLInputElement>(null);
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo = todoRef.current!.value;
    if (!todo)
    return console.log("Todoを入力してください");
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
        <button
        type="submit"
        className="bg-black text-white rounded-lg w-full p-1"
        >
        登録
        </button>
        <button
        type="reset"
        className="bg-white text-black border-2 border-black/30 rounded-lg w-full p-1"
        >
        リセット
        </button>
    </div>
    </form>
);
};

export default TodoForm;