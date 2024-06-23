import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Components from "./pages/Components"
import Advice from "./pages/Advice"


function App() {

  return (
    <>
      <Header/>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/components" Component={Components}/>
      <Route path="/advice" Component={Advice}/>
    </Routes>
    </>
  )
}

export default App
