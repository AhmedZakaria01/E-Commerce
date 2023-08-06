import React from 'react';
import styles from './Layout.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ userData , setuserData}) => {
    return (
        <>
            <Navbar userData={userData} setuserData={setuserData} />
            <Outlet />
            {/* <Footer /> */}

        </>
    );
}

export default Layout;
