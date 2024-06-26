import CodeSyntax from "../../components/code-syntaax/CodeSyntax"

const codeExample = `function(){ let rem = 1 + 1}`

const codeSource = `function CodeSyntax({ codeString }) {
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
      <SyntaxHighlighter language="javascript" style={dracula}> 
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}   `

function C_Code(){
    return<article className="component-details">
        <h1>Code with colored syntax</h1>
        <h2>Preview</h2>
        <CodeSyntax codeString={codeExample}/>
        <h2>Code</h2>
        <CodeSyntax codeString={codeSource}/>
    </article>
}

export default C_Code