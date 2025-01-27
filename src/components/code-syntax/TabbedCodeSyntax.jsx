import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import "./code-syntax.css";
import reactElementToJSXString from "react-element-to-jsx-string";

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
        {data.map((element, index)=>(<button key={index + element.title} className={`code-title ${index === currentTab && "active"}`} onClick={()=>onTabChanged(index)}>{element.title}</button>))}
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

export const code = `function TabbedCodeSyntax({ data }) {
  // data: [
  //    {title, codeString, language},
  //    {title, codeString, language}...
  //  ]

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
        {data.map((element, index)=>(
            <button className="code-title " + {index === currentTab && "active"} 
              onClick={()=>onTabChanged(index)}>{element.title}</button>))}
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
}`

export const codeCSS = `.code-syntax{
    display: flex;
    flex-direction: column;
    width: 75ch;
    height: 500px;
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