import React from "react";
import Filter from "../Filter/Filter.tsx";

import "./Footer.css";

interface IProps {
  todoItemsLeft: number;
  filter: string;
  onFilterChange: Function;
  clearCompleted: Function;
}

const Footer: React.FC<IProps> = ({
  todoItemsLeft,
  filter,
  onFilterChange,
  clearCompleted,
}) => {
  return (
    <footer className="footer">
      <div className="footer__items-left">{todoItemsLeft} items left</div>
      <Filter filter={filter} onFilterChange={onFilterChange} />
      <button
        type="button"
        className="footer__items-completed-clear"
        onClick={() => clearCompleted()}
      >
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
