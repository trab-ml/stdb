import React from 'react';
import ToolbarComponent from './ToolbarComponent';
import { AppBar } from "@mui/material";
import RoutesComponent from './RoutesComponent';
import './header.css';


const Header = () => {

    return (<AppBar id='appbar'>
        <ToolbarComponent />
        <RoutesComponent />
    </AppBar>)
}

export default Header; 