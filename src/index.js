import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Lesson1 from "./components/Lessons/Lesson1"
import Loyiha1 from "./components/Loyiha/Loyiha1/Loyiha1"
import Lesson2 from "./components/Lessons/Lesson2"
import FuncComp from "./components/Lessons/Lesson3 State/FuncComp"
import Tester from "./components/Lessons/Lesson3 State/Tester"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/lesson' element={<Lesson1 />}></Route>
        <Route path='/lesson2' element={<Lesson2 />}></Route>
        <Route path='/lesson3.1' element={<Tester />}></Route>
        <Route path='/lesson3.2' element={<FuncComp />}></Route>
        <Route path='/loyiha' element={<Loyiha1 />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
