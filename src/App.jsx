import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleComplete } from "./features/todo/todoSlice";
import Title from "./components/Title.jsx";
import InputBox from "./components/InputBox.jsx";
import TodoItem from "./components/TodoItems.jsx";

function App() {
  const [text, setText] = useState("");
  const [selectedId, setSelectedId] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState("all");

  //get the list from slice
  const todoList = useSelector((state) => {
    return state.todo.items;
  });

  const dispatch = useDispatch();

  const filteredTodos = todoList.filter((item) => {
    if (filter === "completed") return item.completed;
    if (filter === "incomplete") return !item.completed;
    return true; // if filter is "all"
  });

  return (
    <main className="bg-[#F0F7F4] text-[#32292F] min-h-screen  flex justify-center items-center max-[510px]:p-6 max-[500px]">
      <div className="flex flex-col gap-3  w-[31.5rem]">
        <Title />

        <InputBox
          text={text}
          setText={setText}
          filter={filter}
          setFilter={setFilter}
          showFilter={showFilter}
          setShowFilter={setShowFilter}
        />

        {/*display list*/}
        <div className="bg-[#99E1D9] p-5 min max-h-[250px]  overflow-y-auto">
          <TodoItem
            filteredTodos={filteredTodos}
            dispatch={dispatch}
            
          />
        </div>
      </div>
    </main>
  );
}

export default App;
