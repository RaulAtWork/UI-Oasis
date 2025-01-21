import TabbedCodeSyntax from "../../../components/code-syntax/TabbedCodeSyntax";
import "./C_Buttons.css";

const codeCSS = `:root {
    /* We use some shades and a shared padding */
    --shade-50: hsl(203, 20%, 20%);    
    --shade-100: hsl(204, 68%, 30%);
    --shade-200: hsl(204, 90%, 40%);
    --shade-300: hsl(204, 68%, 47%);
    --padding-button: 8px;
}

/* Shared Code for all buttons*/
.button-primary,.button-outline,
.button-secondary,.button-tertiary {
    padding: var(--padding-button);
    border-radius: 5px;
    font-weight: bold;
}

/* Primary button, a darker color when hovered*/
.button-primary {
  background-color: var(--shade-300);
}
.button-primary:hover{
    background-color: var(--shade-100);
}

/* Outline button, same color as primary,
 same look as primary when hovered*/
.button-outline {
  padding: calc(var(--padding-button) - 2px);
  border: 2px solid var(--shade-300);
  color: var(--shade-300);
}
.button-outline:hover{
    background-color: var(--shade-300);
    color: white;
}

/* Secondary button, filled with darken background,
 lighter shade when hovered*/
.button-secondary {
    background-color: var(--shade-50);
    color: white;
}
.button-secondary:hover{
    background-color: var(--shade-100);
}

/* Tertiary button, normal look, but changes the color on hover*/
.button-tertiary:hover {
    color: var(--shade-100)
}
`;

const tabbedCodeData = [{ title: "CSS", codeString: codeCSS, language: "css" }];

function C_Buttons() {
  return (
    <article className="component-details">
      <h1>BUTTONS</h1>
      <p>
        Buttons have 3 levels of importance:
        <ul className="bullet-list">
          <li>
            <b>Primary</b>: Main button that gets highlighted.
          </li>
          <li>
            <b>Secondary</b>: can be either an outline or a filled button with a
            darker color.
          </li>
          <li>
            <b>Tertiary</b>: looks like a link but react as a button on hover.
          </li>
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
      <TabbedCodeSyntax data={tabbedCodeData}></TabbedCodeSyntax>
    </article>
  );
}

export default C_Buttons;
