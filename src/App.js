import "./styles/darkmode.scss"
import { useContext } from "react"
import { DarkModeContext } from "./context/darkModeContext"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import Individual from "./pages/individual/Individual"
import New from "./pages/new/New"
import { userInputs, productInputs } from "./formsource"
import { AuthContext } from "./context/authContext"

function App() {
  const { darkMode } = useContext(DarkModeContext)

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login" />
  }

  console.log(currentUser)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route index element={<RequireAuth><Home /></RequireAuth>} />
            <Route path="users">
              <Route index element={<RequireAuth><List /></RequireAuth>} />
              <Route path=":userId" element={<RequireAuth><Individual /></RequireAuth>}  />
              <Route path="new" element={<RequireAuth><New inputs={userInputs} title="User" /></RequireAuth>} />
            </Route>
            <Route path="products">
              <Route index element={<RequireAuth><List /></RequireAuth>} />
              <Route path=":productId" element={<RequireAuth><Individual /></RequireAuth>}  />
              <Route path="new" element={<RequireAuth><New inputs={productInputs} title="Product" /></RequireAuth>}  />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
