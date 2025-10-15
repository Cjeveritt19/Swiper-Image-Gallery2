import { BrowserRouter, Routes, Route, Link } from "react-router";
import Cube from "./Swiper-Demos/Cube.jsx";
import "./App.css";
import Flip from "./Swiper-Demos/Flip.jsx";
import Slider from "./Swiper-Demos/Slider.jsx";

export default function App() {
  return (
    <BrowserRouter>
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
        <Link
          to="/slider"
          style={{
            margin: "1rem",
            fontSize: "1.5rem",
            textDecoration: "underline",
            color: "blue",
          }}
        >
          Slider Effect
        </Link>
      </div>
      <Routes>
        <Route path="/cube" element={<Cube />} />
        <Route path="/flip" element={<Flip />} />
        <Route path="/slider" element={<Slider />} />
      </Routes>
    </BrowserRouter>
  );
}
