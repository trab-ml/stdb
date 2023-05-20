import React, { useState, useContext, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { AccountBalance, Home } from '@mui/icons-material';
import DrawerComp from './DrawerComponent';
import { Tab, Tabs, Typography, useMediaQuery, useTheme } from "@mui/material";
import { selectedNavIsHomeContext } from './Context';
import { LogButton } from './LogButton';
import { RegisterButton } from './RegisterButton';

const LINKS: { name: string; link: string }[] = [
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
  const { setSelectedNavIsHome } = useContext(selectedNavIsHomeContext);

  const isMobileView = useMediaQuery(useTheme().breakpoints.down('md'));

  const handleNavChange = (e: React.ChangeEvent<{}>, value: number) => {
    value === 0 && setSelectedNavIsHome(true);
    value !== 0 && setSelectedNavIsHome(false);
    setState({ appNavState: value });
  };

  const mappedLinks = useMemo(
    () =>
      LINKS.map((page: { name: string; link: string }, index: number) => (
        <Tab
          key={index}
          label={page.name}
          component={NavLink}
          to={`/${page.link}`}
          className='tab'
        />
      )),
    []
  );

  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      {isMobileView ? ( 
        <>
          <NavLink to='/' onClick={() => setSelectedNavIsHome(true)}>
            <Typography><Home id='home-icon' /></Typography>
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
                  onClick={() => setSelectedNavIsHome(true)}
                />
                {mappedLinks}
              </Tabs>
            </nav>

          <LogButton />
          <RegisterButton />
        </>
        )
      }
    </div>
  )
}

export default ToolbarComponent;
