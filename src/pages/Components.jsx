import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import C_SideBar from "./Components/C_Sidebar";
import C_Buttons from "./Components/C_Buttons";

const rootPath = "/components/"

const sideBarData = [
  {
    section: "Getting Started",
    topics: [{ name: "Topic 1" }, { name: "Topic 2" }],
  },
  { section: "Components", 
    topics: [{ name: "Side Bar", link:rootPath+"sidebar" }, { name: "Button" , link:rootPath+"button" }] },
];

const pageByTitle = {
  sidebar: <C_SideBar/>,
  button: <C_Buttons/>
}

function Components() {

  let {title} = useParams();

  return (
    <div className="main-content">
      <SideBar data={sideBarData} border="right" />
      <main className="container">
        {pageByTitle[title]}
      </main>
      <SideBar data={sideBarData} border="left" />
    </div>
  );
}

export default Components;
