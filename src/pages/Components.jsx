import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import OnThisPage from "../components/OnThisPage";
import { useEffect, useState } from "react";

import { topicByTitle } from "./Topic.Titles";

const sideBarData = [
  {
    section: "Getting Started",
    topics: [topicByTitle.introduction],
  },
  {
    section: "Components",
    topics: [topicByTitle.buttons],
  },
  {
    section: "Advance Components",
    topics: [topicByTitle.code, topicByTitle.sidebar],
  },
];

function Components() {
  let { title } = useParams();
  const [currentComponent, setCurrentComponent] = useState();

  useEffect(() => {
    setCurrentComponent(topicByTitle[title]?.component);
  }, [title]);

  return (
    <div className="main-content">
      <SideBar data={sideBarData} border="right" />
      <main className="container">{currentComponent}</main>
      <OnThisPage
        trackedComponent={currentComponent}
        querySelector="article.component-details h2"
        border="left"
      />
    </div>
  );
}

export default Components;
