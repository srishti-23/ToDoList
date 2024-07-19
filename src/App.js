import React from "react";
import { useState } from "react";
import "./App.css";
import TodoList from "./Todolist";
import backgroundImage from "../src/images/t.jpg";

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const inputEvent = (e) => {
    setInputList(e.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deletedItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((el, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="App">
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover", // Adjust as needed
          backgroundRepeat:'no-repeat',
          backgroundPosition: "center", // Adjust as needed
          /* Additional styling if needed */
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container mt-4 flex items-center justify-center">
          <div class=" rounded-2xl box-border w-80 h-96 border-4 border-neutral-100	">
            <h2 class="text-3xl font-extrabold text-white  mt-4">
              TO DO LIST<br></br>
            </h2>
            <div className="flex justify-between">
              <input
                type="text"
                id="small-input"
                class="block w-75 h-8 text-white-900 border border-black-600 rounded-lg bg-white-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2 mx-2 p-2"
                placeholder="Enter your todos here"
                value={inputList}
                onChange={inputEvent}
              />
              <button
                onClick={listOfItems}
                class="flex justify-center  items-center  bg-green-500 h-8 w-10 `hover:bg-green-700 text-white font-bold rounded-full  p-2 mt-2 my-2 mx-2"
              >
                +
              </button>
            </div>
            <div className="flex justify-between">
              <ol>
                {items.map((itemVal, index) => {
                  return (
                    <TodoList
                      key={index}
                      id={index}
                      text={itemVal}
                      onSelect={deletedItems}
                    />
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
