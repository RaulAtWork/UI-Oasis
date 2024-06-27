import CodeSyntax from "../../components/code-syntaax/CodeSyntax"
import TabbedCodeSyntax from "../../components/code-syntaax/TabbedCodeSyntax"

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

const cssExample = `.code-syntax{
    display: flex;
    flex-direction: column;
}

.code-syntax .code-header{
    background-color: hsl(0, 0%, 20%);
    padding: var(--padding-s) var(--padding-m);
    display: flex;
}


.code-syntax .code-copy{
    margin-left: auto;
    align-items: center;
}
`


const tabbedCodeData=[
  {title: "React", codeString:codeExample, language: "javascript"},
  {title: "CSS", codeString:cssExample, language: "css"},
  
]

function C_Code(){
    return<article className="component-details">
        <h1>Code with colored syntax</h1>
        <h2>Preview</h2>
        <CodeSyntax codeString={codeExample}/>
        <h2>Code</h2>
        <CodeSyntax codeString={codeSource}/>
        <h2>Tabbed code</h2>
        <TabbedCodeSyntax data={tabbedCodeData}></TabbedCodeSyntax>
    </article>
}

export default C_Code