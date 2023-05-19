import React, { useCallback, useContext, useState, useMemo } from 'react';
import { Drawer, IconButton } from '@mui/material';
import { Menu, Home, MonetizationOn, Login, Support, ProductionQuantityLimits, Group } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { selectedNavIsHomeContext } from './Context';

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
];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { setSelectedNavIsHome } = useContext(selectedNavIsHomeContext);

  const handleCloseDrawer = useCallback(() => {
    setOpenDrawer(false);
  }, []);

  const handleCloseTriggedByNav = useCallback(() => {
    setSelectedNavIsHome(false);
    setOpenDrawer(false);
  }, [setSelectedNavIsHome]);

  const getBackToHome = useCallback(() => {
    setSelectedNavIsHome(true);
    setOpenDrawer(false);
  }, [setSelectedNavIsHome]);

  const handleToggleDrawer = useCallback(() => {
    setOpenDrawer(prevOpenDrawer => !prevOpenDrawer);
  }, []);

  const mappedMenuItems = useMemo(
    () =>
      menuItem.map((item, index) => (
        <NavLink to={item.path} key={index} className='link' onClick={handleCloseTriggedByNav}>
          <div className='icon'> {item.icon} </div>
          <div className='link_text'> {item.name} </div>
        </NavLink>
      )),
    [handleCloseTriggedByNav] // [menuItem, handleCloseTriggedByNav]
  );

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
              <NavLink to='/' className='link' onClick={getBackToHome}>
                <div className='icon'> <Home /> </div>
                <div className='link_text'>Home</div>
              </NavLink>
              {mappedMenuItems}
            </nav>
          </div>
        </div>
      </Drawer>

      <IconButton onClick={handleToggleDrawer} id='menu-icon' sx={{ marginLeft: 'auto', color: 'white' }}>
        <Menu />
      </IconButton>
    </>
  );
};

export default DrawerComp;