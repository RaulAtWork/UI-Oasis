import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

function CodeSyntax({ codeString }) {
  const [copied, setCopied] = useState(false)

  return (
    <div className="code-syntax">
      <div className="code-header">
        <span className="code-title">Code</span>
        <CopyToClipboard text={codeString} onCopy={()=> setCopied(true)}>
          <button className="code-copy">
            <FontAwesomeIcon className="fa-icon" icon={faCopy} />
            {copied? 'Copied!' : 'Copy Code'}
          </button>
        </CopyToClipboard>
      </div>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeSyntax;
