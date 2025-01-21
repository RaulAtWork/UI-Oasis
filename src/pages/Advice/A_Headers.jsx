import "./A_Headers.css";

function A_Headers() {
  return (
    <article className="component-details">
      <h1>HEADERS</h1>
      <h2>line-height</h2>
      <div className="lh-headers">
        <p>
          When headers are more than one line we should adjust the{" "}
          <code>line-height</code> to be lass than the normal value. In this
          particular case readability is improved when we have <code>1</code> vs{" "}
          <code>1.5</code>
        </p>
        <h3 className="lh-1">
          Line Header 1
          <br /> Subtext
        </h3>
        <h3 className="lh-15">
          Line Header 1.5 <br /> Subtext
        </h3>
      </div>
      <h2>letter-spacing</h2>
      <div className="ls-headers">
        <p>
          Based on your <code>font-family</code> your title can change heavily,
          but it is important to know that if you are using a not adapted title
          font, you should adjust the letter-spacing to your needs.
        </p>
        <br />
        <p>
          If your titles follow the normal english title capitalization, you
          must compress the letter for better readability.
        </p>
        <br />
        <h3 className="lower-normal">How to Create your own Portfolio</h3>
        <h3 className="lower-improved">How to Create your own Portfolio</h3>
        <h3 className="lower-font">How to Create your own Portfolio</h3>
        <br />
        <p>
          If your titles are all in CAPITAL letters, then make sure to have
          enough space between letters for better readability.
        </p>
        <br />
        <h3 className="upper-normal">FRONT END DEVELOPER</h3>
        <h3 className="upper-improved">FRONT END DEVELOPER</h3>
        <h3 className="upper-font">FRONT END DEVELOPER</h3>
      </div>
      <h2>font-family</h2>
      <p>Your titles can vary heavily based on the font type</p>
    </article>
  );
}

export default A_Headers;
