import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { RoutesMain as Routes } from "./Routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes />
      <ToastContainer />
    </div>
  );
}

export default App;
