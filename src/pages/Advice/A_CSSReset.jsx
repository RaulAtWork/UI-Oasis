import TabbedCodeSyntax from "../../components/code-syntax/TabbedCodeSyntax";

const codeCSS = `/* Box sizing border-box reset */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* Typography reset */
body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
}

a {
    text-decoration: none;
    color: inherit;
}

/* Form elements reset */
button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border: none;
    background-color: transparent;
}

button:focus, input:focus, select:focus, textarea:focus {
    outline: none;
}

/* List reset */
ul, ol {
    list-style: none;
}

/* Image reset */
img {
    max-width: 100%;
    height: auto;
}
`
const tabbedData = [{title:"CSS Boilerplate", codeString: codeCSS, language:"css"}]

function A_CSSReset() {
  return (
    <article className="component-details">
      <h1>CSS RESET</h1>
      <p>
        A CSS reset file is essential for consistency and predictability in
        design by <b>removing browser-specific default styles </b> that can vary
        widely. It resets <b>margins</b>, <b>padding</b>, and <b>box-sizing</b> to create a clean
        slate, ensuring consistent element sizing. <b>Typography</b> is standardized by
        setting a default font, size, and line height, while form elements and
        lists are reset to remove inconsistent styles like <b>borders</b>, <b>outlines</b>,
        and <b>list markers</b>. Additionally, images are adjusted to be responsive by
        default.
      </p>

      <h2>CSS Reset Boilerplate</h2>
      <TabbedCodeSyntax data={tabbedData}/>
    </article>
  );
}

export default A_CSSReset;
