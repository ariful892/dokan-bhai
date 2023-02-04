import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import home from '../../../assets/icons/home.png';
import document from '../../../assets/icons/Document.png';
import chat from '../../../assets/icons/chat.png';
import notification from '../../../assets/icons/Notification.png';
import buy from '../../../assets/icons/Buy.png';
import option from '../../../assets/icons/option.png';

const Navbar = () => {
    return (
        <div className="nav-container navbar">
            <div className="navbar-start">

                <div className="dropdown">
                    <label tabIndex={0} className="flex items-center ">
                        <img className='option' src={option} alt="" />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow bg-base-100 rounded-box w-16 p-0 md:w-24 ">
                        <li className='nav-item'><Link to={'/'}><img src={home} alt="" /></Link></li>
                        <li className='nav-item'><Link to={'/newsfeed'}><img src={document} alt="" /></Link></li>
                        <li className='nav-item'><Link to={''}><img src={chat} alt="" /></Link></li>
                        <li className='nav-item'><Link to={''}><img src={notification} alt="" /></Link></li>
                        <li className='nav-item'><Link to={''}><img src={buy} alt="" /></Link></li>
                    </ul>
                </div>

                <div className='flex items-center'>
                    <Link to={'/'} className=" title"> DOKAN BHAI</Link>
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

            </div>
        </div>
    );
};

export default Navbar;