import { useEffect, useState } from "react";

function OnThisPage({trackedComponent, querySelector, border }) {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    if (!querySelector) return;
    let query = document.querySelectorAll(querySelector);
    setTitles(Array.from(query).map((e) => e.textContent));
  }, [querySelector, trackedComponent]);

  let borderClass = "";
  if (border) borderClass = border === "left" ? "l-border" : "r-border";

  return (
    <div className={`side-bar ${borderClass}`}>
      <ul className="side-list">
        <li className="level-1">On This Page</li>
        <ul>
          {titles.map((title, index) => (
            <li key={title + "-" + index} className="level-2">
              {title}
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
}

export default OnThisPage;
