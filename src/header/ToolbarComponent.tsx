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

const pages: string[] = ["features", "pricing", "community", "support"];

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
            <Typography id='logo'><Home /></Typography>
          </NavLink>
          <DrawerComp />
        </>
      ) : (
        <>
          <Typography >STDB LOGO</Typography>
            <nav>
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
                {pages.map((page: string, index: number) => (
                  <Tab
                    key={index}
                    label={page}
                    component={NavLink}
                    to={`/${page}`}
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
