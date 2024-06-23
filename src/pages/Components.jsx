import SideBar from "../components/SideBar";

const sideBarData = [
  {
    section: "Getting Started",
    topics: [{ name: "Topic 1" }, { name: "Topic 2" }],
  },
  { section: "Components", 
    topics: [{ name: "Topic 1" }, { name: "Topic 2" }] },
];

function Components() {
  return (
    <div className="main-content">
      <SideBar data={sideBarData} border="right" />
      <main className="container">
        <h1> Components</h1>
      </main>
      <SideBar data={sideBarData} border="left" />
    </div>
  );
}

export default Components;
