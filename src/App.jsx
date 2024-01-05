import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Header />
      <main className="flex justify-center  px-5    py-4    sm:px-4  md:px-5">
        <Suspense fallback={<h1 className="text-2xl"> Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default App;
