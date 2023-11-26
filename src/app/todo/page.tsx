"use client";

import { todoType } from "@/app/todo/types";

import { useState } from 'react';

import { AddIcon } from '@chakra-ui/icons'
import {
  Box,
  Center,
  Container,
  Heading,
  Input, InputGroup, InputRightElement,
  Tabs, TabList, TabPanels, Tab, TabPanel
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
      <Center h='50px'>
        <Heading as='h1' size='2xl'>
          Simple ToDo App
        </Heading>
      </Center>
      {/* input Area */}
      <Container mt={8} mb={8}>
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
      </Container>
      <Box mx={8}>
        <Tabs variant='unstyled'>
          <TabList>
            <Tab _selected={{ color: 'white', bg: 'red.500' }}>Not Started</Tab>
            <Tab _selected={{ color: 'white', bg: 'green.500' }}>In Progress</Tab>
            <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Completed</Tab>
          </TabList>

          <TabPanels>
            {/* Not Started */}
            <TabPanel>
              <TodoList todos={todos} setTodos={setTodos} filterValue={'notStarted'} />
            </TabPanel>

            {/* In Progress */}
            <TabPanel>
              <TodoList todos={todos} setTodos={setTodos} filterValue={'inProgress'} />
            </TabPanel>

            {/* Completed */}
            <TabPanel>
              <TodoList todos={todos} setTodos={setTodos} filterValue={'completed'} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </main>
  )
}
