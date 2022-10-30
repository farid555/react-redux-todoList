import React from "react";
import { VscCheckAll } from "react-icons/vsc";
import Plus from "../assets/images/plus.png";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import { added } from "../redux/todos/actions";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(added(input));
    setInput("");
  };

  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md m-10"
        onSubmit={submitHandler}
      >
        <div className="m-6 h-6 w-6">
          <AiOutlineEdit />
        </div>

        <input
          type="text"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          placeholder="input todos"
          value={input}
          onChange={handleInput}
        />

        <img
          src={Plus}
          alt="add"
          type="submit"
          className="appearance-none w-6 h-6 bg-no-repeat bg-contain m-4"
        />
      </form>
      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <VscCheckAll />
          <span> Complete All task</span>
        </li>
        <li className="cursor-pointer">Clear complete</li>
      </ul>
    </div>
  );
};

export default Header;
