import TabbedCodeSyntax from "../../components/code-syntax/TabbedCodeSyntax";
import ExternalLink from "../../components/ExternalLink";
import Libraries from "../../components/Libraries";
import LIBRARY from "../../data/Libraries";

const code = `function ExternalLink({ link, display }) {
  return (
    <a className="link-external" href={link} target="blank">
      {display}
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </a>
  );
}`;

const codeCSS = `.link-external{
  color: #41adff;
}

.link-external svg{
  margin-left: 4px;
}`;

const tabbedCodeData = [
  { title: "React", codeString: code, language: "javascript" },
  { title: "CSS", codeString: codeCSS, language: "css" },
];

const libData = [LIBRARY.FONTAWESOME];

function C_ExternalLink() {
  return (
    <article className="component-details">
      <h1> EXTERNAL LINK </h1>
      <p>
        An <b>external link</b> informs the user that they will be navigating to a
        webpage outside of the current site. This is important for providing
        transparency and ensuring users are <b>aware of their performed actions</b>.
      </p>
      <h2> Preview </h2>
      <ExternalLink
        display="This is a link to google"
        link="http://www.google.com"
      />
      <h2> Code </h2>
      <TabbedCodeSyntax data={tabbedCodeData} />
      <h3>Libraries</h3>
      <Libraries data={libData} />
    </article>
  );
}

export default C_ExternalLink;
