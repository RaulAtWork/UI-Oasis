import C_Code from "./Components/C_Code";
import C_SideBar from "./Components/C_Sidebar";
import C_Buttons from "./Components/C_Buttons";
import Introduction from "./Components/Introduction";


const rootPath = "/components/";

export const topicByTitle = {
    // section: {component, name, link}
    introduction: {
      component: <Introduction />,
      name: "Introduction",
      link: rootPath + "introduction",
    },
    sidebar: {
      component: <C_SideBar />,
      name: "Side Bar",
      link: rootPath + "sidebar",
    },
    buttons: {
      component: <C_Buttons />,
      name: "Buttons",
      link: rootPath + "buttons",
    },
    code: { component: <C_Code />, name: "Code", link: rootPath + "code" },
  };