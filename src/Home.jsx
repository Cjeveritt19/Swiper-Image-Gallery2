import "./App.css";
export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Swiper Demos</h1>
      <img
        src="https://images.squarespace-cdn.com/content/v1/58c958cde6f2e1f7914d5d62/1492896036926-VPW8Y1R48D897B3YC4HJ/Halloween-giphy-2.gif"
        alt="Dancing cat"
        className="width-64 height-40 rounded-lg shadow-lg"
      />

      <p className="home-description">
        Explore various Swiper effects by navigating to the links above.
      </p>
      <p
        style={{
          color: "black",
          fontSize: "1.5rem",
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        Its spooky season! Enjoy the demos.👻
      </p>
    </div>
  );
}
