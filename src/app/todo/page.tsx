"use client";

import { todoType } from "@/app/todo/types";

import { useState } from 'react';

import { Button } from "@/app/todo/components/Button/index";
import { addTodoData } from "@/app/todo/components/Button/action";
import { TodoList } from "@/app/todo/components/TodoList";

export default function Todo() {
  const initData: todoType[] = [];

  const [todos, setTodos] = useState<todoType[]>(initData)

  const [inputValue, setInputValue] = useState<string>("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <main>
      <h1>Simple ToDo App</h1>
      {/* input Area */}
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <Button handleClick={() => addTodoData({inputValue, setInputValue, todos, setTodos})}>Add</Button>
      </div>

      {/* Not Started Area */}
      <div>
        <h2>Not Started</h2>
        <TodoList todos={todos} setTodos={setTodos} filterValue={'notStarted'} />
      </div>

      {/* In Progress Area */}
      <div>
        <h2>In Progress</h2>
        <TodoList todos={todos} setTodos={setTodos} filterValue={'inProgress'} />
      </div>

      {/* Completed Area */}
      <div>
        <h2>Completed</h2>
        <TodoList todos={todos} setTodos={setTodos} filterValue={'completed'} />
      </div>
    </main>
  )
}
