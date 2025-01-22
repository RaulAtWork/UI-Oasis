import ExternalLink from "../components/ExternalLink";


function Home() {
  return (
    <main className="home-page">
      <div className="home-title">
        <h1>WELCOME TO THE OASIS</h1>
        <p>
          your go-to resource for building beautiful and functional web
          components with ease.{" "}
        </p>
      </div>
      <div className="home-bottom">
        <div className="home-buttons">
          <button
            className="button-primary"
            onClick={() => navigate("/components")}
          >
            Check out components!
          </button>
          <button
            className="button-primary"
            onClick={() => navigate("/advice")}
          >
            Check out advices!{" "}
          </button>
        </div>
        <p>
          Inspiration from: {" "}
          <ExternalLink link="https://nextui.org/docs" display="NextUI" />
          {" & "}
          <ExternalLink
            link="https://www.styple.dev/docs/overview/introduction"
            display="Styple"
          />
        </p>
      </div>
    </main>
  );
}

export default Home;
