import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
