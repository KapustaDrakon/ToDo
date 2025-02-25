import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem.tsx";

import "./TodoList.css";

interface Item {
  label: string;
  id: number;
  completed: boolean;
}

interface IProps {
  todos: Item[];
  onCompleted: Function;
}

const TodoList: React.FC<IProps> = ({ todos, onCompleted }) => {
  const elements = todos.map((item) => {
    return (
      <div key={item.id}>
        <TodoListItem item={item} id={item.id} onCompleted={onCompleted} />
      </div>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};

export default TodoList;
