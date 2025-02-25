import React from "react";

import "./TodoListItem.css";

interface Item {
  label: string;
  id: number;
  completed: boolean;
}

interface IProps {
  item: Item;
  id: number;
  onCompleted: Function;
}

const TodoListItem: React.FC<IProps> = ({ item, id, onCompleted }) => {
  let classNames = "";
  if (item.completed) {
    classNames += "__completed";
  }
  return (
    <li className={`item${classNames}`}>
      <input
        type="checkbox"
        id={"button-complete" + id}
        className="item__checkbox"
        onClick={() => onCompleted(item.id)}
        defaultChecked={item.completed}
      />
      <label htmlFor={"button-complete" + id} className="item__label">
        {item.label}
      </label>
    </li>
  );
};

export default TodoListItem;
