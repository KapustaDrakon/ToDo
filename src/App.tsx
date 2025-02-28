import React, { useEffect, useState } from "react";
import HeaderInput from "./components/HeaderInput/HeaderInput.tsx";
import TodoList from "./components/TodoList/TodoList.tsx";
import Footer from "./components/Footer/Footer.tsx";

interface Item {
  label: string;
  id: number;
  completed: boolean;
}

function App() {
  const [todoData, setTodoData] = useState<Item[]>([]);
  const [filter, setFilter] = useState<string>("all");

  let [maxId, setMaxId] = useState<number>(100);
  const getId = () => {
    setMaxId(++maxId);
    return maxId;
  };

  const createTodoItem = (label: string) => {
    return {
      label,
      id: getId(),
      completed: false,
    };
  };

  useEffect(() => {
    setTodoData([
      createTodoItem("Покушать"),
      createTodoItem("Поспать"),
      createTodoItem("Попить пиво"),
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addItem = (label: string) => {
    const newItem = createTodoItem(label);
    const newTodoData = [newItem, ...todoData];
    return setTodoData(newTodoData);
  };

  const onCompleted = (id: number) => {
    const idx = todoData.findIndex((item) => item.id === id);
    const oldItem = todoData[idx];
    const newItem = {
      ...oldItem,
      completed: !oldItem.completed,
    };
    return setTodoData([
      ...todoData.slice(0, idx),
      newItem,
      ...todoData.slice(idx + 1),
    ]);
  };

  const filterChange = (items: Item[], filter: string) => {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.completed);
      case "completed":
        return items.filter((item) => item.completed);
      default:
        return items;
    }
  };

  const onFilterChange = (filter: string) => {
    return setFilter(filter);
  };

  const clearCompleted = () => {
    const unCompletedItems = todoData.filter((item) => !item.completed);
    return setTodoData(unCompletedItems);
  };

  const todoItemsLeft: number =
    todoData.length - todoData.filter((item) => item.completed).length;
  const visibleItems: Item[] = filterChange(todoData, filter);

  return (
    <section className="app">
      <HeaderInput addItem={addItem} />
      <TodoList todos={visibleItems} onCompleted={onCompleted} />
      <Footer
        todoItemsLeft={todoItemsLeft}
        filter={filter}
        onFilterChange={onFilterChange}
        clearCompleted={clearCompleted}
      />
    </section>
  );
}

export default App;
