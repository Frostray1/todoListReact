import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const Check = ({ isComplited }) => {
  return (
    <div className={`border-2 rounded-lg border-pink-400 ${isComplited ? 'bg-pink-400' : '' } w-6 h-6 mr-3 flex items-center justify-center`}>
      {isComplited && <AiOutlineCheck size={24} className="text-gray-900" />}
    </div>
  );
};

export default Check;
