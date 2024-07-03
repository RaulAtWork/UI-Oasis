import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import "./code-syntax.css";

function TabbedCodeSyntax({ data }) {
  /*data: [
          {title, codeString, language},
          {title, codeString, language}...
          ]
  */

  const [copied, setCopied] = useState(false);
  const [currentTab, setCurrentTab] = useState(0); //Current selected tab index

  function onTabChanged(index){
    setCurrentTab(index)
    setCopied(false)
  }



  return (
    <div className="code-syntax">
      {/*Header*/}
      <div className="code-header">
        {data.map((element, index)=>(<button className={`code-title ${index === currentTab && "active"}`} onClick={()=>onTabChanged(index)}>{element.title}</button>))}
        <CopyToClipboard text={data[currentTab].codeString} onCopy={() => setCopied(true)}>
          <button className="code-copy">
            <FontAwesomeIcon className="fa-icon" icon={faCopy} />
            {copied ? "Copied!" : "Copy Code"}
          </button>
        </CopyToClipboard>
      </div>

      {/*Code preview with custom style*/}
      <SyntaxHighlighter language={data[currentTab].language} style={atomOneDark}>
        {data[currentTab].codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default TabbedCodeSyntax;
