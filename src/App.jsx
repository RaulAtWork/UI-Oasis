import { Navigate, Route, Routes, redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Components from "./pages/Components";
import Advice from "./pages/Advice";
import PageNotFound from "./pages/PageNotFound";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation()
  console.log(location)

  return (
    <div className={`main-container ${location.pathname === "/" && "home-background"}`}>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route
          path="/components"
          element={<Navigate to="/components/introduction" />}
        />
        <Route path="/components/:title" Component={Components} />
        <Route
          path="/advice"
          element={<Navigate to="/advice/advice_intro" />}
        />
        <Route path="/advice/:title" Component={Advice} />
        <Route path="*" Component={PageNotFound} />
      </Routes>
    </div>
  );
}

export default App;
