import React, { FC } from 'react';
import ToolbarComponent from './ToolbarComponent';
import { AppBar } from "@mui/material";
import RoutesComponent from './RoutesComponent';
import './header.css'

interface HeaderProps {
    selectedNavIsHome: boolean;
    setSelectedNavIsHome: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = ({ selectedNavIsHome, setSelectedNavIsHome }) => {
    return (<AppBar id='appbar'>
        <ToolbarComponent setSelectedNavIsHome={setSelectedNavIsHome} />
        <RoutesComponent selectedNavIsHome={selectedNavIsHome} />
    </AppBar>)
}

export default Header; 