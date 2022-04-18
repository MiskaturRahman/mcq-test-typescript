import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Exam from "./pages/Exam";
import Home from "./pages/Home";
import Result from "./pages/Result";

function App() {
  return (
    <div className="App" data-testid="app">
      <BrowserRouter data-testid="router">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
