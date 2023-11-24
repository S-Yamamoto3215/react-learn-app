"use client";

import { useState } from 'react';

export default function Todo() {
  const initData = [
    { id: 1, title: 'Todo1', status: 'notStarted' },
    { id: 2, title: 'Todo2', status: 'notStarted' },
    { id: 3, title: 'Todo3', status: 'inProgress' },
    { id: 4, title: 'Todo4', status: 'inProgress' },
    { id: 5, title: 'Todo5', status: 'completed' },
    { id: 6, title: 'Todo6', status: 'completed' },
  ];

  const [todos, setTodos] = useState(initData)

  return (
    <main>
      <h1>Simple ToDo App</h1>
      {/* input Area */}
      <div>
        <input type="text" />
        <button>Add</button>
      </div>

      {/* Not Started Area */}
      <div>
        <h2>Not Started</h2>
        <ul>
          {todos.filter((todo) => todo.status === 'notStarted').map((todo) => {
            return (
              <li key={todo.id}>
                {todo.title}
                <button>In Progress</button>
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
                <button>Not Started</button>
                <button>Completed</button>
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
                <button>In Progress</button>
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}
