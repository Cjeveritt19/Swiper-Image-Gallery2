export default function Links() {
  return (
    <div style={{ textAlign: "center", margin: "1rem 0" }}>
      <h2 style={{ textAlign: "center", color: "orange" }}>
        This page has links to the official Swiper web page and its demos:
      </h2>
      <h3 style={{ color: "black", fontSize: "1.2rem" }}>
        Official Webpage Link:
      </h3>
      <a
        href="https://swiperjs.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          margin: "1rem",
          fontSize: "1.5rem",
          textDecoration: "underline",
          color: "orange",
        }}
      >
        Swiper Official Site
      </a>
      <h4 style={{ color: "black", fontSize: "1.2rem" }}>Demo Link:</h4>
      <a
        href="https://swiperjs.com/demos"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          margin: "1rem",
          fontSize: "1.5rem",
          textDecoration: "underline",
          color: "orange",
        }}
      >
        Swiper Demos
      </a>
    </div>
  );
}
