import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import OnThisPage from "../components/OnThisPage";
import { useEffect, useState } from "react";

import { topicByTitle } from "./Topic.Titles";
import Footer from "../components/Footer";

const sideBarData = [
  {
    section: "Getting Started",
    topics: [topicByTitle.introduction],
  },
  {
    section: "Components",
    topics: [topicByTitle.buttons, topicByTitle.externallink],
  },
  {
    section: "Advance Components",
    topics: [topicByTitle.code],
  },
];

function Components() {
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

export default Components;
export const topicsOnComponents = sideBarData
