import { useParams } from "react-router-dom";
import { topicByTitle } from "./Topic.Titles";
import OnThisPage from "../components/OnThisPage";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";

const sideBarData = [
  {
    section: "Getting Started",
    topics: [topicByTitle.advice_intro],
  },
  {
    section: "Advices",
    topics: [topicByTitle.separation, topicByTitle.headers, topicByTitle.colors, topicByTitle.fonts],
  },
];

function Advice() {
  let { title } = useParams();
  const [currentComponent, setCurrentComponent] = useState();

  useEffect(() => {
    setCurrentComponent(topicByTitle[title]?.component);
  }, [title]);

  return (
    <div className="main-content">
      <SideBar data={sideBarData} border="right" currentTitle={topicByTitle[title]?.name}/>
      <main className="container">{currentComponent}</main>
      <OnThisPage
        trackedComponent={currentComponent}
        querySelector="article.component-details h2"
        border="left"
      />
    </div>
  );
}

export default Advice;
