import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import "./code-syntax.css"

function CodeSyntax({ codeString }) {
  const [copied, setCopied] = useState(false)

  return (
    <div className="code-syntax">

      {/*Header*/}
      <div className="code-header"> 
        <span className="code-title">Code</span>
        <CopyToClipboard text={codeString} onCopy={()=> setCopied(true)}>
          <button className="code-copy">
            <FontAwesomeIcon className="fa-icon" icon={faCopy} />
            {copied? 'Copied!' : 'Copy Code'}
          </button>
        </CopyToClipboard>
      </div>

      {/*Code preview with custom style*/}
      <SyntaxHighlighter language="javascript" style={atomOneDark}> 
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeSyntax;

export const code = `(
    <div className="code-syntax">

      {/*Header*/}
      <div className="code-header"> 
        <span className="code-title">Code</span>
        <CopyToClipboard text={codeString} onCopy={()=> setCopied(true)}>
          <button className="code-copy">
            <FontAwesomeIcon className="fa-icon" icon={faCopy} />
            {copied? 'Copied!' : 'Copy Code'}
          </button>
        </CopyToClipboard>
      </div>

      {/*Code preview with custom style*/}
      <SyntaxHighlighter language="javascript" style={atomOneDark}> 
        {codeString}
      </SyntaxHighlighter>
    </div>
  );`


export const codeCSS = `.code-syntax{
    display: flex;
    flex-direction: column;
}

.code-syntax .code-header{
    background-color: hsl(0, 0%, 20%);
    padding: var(--padding-xxs) var(--padding-s);
    display: flex;
}


.code-syntax .code-copy{
    margin-left: auto;
    align-items: center;
}

.code-title{
    margin-right: var(--margin-xs);
    padding: var(--padding-xxs);
}

.code-title.active{
    background-color: var(--color-neutral-400);
    color: white;
    border-radius: 5px;
    font-weight: bold;
}`