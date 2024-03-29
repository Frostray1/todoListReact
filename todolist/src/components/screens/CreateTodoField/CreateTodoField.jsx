import React, { useState } from "react";

const CreateTodoField = ({ setTodos }) => {
  const [title, setTitle] = useState("");

  const addTodo = (title) => {
    setTodos(prev =>[
      {
        _id: new Date(),
        title,
        isComplited: false,
      },
      ...prev,
    ]);
    setTitle('')
  };


  return (
    <div className="flex items-center justify-between mb-20 rounded-3xl border-gray-800 border-2 px-5 py-3 w-full  ">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyPress = {e => e.key=== 'Enter' && addTodo(title)}
        className='bg-transparent w-full border-none outline-none'
        placeholder="Add task"
      />
    </div>
  );
};

export default CreateTodoField;
