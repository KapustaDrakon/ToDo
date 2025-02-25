import React from "react";

import "./Filter.css";

interface IProps {
  filter: string;
  onFilterChange: Function;
}

const Filter: React.FC<IProps> = ({ filter, onFilterChange }) => {
  const buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "completed", label: "Completed" },
  ];
  const filterButtons = buttons.map(({ name, label }) => {
    const isActive = filter === name;
    const buttonClass = isActive ? "selected" : "";
    return (
      <li key={name}>
        <button
          type="button"
          className={`filter__button ${buttonClass}`}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      </li>
    );
  });
  return <ul className="filter">{filterButtons}</ul>;
};

export default Filter;
