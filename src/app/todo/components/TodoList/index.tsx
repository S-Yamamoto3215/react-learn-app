import { todoType } from "@/app/todo/types";

import {
  ButtonGroup,
  Flex,
  Spacer,
  Text,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'

import { MyButton } from "@/app/todo/components/Button/index";
import { changeTodoStatus } from '@/app/todo/components/Button/action';

type TodoListProps = {
  todos: todoType[],
  setTodos: (todos: todoType[]) => void,
  filterValue: todoType['status'],
};

export const TodoList = (props: TodoListProps) => {
  const { todos, setTodos, filterValue } = props;
  return (
    <UnorderedList>
      {todos.filter((todo) => todo.status === filterValue).map((todo) => {
        return (
          <ListItem key={todo.id} mb={2}>
            <Flex minWidth='max-content'>
              <Text fontSize='xl'>{todo.title}</Text>
              <Spacer />
              {(filterValue === 'notStarted' || filterValue === 'completed') &&
                <MyButton size="sm" handleClick={() => changeTodoStatus({ todo, todos, setTodos, value: 'inProgress' })}>
                  Do it!
                </MyButton>
              }
              {filterValue === 'inProgress' &&
                <ButtonGroup gap={2}>
                  <MyButton size="sm" handleClick={() => changeTodoStatus({ todo, todos, setTodos, value: 'notStarted' })}>
                    Stay..
                  </MyButton>
                  <MyButton size="sm" handleClick={() => changeTodoStatus({ todo, todos, setTodos, value: 'completed' })}>
                    Comp!
                  </MyButton>
                </ButtonGroup>
              }
            </Flex>
          </ListItem>
        )
      })}
    </UnorderedList>
  );
}
