import "./C_Buttons.css";

function C_Buttons() {
  return (
    <article className="component-details">
      <h1>Buttons</h1>
      <p>Buttons have 3 levels of importance:
        <ul className="bullet-list">
          <li><b>Primary</b>: Main button that gets highlighted.</li>
          <li><b>Secondary</b>: can be either an outline or a filled button with a darker color.</li>
          <li><b>Tertiary</b>: looks like a link but react as a button on hover.</li>
        </ul>
      </p>
      <h2>Preview</h2>
      <div className="button-list">
        <button className="button-primary"> Primary </button>
        <button className="button-outline"> Outline </button>
        <button className="button-secondary"> Secondary </button>
        <button className="button-tertiary"> Tertiary </button>
      </div>
      <h2>Code</h2>
    </article>
  );
}

export default C_Buttons;

/*
    Button types
    - Filled - Primary
    - Outline vs lighter background - Secondary
    - Bold text, not a button looking
*/
