import { BrowserRouter, Routes, Route, Link } from "react-router";
import Cube from "./Swiper-Demos/Cube.jsx";
import "./App.css";
import Flip from "./Swiper-Demos/Flip.jsx";
import Slider from "./Swiper-Demos/Slider.jsx";
import Links from "./Links.jsx";
import Home from "./Home.jsx";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <div style={{ textAlign: "center", margin: "1rem" }}>
          <Link
            to="/"
            style={{
              margin: "1rem",
              fontSize: "1.5rem",
              textDecoration: "underline",
              color: "black",
            }}
          >
            Home
          </Link>
          <Link
            to="/cube"
            style={{
              margin: "1rem",
              fontSize: "1.5rem",
              textDecoration: "underline",
              color: "black",
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
              color: "Black",
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
              color: "black",
            }}
          >
            Slider Effect
          </Link>
          <Link
            to="/links"
            style={{
              margin: "1rem",
              fontSize: "1.5rem",
              textDecoration: "underline",
              color: "black",
            }}
          >
            Helpful links
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cube" element={<Cube />} />
          <Route path="/flip" element={<Flip />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
