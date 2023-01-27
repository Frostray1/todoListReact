import React from "react";
import Check from "./Check";
import { IoMdRemoveCircleOutline } from "react-icons/io";

const TodoItem = ({ todo, changeTodo, removeTodo}) => {
  return (
    <div
      className="flex items-center justify-between mb-4 rounded-3xl bg-gray-800 p-5 w-full cursor-pointer select-none"
    >
      <button className="flex items-center"
      onClick={() => changeTodo(todo._id)}
      >
        <Check isComplited={todo.isComplited} />
        <span className={`${todo.isComplited ? "line-through" : ""}`}>
          {todo.title}
        </span>
      </button>
      <button onClick={() => removeTodo(todo._id)}>
        <IoMdRemoveCircleOutline
          size="22"
          className="text-pink-400 hover:text-red-600 transition-colors ease-in-out duration-300"
        />
      </button>
    </div>
  );
};

export default TodoItem;
