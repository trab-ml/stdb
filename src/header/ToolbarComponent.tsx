import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AccountBalance, Home } from '@mui/icons-material';
import DrawerComp from './DrawerComponent';
import {
  Button,
  Tab,
  Tabs,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const appLinkTheme = createTheme({
  palette: { 
    primary: {
      main: '#18A0FB'
    }
  },
  typography: {
    button: {
      textTransform: 'capitalize'
    }
  }
});

const pages: string[] = ["features", "pricing", "community", "support"];

export interface ToolbarComponentProps {
  setSelectedNavIsHome: (value: boolean) => void;
}

type ToolbarState = {
  appNavState: number;
};

const ToolbarComponent: React.FC<ToolbarComponentProps> = ({
  setSelectedNavIsHome,
}: ToolbarComponentProps) => {
  const [state, setState] = useState<ToolbarState>({ appNavState: 0 });
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

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
          <DrawerComp setSelectedNavIsHome={setSelectedNavIsHome} />
        </>
      ) : (
        <>
          <Typography >STDB LOGO</Typography>
          <ThemeProvider theme={appLinkTheme}>
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
          </ThemeProvider>

          <NavLink id='login-btn' className='get-hosted' to='/login' onClick={() => setSelectedNavIsHome(false)}>
            <Button className='button' variant="outlined" sx={{marginLeft: 'auto'}}>
              Log In
            </Button>
          </NavLink>

          <NavLink className='get-hosted' to='/register' onClick={() => setSelectedNavIsHome(false)}>
            <Button className='button' variant="contained" sx={{marginLeft: '10px', background: '#18A0FB'}}>
              Register
            </Button>
          </NavLink>
        </>
        )
      }
    </Toolbar>
  )
}

export default ToolbarComponent;
