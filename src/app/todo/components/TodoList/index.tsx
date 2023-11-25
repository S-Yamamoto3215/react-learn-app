import { todoType } from "@/app/todo/types";

import { Button } from '@/app/todo/components/Button';
import { changeTodoStatus } from '@/app/todo/components/Button/action';

type TodoListProps = {
  todos: todoType[],
  setTodos: (todos: todoType[]) => void,
  filterValue: todoType['status'],
};

export const TodoList = (props: TodoListProps) => {
  const { todos, setTodos, filterValue } = props;
  return (
    <ul>
      {todos.filter((todo) => todo.status === filterValue).map((todo) => {
        return (
          <li key={todo.id}>
            {todo.title}
            {(filterValue === 'notStarted' || filterValue === 'completed') &&
              <Button handleClick={() => changeTodoStatus({ todo, todos, setTodos, value: 'inProgress' })}>
                In Progress
              </Button>
            }
            {filterValue === 'inProgress' &&
              <>
                <Button handleClick={() => changeTodoStatus({ todo, todos, setTodos, value: 'notStarted' })}>
                  Not Started
                </Button>
                <Button handleClick={() => changeTodoStatus({ todo, todos, setTodos, value: 'completed' })}>
                  Completed
                </Button>
              </>
            }
          </li>
        )
      })}
    </ul>
  );
}
