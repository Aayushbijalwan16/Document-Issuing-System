import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { LIGHT_THEME } from "../../Constants/themeConstants";
import LogoBlue from "../../assets/images/logo_blue.svg";
import LogoWhite from "../../assets/images/logo_white.svg";
import {
  MdOutlineAttachMoney,
  MdOutlineCurrencyExchange,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlinePeople,
  MdOutlineSettings,
  MdOutlineShoppingBag,
} from "react-icons/md";
import "./sidebar.scss";

const sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const {isSidebarOpen, closeSidebar } = useContext(sidebarContext);
  const navbarRef = useRef(null);

   //closing the navbar when clicked outside the sidebae area
  const handleClickOutside = (event) => {
    if(navbarRef.current && navbarRef.current.contains(event.target) && event.target.className !== "sidebar-open-btn"){
      closeSidebar();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return() => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav classname={'sidebar ${isSidebarOpen ? "sidebar-show" : ""}'  } ref={navbarRef}>
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <img src="{theme === LIGHT_THEME ? LogoBlue : LogoWhite }" alt="" />
          <span className="sidebar-brand-text">Dashbord</span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidbar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <link to="/" className="menu-link active">
                <span className="menu-list-icon">
                  <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Dashboard</span>
              </link>
            </li>
            <li className="menu-item">
              <link to="/" className="menu-link">
                <span className="menu-list-icon">
                  <MdOutlineBarchart size={20} />
                </span>
                <span className="menu-link-text">Manage User</span>
              </link>
            </li>
            <li className="menu-item">
              <link to="/" className="menu-link">
                <span className="menu-list-icon">
                  <MdOutlineAttachMoney size={20} />
                </span>
                <span className="menu-link-text">Approved Documents</span>
              </link>
            </li>
            <li className="menu-item">
              <link to="/" className="menu-link">
                <span className="menu-list-icon">
                  <MdOutlineCurrencyExchange size={18} />
                </span>
                <span className="menu-link-text">Profile</span>
              </link>
            </li>
            {/* <li className="menu-item">
              <link to="/" className="menu-link">
                <span className="menu-list-icon">
                  <MdOutlineShoppingBag size={18} />
                </span>
                <span className="menu-link-text">Product</span>
              </link>
            </li>
            <li className="menu-item">
              <link to="/" className="menu-link">
                <span className="menu-list-icon">
                  <MdOutlinePeople size={20} />
                </span>
                <span className="menu-link-text">Customer</span>
              </link>
            </li>*/}
          </ul> 
        </div>
        <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
            <li className="menu-item">
              <link to="/" className="menu-link">
                <span className="menu-list-icon">
                  <MdOutlineSettings size={20} />
                </span>
                <span className="menu-link-text">Setting</span>
              </link>
            </li>
            <li className="menu-item">
              <link to="/" className="menu-link">
                <span className="menu-list-icon">
                  <MdOutlineLogout size={20} />
                </span>
                <span className="menu-link-text">Logout</span>
              </link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default sidebar;
