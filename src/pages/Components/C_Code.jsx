import Libraries from "../../components/Libraries";
import TabbedCodeSyntax from "../../components/code-syntax/TabbedCodeSyntax";
import { code, codeCSS } from "../../components/code-syntax/TabbedCodeSyntax";
import LIBRARY from "../../data/Libraries";

const tabbedCodeData = [
  { title: "React", codeString: code, language: "javascript" },
  { title: "CSS", codeString: codeCSS, language: "css" },
];

const libData = [
  LIBRARY.FONTAWESOME,
  LIBRARY.COPYTOCLIPBOARD,
  LIBRARY.SYNTAXHIGHLIGHTER,
];

function C_Code() {
  return (
    <article className="component-details">
      <h1>CODE WITH COLORED SYNTAX</h1>
      <p>
        Leveraging the <span className="badge">react-syntax-highlighter</span>{" "}
        library allows you to create <b>code previews</b> that support a wide range of programming languages.
        In addition, this component features tab functionality, enabling users
        to easily switch between different code snippets. Users can also copy
        the code with a simple click, enhancing the overall usability and
        convenience of your application.
      </p>
      <h2>Preview</h2>
      <TabbedCodeSyntax data={tabbedCodeData}></TabbedCodeSyntax>
      <h2>Code</h2>
      <TabbedCodeSyntax data={tabbedCodeData}></TabbedCodeSyntax>
      <h2>Libraries</h2>
      <Libraries data={libData} />
    </article>
  );
}

export default C_Code;
