import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

function CodeSyntax({ codeString }) {
  return (
    <div className="code-syntax">
        <div className="code-header">
            <span className="code-title">Code</span>
            <button className="code-copy"><FontAwesomeIcon className="fa-icon" icon={faCopy} />Copy code</button>
        </div>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeSyntax;
