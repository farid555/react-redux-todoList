import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  console.log(todos, filters);

  const filterByStatus = (todo) => {
    const { status } = filters;
    switch (status) {
      case "Complete":
        return todo.completed;
      case "Incompleted":
        return !todo.completed;
      default:
        return true;
    }
  };
  const filterByColors = (todo) => {
    const { colors } = filters;
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };

  return (
    <div className="mt text-gray-700 text-sm max-h-[300px]">
      {todos
        .filter(filterByStatus)
        .filter(filterByColors)
        .map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
    </div>
  );
};

export default TodoList;
