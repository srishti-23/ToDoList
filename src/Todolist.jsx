import React from "react";

function TodoList(props) {
  return (
    <>
      <div className="flex justify-between ">
        <li className="w-75 h-8 text-white-900 border border-black-600 rounded-lg bg-white-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-black-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2 mx-2 p-2">
          {props.text}
        </li>

        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
          class="flex justify-center items-center bg-red-500 w-10  h-8 hover:bg-red-700 text-white font-bold rounded-full  p-2 mt-2 my-2 mx-2 "
        >
          x
        </button>
      </div>
    </>
  );
}


export default TodoList;
