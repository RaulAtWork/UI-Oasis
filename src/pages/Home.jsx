import ExternalLink from "../components/ExternalLink";

function Home() {
  return (
    <main >
      <div className="container">
        <h1>Welcome to the Oasis,</h1>
        <p>your go-to resource for building beautiful and functional web components with ease. </p>
        <p>Inspiration from:
          <ExternalLink link="https://nextui.org/docs" display="NextUI"/>
          <ExternalLink link="https://www.styple.dev/docs/overview/introduction" display="Styple"/>

 </p>
      </div>
    </main>
  );
}

export default Home;
