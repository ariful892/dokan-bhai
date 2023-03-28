import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import Modal from '../../Login/LoginModal/Modal';
import { signout } from '../../../redux/actionCreators/authActions';
import { MdArrowDropDown } from 'react-icons/md';



const Navbar = ({ modalOpen, setModalOpen }) => {

    // const { sideNav, setSideNav } = useContext(SIDENAV_CONTEXT);
    const dispatch = useDispatch();
    const state = useSelector((state => state.navbar));
    // const state = useSelector((state => state));

    // console.log(state);




    const [nav, setNav] = useState(false)
    const [nav2, setNav2] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    const { userInfo, loading2 } = useSelector((state) => state?.userSignin);
    const { userInfoRegister, loading1 } = useSelector((state) => state?.userRegister);
    const navigate = useNavigate()

    const signOutHandler = () => {
        dispatch(signout())


    }





    if (loading1 || loading2) {
        return <div className="flex items-center justify-center">
            <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span
                >
            </div>
        </div>
    }


    return (
        <div>
            {modalOpen && <Modal setOpenModal={setModalOpen}></Modal>}
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

                    <div className='flex items-center flex-col'>
                        <Link to={'/'} ><img className="logo" src={logo} alt="" /></Link>
                        <h2 className='text-sm '>Easy Shopping</h2>
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

                    {/* <div>
                        
                        {(userInfo && <> <div className='flex justify-center items-center'> <h1 className='text-[25px] font-medium '>{userInfo?.name}</h1> <div><MdArrowDropDown className='peer' size={30} />  <div className="hidden  peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg">
                            <a onClick={signOutHandler} className="px-2 py-3 hover:bg-gray-200 mt-[50px]" href="#">Sign Out</a>


                        </div></div> </div> </>) || (userInfoRegister && <><div className='flex justify-center items-center'><h1 className='text-[25px] font-medium '>{userInfoRegister?.name}</h1> <div><MdArrowDropDown className='' size={30} /> <div className="hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg">
                            <a onClick={signOutHandler} className="px-5 py-3 hover:bg-gray-200 mt-[50px]" href="#">Sign Out</a>

                        </div></div> </div></>) || <Link to='/login'><button onClick={() => setModalOpen(true)} type="button" className="px-6 py-2.5 bg-[#D1DEEB] font-semibold text-[16px] leading-tight rounded shadow-md text-[#2B333B] transition duration-150 ease-in-out" >
                            Log in
                        </button></Link>}
                    </div> */}

                    <div>
                        {userInfo?.isSeller && <><button type="button" className='px-6
            py-2.5
            bg-[#D1DEEB]
            
            font-semibold
            text-[16px]
            leading-tight
            
            rounded
            shadow-md
             text-[#2B333B]'>Seller</button></>}
                        {userInfo?.isAdmin && <><button type="button" className='px-6
            py-2.5
            bg-[#D1DEEB]
            
            font-semibold
            text-[16px]
            leading-tight
            
            rounded
            shadow-md
             text-[#2B333B]'>Admin</button></>}
                        {(userInfo && <> <div className='flex justify-center items-center'> <h1 className='text-[25px] font-medium '>{userInfo?.name}</h1> <div><MdArrowDropDown className='peer' size={30} />  <div className="hidden  peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg">
                            <a onClick={signOutHandler} className="px-2 py-3 hover:bg-gray-200 mt-[50px]" href="#">Sign Out</a>


                        </div></div> </div> </>) || (userInfoRegister && <><div className='flex justify-center items-center'><h1 className='text-[25px] font-medium '>{userInfoRegister?.name}</h1> <div><MdArrowDropDown className='' size={30} /> <div className="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg">
                            <a onClick={signOutHandler} className="px-5 py-3 hover:bg-gray-200 mt-[50px]" href="#">Sign Out</a>

                        </div></div> </div></>) || <Link to='/login'><button onClick={() => setModalOpen(true)} type="button" className="px-6
            py-2.5
            bg-[#D1DEEB]
            
            font-semibold
            text-[16px]
            leading-tight
            
            rounded
            shadow-md
             text-[#2B333B]
            transition
            duration-150
            ease-in-out" >
                            Log in
                        </button></Link>}
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
        </div>
    );
};

export default Navbar;