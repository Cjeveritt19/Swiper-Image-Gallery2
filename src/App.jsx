import { BrowserRouter, Routes, Route, Link } from "react-router";
import Cube from "./Swiper-demos/Cube.jsx";
import "./App.css";
import Flip from "./Swiper-demos/Flip.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ textAlign: "center", margin: "1rem" }}>
        <h1 style={{ fontSize: "2rem" }}>Swiper Demos</h1>
        <p style={{ fontSize: "1.2rem" }}>
          A couple of different Swiper demos using React and Swiper.js
        </p>
      </div>
      <div style={{ textAlign: "center", margin: "1rem" }}>
        <Link
          to="/cube"
          style={{
            margin: "1rem",
            fontSize: "1.5rem",
            textDecoration: "underline",
            color: "blue",
          }}
        >
          Cube Effect
        </Link>
        <Link
          to="/flip"
          style={{
            margin: "1rem",
            fontSize: "1.5rem",
            textDecoration: "underline",
            color: "blue",
          }}
        >
          Flip Effect
        </Link>
      </div>
      <Routes>
        <Route path="/cube" element={<Cube />} />
        <Route path="/flip" element={<Flip />} />
      </Routes>
    </BrowserRouter>
  );
}
