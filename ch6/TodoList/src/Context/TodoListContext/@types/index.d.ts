interface ITdoListContext {
  todoList: Arrayy<string>;
  addTodoList: (todo: string) => void;
  removeTodoList: (index: number) => void;
}