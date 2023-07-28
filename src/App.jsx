import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./HomePage";
import {BrowserRouter,Routes, Route}  from "react-router-dom"
import MovieDetail from "./MovieDetail";
import Dashboard from "./Dashboard";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} ></Route>
          <Route path="/movies" element={<MovieDetail/>} ></Route>
          <Route path="/movies/:idx" element={<MovieDetail/>} ></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
