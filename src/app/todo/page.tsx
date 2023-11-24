"use client";

import { todoType } from "@/app/todo/types";

import { useState } from 'react';

import { Button } from "@/app/todo/components/Button/index";
import { addTodoData, changeTodoStatus } from "@/app/todo/components/Button/action";

export default function Todo() {
  const initData: todoType[] = [
    { id: '1', title: 'Todo1', status: 'notStarted' },
    { id: '2', title: 'Todo2', status: 'notStarted' },
    { id: '3', title: 'Todo3', status: 'inProgress' },
    { id: '4', title: 'Todo4', status: 'inProgress' },
    { id: '5', title: 'Todo5', status: 'completed' },
    { id: '6', title: 'Todo6', status: 'completed' },
  ];

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
        <ul>
          {todos.filter((todo) => todo.status === 'notStarted').map((todo) => {
            return (
              <li key={todo.id}>
                {todo.title}
                <Button handleClick={() => changeTodoStatus({ todo, todos, setTodos, value: 'inProgress' })}>
                  In Progress
                </Button>
              </li>
            )
          })}
        </ul>
      </div>

      {/* In Progress Area */}
      <div>
        <h2>In Progress</h2>
        <ul>
          {todos.filter((todo) => todo.status === 'inProgress').map((todo) => {
            return (
              <li key={todo.id}>
                {todo.title}
                <Button handleClick={() => changeTodoStatus({ todo, todos, setTodos, value: 'notStarted' })}>
                  Not Started
                </Button>
                <Button handleClick={() => changeTodoStatus({ todo, todos, setTodos, value: 'completed' })}>
                  Completed
                </Button>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Completed Area */}
      <div>
        <h2>Completed</h2>
        <ul>
          {todos.filter((todo) => todo.status === 'completed').map((todo) => {
            return (
              <li key={todo.id}>
                {todo.title}
                <Button handleClick={() => changeTodoStatus({ todo, todos, setTodos, value: 'inProgress' })}>
                  In Progress
                </Button>
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}
