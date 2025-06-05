import { addTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

const InputBox = ({
  text,
  setText,
  showFilter,
  setShowFilter,
  filter,
  setFilter,
}) => {
  // set text tyo text state
  function handleChange(event) {
    setText(event.target.value);
  }
  const dispatch = useDispatch();

  return (
    <>
      {/*text box with icon*/}
      <div className="text-[#32292F] flex gap-2 flex-row ">
        <input
          type="text"
          value={text}
          className="bg-[#F0F7F4] p-2 border-3 w-full border-[#70ABAF] outline-none placeholder-[#705D56]"
          onChange={handleChange}
          placeholder="Enter the activity"
        ></input>

        {/*button container*/}
        <div className="flex gap-2 items-center ">
          {/*add icon*/}
          <button
            onClick={() => {
              if (text.trim()) {
                dispatch(addTodo(text));
                setText(""); // Clear input after adding
              } else {
                alert("Please enter a todo item!");
              }
            }}
            className="bg-[#99E1D9] p-2 h-fit hover:bg-[#705D56] active:bg-[#70ABAF] border-3  rounded hover:text-[#F0F7F4]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5" // ✅ camelCase
              stroke="currentColor"
              className="size-6 " // ✅ JSX uses className
            >
              <path
                strokeLinecap="round" // ✅ camelCase
                strokeLinejoin="round" // ✅ camelCase
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>

          {/*fileter icon*/}
          <button
            className="bg-[#99E1D9] p-2 h-fit hover:bg-[#705D56] active:bg-[#70ABAF] border-3 border-[#70ABAF] rounded hover:text-[#F0F7F4]"
            onClick={() => setShowFilter(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          </button>

          {/* pop up box */}
          {showFilter && (
            <div className="fixed inset-0 bg-[#abb2af]/90  z-10">
              <div className="fixed z-20 w-[90%] max-w-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/70 flex flex-col p-4 gap-4 rounded-md shadow-lg">
                {/* clsoe window */}
                <div
                  className="flex justify-end cursor-pointer"
                  onClick={() => setShowFilter(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                {/* All */}
                <div className="flex gap-1 cursor-pointer">
                  <span
                    className={`w-4 h-4 self-center  rounded-full border-[2.5px] border-white
                        ${filter === "all" ? "bg-[#705D56]" : "bg-gray-300"}`}
                    onClick={() => setFilter("all")}
                  />
                  <p>All</p>
                </div>

                {/* Completed */}
                <div className="flex gap-1 cursor-pointer">
                  <span
                    className={`w-4 h-4 self-center rounded-full border-[2.5px] border-white ${
                      filter === "completed" ? "bg-[#705D56]" : "bg-gray-300"
                    }`}
                    onClick={() => setFilter("completed")}
                  />
                  <p>Completed</p>
                </div>

                {/* Incomplete */}
                <div className="flex gap-1 cursor-pointer">
                  <span
                    className={`w-4 h-4 self-center rounded-full border-[2.5px] border-white ${
                      filter === "incomplete" ? "bg-[#705D56]" : "bg-gray-300"
                    }`}
                    onClick={() => setFilter("incomplete")}
                  />
                  <p>Incomplete</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default InputBox;
