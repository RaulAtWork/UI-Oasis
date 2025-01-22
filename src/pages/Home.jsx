import ExternalLink from "../components/ExternalLink";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate()
  return (
    <main>
      <div className="container">
        <h1>Welcome to the Oasis,</h1>
        <p>
          your go-to resource for building beautiful and functional web
          components with ease.{" "}
        </p>
        <p>
          Inspiration from:
          <ExternalLink link="https://nextui.org/docs" display="NextUI" />
          <ExternalLink
            link="https://www.styple.dev/docs/overview/introduction"
            display="Styple"
          />
        </p>
        <button className="button-outline" onClick={() => navigate("/components")}>Check out components!</button>
        <button className="button-outline" onClick={() => navigate("/advice")}>Check out advices! </button>
      </div>
    </main>
  );
}

export default Home;
