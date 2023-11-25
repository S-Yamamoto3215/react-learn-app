import { todoType } from "@/app/todo/types";

type AddTodoDataProps = {
  inputValue: string;
  setInputValue: (value: string) => void;
  todos: todoType[];
  setTodos: (todos: todoType[]) => void;
};

export const addTodoData: (props: AddTodoDataProps) => void = (
  { inputValue, setInputValue, todos, setTodos }
) => {
  if (!inputValue) return
  const newTodo: todoType = {
    // todo:idはライブラリで生成する
    id: crypto.randomUUID(),
    title: inputValue,
    status: 'notStarted',
  }
  setTodos([...todos, newTodo])
  setInputValue("")
}

type ChangeTodoStatusProps = {
  todo: todoType;
  todos: todoType[];
  setTodos: (todos: todoType[]) => void;
  value: todoType["status"];
};

export const changeTodoStatus: (props: ChangeTodoStatusProps) => void = (
  { todo, todos, setTodos, value }
) => {
  const newTodos = todos.map((item) => {
    if (item.id === todo.id) {
      item.status = value
    }
    return item
  })
  setTodos(newTodos)
}
