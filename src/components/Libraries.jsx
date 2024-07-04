import ExternalLink from "./ExternalLink";

function Libraries({ data }) {
  /* data = [
    {library, link, description},
    {library, link, description}...
    ]
*/

  return (
    <ul className="bullet-list">
      {data.map((lib, index) => (
        <li key={index + "-" + lib}>
          <span className="badge">{lib.library}</span>: <ExternalLink link={lib.link} display={lib.library} />,{" "}
          {lib.description}
        </li>
      ))}
    </ul>
  );
}

export default Libraries;
