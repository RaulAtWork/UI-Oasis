import { Navigate, Route, Routes, redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Components from "./pages/Components";
import UIUX from "./pages/UIUX";
import PageNotFound from "./pages/PageNotFound";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation()

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
          path="/uiux"
          element={<Navigate to="/uiux/advice_intro" />}
        />
        <Route path="/uiux/:title" Component={UIUX} />
        <Route path="*" Component={PageNotFound} />
      </Routes>
    </div>
  );
}

export default App;
