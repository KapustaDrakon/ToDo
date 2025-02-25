import React, { useState } from "react";
import "./HeaderInput.css";

interface IProps {
  addItem: Function;
}

const HeaderInput: React.FC<IProps> = ({ addItem }) => {
  const [label, setLabel] = useState<string>("");

  const onLabelChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    return setLabel(event.target.value);
  };

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (label !== "" && label.split(" ").length - 1 !== label.length) {
      addItem(label);
      setLabel("");
    }
  };

  return (
    <header className="header">
      <h1 className="header__title">todos</h1>

      <form className="new-todo-form" onSubmit={onSubmit}>
        <input
          value={label}
          name="new-todo"
          className="new-todo-form__input"
          type="text"
          placeholder="What needs to be done?"
          autoFocus
          required
          onChange={onLabelChange}
        />
      </form>
    </header>
  );
};

export default HeaderInput;
