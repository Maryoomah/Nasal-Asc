import "./index.css";
import HomePage from "./components/home";

import GameRegistration from "./register";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/registration" element={<GameRegistration />} />
      </Routes>
    </>
  );
}
