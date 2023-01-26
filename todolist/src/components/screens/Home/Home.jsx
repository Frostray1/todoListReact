import React from "react";
import TodoItem from "../item/TodoItem";

const todos = [
  {
    _id:'1',
    title: "post 1",
    isComplited: false,
  },
  {
    _id:'2',
    title: "post 2",
    isComplited: false,
  },
  {
    _id:'3',
    title: "post 3",
    isComplited: false,
  },
];

const Home = () => {
  return (
    <div className=" text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">Todo React</h1>
      {todos.map((item) => (
        <TodoItem key={item._id} todo={item} />
      ))}
    </div>
  );
};

export default Home;
