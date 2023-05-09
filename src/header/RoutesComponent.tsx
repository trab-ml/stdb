import React, { lazy, Suspense, useContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import { selectedNavIsHomeContext } from './Context';

const Home = lazy(() => import('../components/Home'));
const Feature = lazy(() => import('../components/Feature'));
const Pricing = lazy(() => import('../components/Pricing'));
const Community = lazy(() => import('../components/Community'));
const Support = lazy(() => import('../components/Support'));
const Login = lazy(() => import('../components/Login'));
const Register = lazy(() => import('../components/Register'));
const Footer = lazy(() => import('../footer/Footer'));

const RoutesComponent = () => {
    const { selectedNavIsHome } = useContext(selectedNavIsHomeContext);

    return (
        <Box className='routes-component' style={selectedNavIsHome ? {} : { height: '100vh' }}>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/features' element={<Feature />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/community' element={<Community />} />
                <Route path='/support' element={<Support />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/footer' element={<Footer />} />
                <Route element={<Home />} />
            </Routes>
            </Suspense>
        </Box>
    );
}

export default React.memo(RoutesComponent);