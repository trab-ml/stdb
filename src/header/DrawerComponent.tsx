import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Menu, Home, MonetizationOn, Login, Support, ProductionQuantityLimits, Group, Mail } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { ToolbarComponentProps } from "./ToolbarComponent";

const PAGES: string[] = ["features", "pricing", "community", "support", "login", "register"];
// const ICONS: React.FC[] = [, ProductionQuantityLimits, MonetizationOn, Group, Support, Login, Login];

const DrawerComp: React.FC<ToolbarComponentProps> = ({ setSelectedNavIsHome }) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  // const [clickOnNothing, setClickOnNothing] = useState<boolean>(false);

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

  return (
    <>
      <Drawer open={openDrawer} onClose={handleCloseDrawer}>
        <nav>
          <List id='sidebar'>

            <NavLink to={'home'} className='sidebar-navlink'>
                {/* <ListItem className='sidebar-navlink'></ListItem>  */}
                  {/* <Home /> */}
                  <ListItemText primary={'home'} onClick={getBackToHome} className='list-item-text' />
            </NavLink>

            {PAGES.map((page: string, index: number) => (
              <NavLink key={page} to={page} className='sidebar-navlink'>
                  <ListItemText primary={page} onClick={handleCloseDrawer} className='list-item-text' />
                {/* <ListItem className='sidebar-listitem'>
                  ICONS[index]
                </ListItem>  */}
              </NavLink>
            ))}
          </List>
        </nav>
      </Drawer> 

      <IconButton onClick={handleToggleDrawer} id='menu-icon' sx={{ marginLeft: 'auto', color:'white'}}>
        <Menu />
      </IconButton>
    </>
  );
};

export default DrawerComp;
