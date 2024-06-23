import Collapsible from "./Collapsible";

function SideBar({ data, border }) {
  /*data: [{section: XXX, topics: [
                {name: XXX, component: XXX},
                {name: XXX, component: XXX},...
                ]
            },....]*/

  // console.log(data)
  let borderClass = "";
  if (border) borderClass = border === "left" ? "l-border" : "r-border";

  return (
    <div className={`side-bar ${borderClass}`}>
      <ul className="side-list">
        {data.map((item, index) => (
          <li key={index} className="level-1">
            <Collapsible open="false" title={item.section}>
              <Topics topics={item.topics} />
            </Collapsible>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;

function Topics({ topics }) {
  return (
    <ul>
      {topics.map((t, index) => (
        <li className="level-2" key={index}>
          {t.name}
        </li>
      ))}
    </ul>
  );
}
