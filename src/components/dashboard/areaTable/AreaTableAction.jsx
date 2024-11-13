import { useEffect } from "react";
// import { MiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";

const AreaTableAction = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdown = () =>{
    setShowDropdown(showDropdown);
  };

  const dropdown = useref(null);

  const handleClickOutside = (event) =>{
    if(dropdownRef.current && dropdownRef.current.contains(event.target)){
      setShowDropdown(false);
    }
    useEffect(()=> {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.addEventListener("mousedown", handleClickOutside);
      }
     },[]);
  }
  return (
    <div><button type="button" className="action-dropdown-btn" onclick="handleDropdown">
      <MiDotsHorizontalButton size={10}/>
      
      {
        showDropdown &&(
          <div className="action-dropdown-menu">
        <ul className="dropdown-menu-list"> 
          <li className="dropdown-menu-item">
            <link to ="/view" className="dropdown-menu-link">
            View
            </link>
          </li>
          <li className="dropdown-menu-item">
            <link to ="/view" className="dropdown-menu-link">
            Edit
            </link>
          </li>
          <li className="dropdown-menu-item">
            <link to ="/view" className="dropdown-menu-link">
            Delete
            </link>
          </li>
        </ul>
      </div>
      )
      }
      </button></div>
  )
}

export default AreaTableAction