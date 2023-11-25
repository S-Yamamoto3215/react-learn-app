"use client";

import { todoType } from "@/app/todo/types";

import { useState } from 'react';

import { AddIcon } from '@chakra-ui/icons'
import {
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'

import { MyIconButton } from "@/app/todo/components/Button/index";
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
      <Heading as='h1' size='2xl'>
        Simple ToDo App
      </Heading>
      {/* input Area */}
      <InputGroup size='md'>
        <Input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder='e.x) buy milk'
        />
        <InputRightElement>
          <MyIconButton
            handleClick={() => addTodoData({ inputValue, setInputValue, todos, setTodos })}
            icon={<AddIcon />}
            label="Add Todo"
          />
        </InputRightElement>
      </InputGroup>

      {/* Not Started Area */}
      <div>
        <Heading as='h2' size='xl'>
          Not Started
        </Heading>
        <TodoList todos={todos} setTodos={setTodos} filterValue={'notStarted'} />
      </div>

      {/* In Progress Area */}
      <div>
        <Heading as='h2' size='xl'>
          In Progress
        </Heading>
        <TodoList todos={todos} setTodos={setTodos} filterValue={'inProgress'} />
      </div>

      {/* Completed Area */}
      <div>
        <Heading as='h2' size='xl'>
          Completed
        </Heading>
        <TodoList todos={todos} setTodos={setTodos} filterValue={'completed'} />
      </div>
    </main>
  )
}
