import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import MainPage from "./components/MainPage/MainPage.jsx";
import Writing from "./components/Writting/Writing.jsx";
import Speaking from "./components/Speaking/Speaking.jsx";
import Reading from "./components/Reading/Reading.jsx";
import Listening from "./components/LIstening/Listening.jsx";
import QueCard from "./components/QueCard/QueCard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nur" element={<MainPage />} />
        <Route path="/writing" element={<Writing/>}/>
        <Route path="/speaking" element={<Speaking/>}/>
        <Route path="/reading" element={<Reading/>}/>
        <Route path="/listening" element={<Listening/>}/>
        <Route path="/quecard" element={<QueCard/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
