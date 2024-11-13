import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./Context/ThemeContext";
import { DARK_THEME } from "./Constants/themeConstants";
import { BrowserRouter as Router, Routers, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLyout from "./layout/BaseLayout";
// import { Dashboard, PageNotFound } from "./screens";
import { Dashboard } from "./screens/dashboard/Dashboard"
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
// import Login from "./screens";
// import 

function App() {
  const { theme, toogleTheme } = useContext(ThemeContext);
  console.log(theme);

  // adding dark-mode class if the dark mode is set on to body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);
  return (
    <>
      <Router>
        <Routes>
          <Route element={BaseLyout} />
          <Route path='/adminlogin' element={<Login />} />
          <Route path='./Dashboard' element={<Dashboard />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='.dashboard/manage_user' element={<addUser />} />
          <Route path='.dashboard/edit_user' element={<editUser />} />
        </Routes>

        <button
          type="button"
          classname="theme-toggle-btn"
          onclick={toogleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button>
      </Router>
    </>
  );
}

export default App;
