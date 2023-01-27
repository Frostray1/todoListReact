import React, { useState } from "react";
import TodoItem from "../item/TodoItem";

const data = [
  {
    _id: "1",
    title: "post 1",
    isComplited: false,
  },
  {
    _id: "2",
    title: "post 2",
    isComplited: false,
  },
  {
    _id: "3",
    title: "post 3",
    isComplited: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isComplited = !current.isComplited;
    setTodos(copy);
  };
  const removeTodo = id => setTodos([...todos].filter(t => t._id !== id))

  const addTodo = (title) => {
    setTodos([...todos, {
      _id: new Date(),
      title,
      isComplited:false,
    }])
  }

  return (
    <div className=" text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">Todo React</h1>
      {todos.map((item) => (
        <TodoItem
          key={item._id}
          todo={item}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default Home;
