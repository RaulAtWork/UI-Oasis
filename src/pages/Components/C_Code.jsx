import CodeSyntax from "../../components/CodeSyntax"

const codeExample = `function CodeSyntax({ codeString }) {
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
}`

function C_Code(){
    return<article className="component-details">
        <h1>Code with colored syntax</h1>
        <h2>Preview</h2>
        <CodeSyntax codeString={codeExample}/>
        <h2>Code</h2>
    </article>
}

export default C_Code