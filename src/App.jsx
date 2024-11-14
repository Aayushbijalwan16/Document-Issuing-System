import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./Context/ThemeContext";
import { DARK_THEME } from "./Constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLyout from "./layout/BaseLayout";
// import { Dashboard, PageNotFound } from "./screens";
// import { Dashboard } from "./screens/dashboard/Dashboard"
import Login  from "./pages/Auth/Login";
import  Register from "./pages/Auth/Register";


function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
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
          <Route path="./pages/login" element={<Login />}></Route>
          {/* <Route path='/adminlogin' element={<Login />}></Route> */}
           {/* <Route path='./Dashboard' element={<Dashboard />}></Route> */}
          <Route path='*' element={<PageNotFound />}></Route>
          {/* <Route path='.dashboard/manage_user' element={<addUser />}></Route>
          <Route path='.dashboard/edit_user' element={<editUser />}></Route> */}
        </Routes>

        <button
          type="button"
          classname="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button>
      </Router>
    </>
  );
};

export default App;
