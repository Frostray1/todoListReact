import React, { useState } from "react";
import CreateTodoField from "../CreateTodoField/CreateTodoField";
import TodoItem from "../item/TodoItem";

const data = [
  
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isComplited = !current.isComplited;
    setTodos(copy);
  };
  const removeTodo = (id) => setTodos([...todos].filter((t) => t._id !== id));

  

  return (
    <div className=" text-white w-4/5 mx-auto">
      
      <h1 className="text-2xl font-bold text-center mb-10">Todo React</h1>
      <CreateTodoField className="mb-10" setTodos={setTodos}/>
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
