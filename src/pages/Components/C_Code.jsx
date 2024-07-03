import reactElementToJSXString from "react-element-to-jsx-string";
import TabbedCodeSyntax from "../../components/code-syntax/TabbedCodeSyntax";
import { code, codeCSS } from "../../components/code-syntax/CodeSyntax";

function C_Code() {
  const tabbedCodeData = [
    { title: "React", codeString: code, language: "javascript" },
    { title: "CSS", codeString: codeCSS, language: "css" },
  ];
  return (
    <article className="component-details">
      <h1>Code with colored syntax</h1>
      <h2>Preview</h2>
      <TabbedCodeSyntax data={tabbedCodeData}></TabbedCodeSyntax>
      <h2>Code</h2>
      <TabbedCodeSyntax data={tabbedCodeData}></TabbedCodeSyntax>
    </article>
  );
}

export default C_Code;
