import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import home from '../../../assets/icons/home.png';
import document from '../../../assets/icons/Document.png';
import chat from '../../../assets/icons/chat.png';
import notification from '../../../assets/icons/Notification.png';
import buy from '../../../assets/icons/Buy.png';
import option from '../../../assets/icons/option.png';
import logo from '../../../assets/logo/atoz-logo.png';
import { useContext } from 'react';
import { SIDENAV_CONTEXT } from '../../../App';
import SideNavbar from '../SideNavbar/SideNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { SIDE_NAVBAR } from '../../../redux/actionTypes/actionTypes';
import { sideNavbar } from '../../../redux/actionCreators/shoppingmallActions';

const Navbar = () => {

    // const { sideNav, setSideNav } = useContext(SIDENAV_CONTEXT);
    const dispatch = useDispatch();
    const state = useSelector((state => state.navbar));

    console.log(state);

    return (
        <div className="nav-container navbar">
            <div className="navbar-start">

                <div className="dropdown">
                    <label
                        onClick={() => dispatch(sideNavbar())}
                        // onClick={() => setSideNav(!sideNav)}
                        className="flex items-center ">
                        <img className='option' src={option} alt="" />
                    </label>
                </div>

                <div className='flex items-center'>
                    <Link to={'/'} ><img className="logo" src={logo} alt="" /></Link>
                </div>
            </div>
            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='nav-item'><Link to={'/'}><img src={home} alt="" /></Link></li>
                        <li className='nav-item'><Link to={'/newsfeed'}><img src={document} alt="" /></Link></li>
                        <li className='nav-item'><Link to={''}><img src={chat} alt="" /></Link></li>
                        <li className='nav-item'><Link to={''}><img src={notification} alt="" /></Link></li>
                        <li className='nav-item'><Link to={''}><img src={buy} alt="" /></Link></li>
                    </ul>
                </div>
                <div>
                    <button className='profile-btn'>Profile</button>
                </div>

                {/* <label onClick={() => setSideNav(!sideNav)} tabIndex={0} className="flex md:hidden lg:hidden items-center ">
                    <img className='option' src={option} alt="" />
                </label> */}

                <div className="dropdown flex lg:hidden mr-5 md:mr-3 lg:mr-0">

                    <label tabIndex={0} className="ml-2  items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow bg-base-100 rounded-box w-16 p-0 md:w-18 ">
                        <li className='nav-item'><Link to={'/'}><img src={home} alt="" /></Link></li>
                        <li className='nav-item'><Link to={'/newsfeed'}><img src={document} alt="" /></Link></li>
                        <li className='nav-item'><Link to={''}><img src={chat} alt="" /></Link></li>
                        <li className='nav-item'><Link to={''}><img src={notification} alt="" /></Link></li>
                        <li className='nav-item'><Link to={''}><img src={buy} alt="" /></Link></li>
                    </ul>

                </div>

            </div>

            {/* {
                sideNav &&
                <div className='sideNavbar-container'>
                    <SideNavbar></SideNavbar>
                </div>
            } */}
            <div className={`${state.sideNavbar ? 'sidenav-show' : 'sidenav-hide'}`}>
                <SideNavbar></SideNavbar>
            </div>
        </div>
    );
};

export default Navbar;