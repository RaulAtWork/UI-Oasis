import { useEffect, useState } from "react";

function OnThisPage({ trackedComponent, querySelector, border }) {
  const [titles, setTitles] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (!querySelector) return;
    const query = document.querySelectorAll(querySelector);
    setTitles(Array.from(query).map((e) => e.textContent));
    setSections(Array.from(query)); // Store the section elements
  }, [querySelector, trackedComponent]);

  useEffect(() => {
    const handleScroll = () => {
      let currentIndex = 0;

      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop >= 0 && sectionTop < window.innerHeight / 3) {
          currentIndex = index;
        }
      });

      setActiveIndex(currentIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const scrollToSection = (index) => {
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  let borderClass = "";
  if (border) borderClass = border === "left" ? "l-border" : "r-border";

  return (
    <div className={`side-bar ${borderClass}`}>
      <ul className="side-list">
        <li className="level-1">On This Page</li>
        <ul>
          {titles.map((title, index) => (
            <li
              key={title + "-" + index}
              className={`level-2 ${activeIndex === index ? "active" : ""}`}
              onClick={() => scrollToSection(index)}
            >
              {title}
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
}

export default OnThisPage;
