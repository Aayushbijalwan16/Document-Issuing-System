import { createContext,  usestate } from "react";
import PropTypes from "prop-types";
import { DARK_THEME, LIGHT_THEME } from "../Constants/themeConstants";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ childern }) => {
  const [theme, setTheme] = useState(LIGHT_THEME);
  //initially light theme is set
  window.localStorage.setItem("themeMode", theme); //storing in the local storage
  const toogleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
    );
    window.localStorage.setItem("themeMode", theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
ThemeProvider.propTypes = {
  childern: PropTypes.node.isRequired,
};