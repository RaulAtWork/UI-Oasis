import CodeSyntax from "../../components/CodeSyntax"

const codeExample = "function (num) => num + 1"

function C_Code(){
    return<article className="component-details">
        <h1>Code with colored syntax</h1>
        <h2>Preview</h2>
        <CodeSyntax codeString={codeExample}/>
        <h2>Code</h2>
    </article>
}

export default C_Code