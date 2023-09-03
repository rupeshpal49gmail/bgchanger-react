import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-1 rounded-xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-600"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <br />
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-600"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <br />
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-600"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
