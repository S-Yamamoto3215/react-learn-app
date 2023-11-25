import { todoType } from "@/app/todo/types";

import {
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
          <ListItem key={todo.id}>
            <Text fontSize='xl'>{todo.title}</Text>
            {(filterValue === 'notStarted' || filterValue === 'completed') &&
              <MyButton handleClick={() => changeTodoStatus({ todo, todos, setTodos, value: 'inProgress' })}>
                In Progress
              </MyButton>
            }
            {filterValue === 'inProgress' &&
              <>
                <MyButton handleClick={() => changeTodoStatus({ todo, todos, setTodos, value: 'notStarted' })}>
                  Not Started
                </MyButton>
                <MyButton handleClick={() => changeTodoStatus({ todo, todos, setTodos, value: 'completed' })}>
                  Completed
                </MyButton>
              </>
            }
          </ListItem>
        )
      })}
    </UnorderedList>
  );
}
