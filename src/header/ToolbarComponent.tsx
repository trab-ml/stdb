import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AccountBalance, Home } from '@mui/icons-material';
import DrawerComp from './DrawerComponent';
import {
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { selectedNavIsHomeContext } from './Context';
import { LogButton } from './LogButton';
import { RegisterButton } from './RegisterButton';

// const pages: string[] = ["ouvrir un compte", "se loger", "nos conseils", "nous contacter"];
const pages: { name: string; link: string }[] = [
  { name: "ouvrir un compte", link: "features" },
  { name: "se loger", link: "pricing" },
  { name: "nos conseils", link: "community" },
  { name: "nous contacter", link: "support" }
];


type ToolbarState = {
  appNavState: number;
};

const ToolbarComponent = () => {
  const [state, setState] = useState<ToolbarState>({ appNavState: 0 });
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));
  const { setSelectedNavIsHome } = useContext(selectedNavIsHomeContext);

  const handleNavChange = (e: React.ChangeEvent<{}>, value: number) => {
    value === 0 && setSelectedNavIsHome(true);
    value !== 0 && setSelectedNavIsHome(false);
    setState({ appNavState: value });
  };

  return (
    <Toolbar>
      {isMobileView ? ( 
        <>
          <NavLink to='/' onClick={() => setSelectedNavIsHome(true)}>
            <Typography><Home /></Typography>
          </NavLink>
          <DrawerComp />
        </>
      ) : (
        <>
          <Typography ><img src={`${process.env.PUBLIC_URL}/stdb.png`} alt='studentBank' id='logo' /></Typography>
            <nav id='header-navbar'>
              <Tabs
                value={state.appNavState}
                onChange={handleNavChange}
              >
                <Tab
                  label={<AccountBalance />}
                  component={NavLink}
                  to={'/'}
                  className='tab'
                  onClick={() => setSelectedNavIsHome(true)}
                />
                {pages.map((page: { name: string; link: string }, index: number) => (
                  <Tab
                    key={index}
                    label={page.name}
                    component={NavLink}
                    to={`/${page.link}`}
                    className='tab'
                  />
                ))}
              </Tabs>
            </nav>

          <LogButton />
          <RegisterButton />
        </>
        )
      }
    </Toolbar>
  )
}

export default ToolbarComponent;
