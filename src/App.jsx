import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="flex justify-center  px-5    py-4    sm:px-4  md:px-5">
        <Outlet />
      </main>
    </>
  );
}

export default App;
