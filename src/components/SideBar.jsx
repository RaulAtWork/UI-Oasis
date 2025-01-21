import { Link } from "react-router-dom";
import Collapsible from "./Collapsible";

function SideBar({ data, border, currentTitle }) {
  /*data: [{section: XXX, topics: [
                {name: XXX, link: XXX},
                {name: XXX, link: XXX},...
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
              <ul>
                {item.topics.map((t, index) => (
                  <li
                    className={`level-2 ${
                      t.name === currentTitle ? "active" : ""
                    }`}
                    key={index + "_" + t.name}
                  >
                    <Link to={t.link}>{t.name}</Link>
                  </li>
                ))}
              </ul>
            </Collapsible>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
