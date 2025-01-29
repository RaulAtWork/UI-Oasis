import { useParams } from "react-router-dom";
import { topicByTitle } from "./Topic.Titles";
import OnThisPage from "../components/OnThisPage";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const sideBarData = [
  {
    section: "Getting Started",
    topics: [topicByTitle.advice_intro, topicByTitle.css_reset, ],
  },
  {
    section: "CSS Set Up",
    topics: [
      topicByTitle.separation,
      topicByTitle.headers,
      topicByTitle.colors,
      topicByTitle.fonts,
    ],
  },
];

function UIUX() {
  let { title } = useParams();
  const [currentComponent, setCurrentComponent] = useState();

  useEffect(() => {
    setCurrentComponent(topicByTitle[title]?.component);
  }, [title]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [currentComponent]);

  return (
    <div className="main-content">
      <SideBar
        data={sideBarData}
        border="right"
        currentTitle={topicByTitle[title]?.name}
      />
      <div className="container">
        <main className="middle-content">{currentComponent}</main>
        <Footer />
      </div>
      <OnThisPage
        trackedComponent={currentComponent}
        querySelector="article.component-details h2"
        border="left"
      />
    </div>
  );
}

export default UIUX;
export const topicsOnUIUX = sideBarData;
