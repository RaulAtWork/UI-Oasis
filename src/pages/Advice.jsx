import { useParams } from "react-router-dom";
import { topicByTitle } from "./Topic.Titles";
import OnThisPage from "../components/OnThisPage";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const sideBarData = [
  {
    section: "Getting Started",
    topics: [topicByTitle.advice_intro],
  },
  {
    section: "Advices",
    topics: [
      topicByTitle.separation,
      topicByTitle.headers,
      topicByTitle.colors,
      topicByTitle.fonts,
    ],
  },
];

function Advice() {
  let { title } = useParams();
  const [currentComponent, setCurrentComponent] = useState();

  useEffect(() => {
    setCurrentComponent(topicByTitle[title]?.component);
    window.scrollTo(0, 0);
  }, [title]);

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

export default Advice;
export const topicsOnAdvice = sideBarData
