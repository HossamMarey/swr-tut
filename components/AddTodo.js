import React from "react";

const AddTodo = () => {
  const addNewTodo = async (e) => {};

  return (
    <div className="container mx-auto px-6">
      <form onSubmit={addNewTodo}>
        <div className="flex items-center relative ">
          <input
            name="todo"
            type="text"
            className="py-4 px-6 pr-16 flex-1 bg-gray-900 rounded-full focus:outline-none shadow-md placeholder-gray-600 text-lg"
            placeholder="Add new todo"
          />
          <button
            type="submit"
            className=" flex justify-center bg-gradient-to-r   from-red-500 to-yellow-600  hover:bg-gradient-to-l hover:from-yellow-500  hover:to-red-600 text-gray-100 py-4 px-12  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500 absolute right-0 opacity-75"
          >
            ADD TODO
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
