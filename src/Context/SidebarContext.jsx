import { Children, createContext, useState } from "react";
import { PropTypes } from 'prop-types';

export const SidebarContext = createContext({});

export const SidebarProvider = ({Children}) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const openSidebar = () =>{
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return 
    {
        <SidebarContext.Provider 
            value = {{
            isSidebarOpen, 
            openSidebar, 
            closeSidebar,
            }}>
            {children}
        </SidebarContext.Provider>
    };
};

  SidebarProvider.propTypes = {
    childern: PropTypes.node,
  };