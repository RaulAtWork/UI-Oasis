import C_Code from "./Components/C_Code";
import C_SideBar from "./Components/C_Sidebar";
import C_Buttons from "./Components/C_Buttons/C_Buttons";
import Introduction from "./Components/Introduction";
import A_Introduction from "./Advice/A_Introduction";
import A_Separation from "./Advice/A_Separation";
import A_Headers from "./Advice/A_Headers";
import A_Colors from "./Advice/A_Colors";
import A_Fonts from "./Advice/A_Fonts";
import C_ExternalLink from "./Components/C_ExternalLink";

const componentPath = "/components/";
const advicePath = "/advice/";

export const topicByTitle = {
  // section: {component, name, link}
  introduction: {
    component: <Introduction />,
    name: "Introduction",
    link: componentPath + "introduction",
  },
  sidebar: {
    component: <C_SideBar />,
    name: "Side Bar",
    link: componentPath + "sidebar",
  },
  buttons: {
    component: <C_Buttons />,
    name: "Buttons",
    link: componentPath + "buttons",
  },
  code: { component: <C_Code />, name: "Code", link: componentPath + "code" },
  advice_intro: {
    component: <A_Introduction />,
    name: "Introduction",
    link: advicePath + "advice_intro",
  },
  separation: {
    component: <A_Separation />,
    name: "Margin and Padding",
    link: advicePath + "separation",
  },
  headers: {
    component: <A_Headers />,
    name: "Headers",
    link: advicePath + "headers",
  },
  colors: {
    component: <A_Colors />,
    name: "Color Shades",
    link: advicePath + "colors",
  },
  fonts: {
    component: <A_Fonts />,
    name: "Fonts",
    link: advicePath + "fonts",
  },
  externallink: {
    component: <C_ExternalLink />,
    name: "External Link",
    link: componentPath + "externallink",
  },
};
