import React, { useContext, useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Menu, Home, MonetizationOn, Login, Support, ProductionQuantityLimits, Group, Mail } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { selectedNavIsHomeContext } from './Context';

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const { setSelectedNavIsHome } = useContext(selectedNavIsHomeContext);

  const handleCloseDrawer = (): void => {
    setSelectedNavIsHome(false);
    setOpenDrawer(false);
  };

  const getBackToHome = (): void => {
    setSelectedNavIsHome(true);
    setOpenDrawer(false);
  };

  const handleToggleDrawer = (): void => {
    setOpenDrawer(!openDrawer);
  };
  const menuItem = [
    // {
    //     path: "/",
    //     name: "home",
    //     icon: <Home />
    // },
    {
        path: "/features",
        name: "features",
        icon: <ProductionQuantityLimits />
    },
    {
        path: "/pricing",
        name: "pricing",
        icon: <MonetizationOn />
    },
    {
        path: "/community",
        name: "community",
        icon: <Group />
    },
    {
        path: "/support",
        name: "support",
        icon: <Support />
    },
    {
        path: "/login",
        name: "login",
        icon: <Login />
    },
    {
        path: "/register",
        name: "register",
        icon: <Login />
    }
  ]

  return (
    <>
      <Drawer open={openDrawer} onClose={handleCloseDrawer}>
        <div className="sidebar-container">
          <div className="sidebar">
            <div className="top_section">
              <h1 className="logo">STDB LOGO</h1>
              {/* onClick={getBackToHome} */}
              {/* <Menu onClick={toggle} className='bars-menu'/>
              <div className="bars"></div> */}
            </div>
            <nav>
              <NavLink to='/'className='link' onClick={getBackToHome}>
                <div className='icon'> <Home /> </div>
                <div className='link_text'>Home</div>
              </NavLink>
              {
                menuItem.map((item, index) => (
                  <NavLink to={item.path} key={index} className='link' onClick={handleCloseDrawer}>
                    <div className='icon'> {item.icon} </div>
                    <div className='link_text'> {item.name} </div>
                  </NavLink>
                ))
              }
            </nav>
          </div>
        </div>
      </Drawer> 

      <IconButton onClick={handleToggleDrawer} id='menu-icon' sx={{ marginLeft: 'auto', color:'white'}}>
        <Menu />
      </IconButton>
    </>
  );
};

export default DrawerComp;
