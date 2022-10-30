import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { statusChanged, colorChanged } from "../redux/filters/actions";

const numberOfTodos = (number_Of_Todos) => {
  switch (number_Of_Todos) {
    case 0:
      return "No task";
    case 1:
      return "1 task";
    default:
      return `$ {number_Of_Todos} tasks`;
  }
};

const Footer = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  console.log(todos);
  console.log(filters);

  const todoRemaining = todos.filter((todo) => !todo.completed).length;
  console.log("Remaining:", todoRemaining);

  const { status, colors } = filters;

  const handleStatusChange = (status) => {
    dispatch(statusChanged(status));
  };

  const handleColorChange = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChanged(color, "removed"));
    } else {
      dispatch(colorChanged(color, "added"));
    }
  };

  return (
    <div className="flex justify-between mt-4 text-xs text-gray-500">
      <p className="m-4"> {numberOfTodos(todoRemaining)} left </p>
      <ul className="flex space-x-4  items-center text-xs">
        <li
          className={`cursor-pointer ${status === "All" && "font-bold"}`}
          onClick={() => handleStatusChange("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
          onClick={() => handleStatusChange("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
          onClick={() => handleStatusChange("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
          onClick={() => handleColorChange("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => handleColorChange("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => handleColorChange("yellow")}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
