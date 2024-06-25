import "./styles/darkmode.scss"
import { useContext } from "react"
import { DarkModeContext } from "./context/darkModeContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import Individual from "./pages/individual/Individual"
import New from "./pages/new/New"
import { userInputs, productInputs } from "./formsource"

function App() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Individual />}  />
              <Route path="new" element={<New inputs={userInputs} title="User" />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Individual />}  />
              <Route path="new" element={<New inputs={productInputs} title="Product" />}  />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
