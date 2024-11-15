import { MdOutlineMenu } from "react-icons/md";
import "./AreaTop.scss";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from "date-fns";
import { DateRange } from "react-date-range";

const AreaTop = () => {
  const { openSidebar } = useContext(SidebarContext);

  const [state, setstate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection"
    },
  ]);

  const[showDatePicke, setDatePicke] = useState(false);
  const dateRnagerRef = useref(null);

  const handleInputClick = () => {
    setShowDatePicker(true);
  }

  const handleClickOutside = (event) => {
    if(dateRangeRef.Current && !dateRangeRef.Current.contains(event.target)){
      setShowDatePicker(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return() => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <section className="content-area-top">
      <div className="area-top-l">
        <button className="sidebar-open-btn" type="button" onClick={openSidebar}>
          <MdOutlineMenu size={24} />
        </button>
        <h2 className="area-top-title">Dashboard</h2>
      </div>
      <div className="area-top-r">
      <div ref={DateRangeRef} className={'date-range-wrapper $ {!setShowDatePicker?"hide-date-range" : ""}'} onClick={handleInputClick}>
      <DateRange editableDateInputs={true} onChange={(item) => setState([item, section])} moveRangeOnFirstSelection={false} ranges={state} showMonthAndYearPickers={false}/>
      </div>
      </div>
    </section>
  )
}

export default AreaTop