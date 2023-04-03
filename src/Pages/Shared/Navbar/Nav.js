import React, { useEffect, useState } from 'react';
// import 'tw-elements';

import { Bars3Icon, CameraIcon, ChevronDownIcon, ClockIcon, FolderMinusIcon, HeartIcon, MicrophoneIcon, TicketIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { AiFillHome } from 'react-icons/ai';
import { DocumentTextIcon, ChatBubbleOvalLeftEllipsisIcon, BellIcon, ShoppingCartIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/outline'
import { VscHome } from 'react-icons/vsc';
import { MdArrowDropDown } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
// import { createList } from '../../../redux/actionCreators/sidebarAction';
import {

    Route,
    Link,
    Routes,
    Navigate,
    useNavigate

} from "react-router-dom";
import Modal from '../../Login/LoginModal/Modal';
import { signout } from '../../../redux/actionCreators/authActions';
import Loading from '../Loading/Loading';
import { useQuery } from 'react-query';
import loadFeaturedCategoriesData from '../../../redux/thunk/featuredCategories/fetchFeaturedCategories';


const Nav = ({ modalOpen, setModalOpen }) => {


    const dispatch = useDispatch()
    const [nav, setNav] = useState(false)
    const [nav2, setNav2] = useState(false)
    const { userInfo, loading2 } = useSelector((state) => state?.userSignin);

    const { userInfoRegister, loading1 } = useSelector((state) => state?.userRegister);

    const featuredCategories = useSelector((state) => state.featuredReducer.featuredCategories)
    // console.log(featuredCategories);

    useEffect(() => {
        dispatch(loadFeaturedCategoriesData())
    }, [])

    // const { isLoading, error, data: featuredCategories } = useQuery('categories', () =>
    //     fetch('https://backend.dokanbhai.dokanbhai.com:3002/api/add/category').then(res =>
    //         res.json()
    //     )
    // )

    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    const handleNav = () => {
        setNav(!nav)
    }


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

        <div className='w-screen h-[72px] fixed z-10 bg-[#FFFFFF]  drop-shadow-[0_3px_5px_rgba(0,0,0,0.07)]'>
            {modalOpen && <Modal setOpenModal={setModalOpen}></Modal>}

            <div className='px-[24px] flex justify-between items-center w-full h-full '>
                <div className='flex items-center justify-start md:space-x-6 space-x-12'>
                    <div onClick={handleNav} className='w-[35px] h-[35px] bg-[#F0F5FA] flex justify-center items-center rounded-full cursor-pointer'>
                        <Bars3BottomLeftIcon className="h-6 w-6 " />

                    </div>

                    <Link to='/'><div className='flex flex-col justify-between items-center'>
                        <img className='h-[40px] w-[150px]' src="https://brandatoz.com/images/atoz.png" alt="" />
                        <p className='text-[14px]'>Easy Shopping</p>
                    </div></Link>

                </div>

                <div className='hidden   md:flex space-x-10'>
                    <AiFillHome style={{ color: '#000000', fill: '#000000' }} size={25} />
                    <DocumentTextIcon className="h-6 w-6 " />
                    <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 " />
                    <BellIcon className="h-6 w-6 " />
                    <Link to={'/cart'} className="h-6 w-6 "><ShoppingCartIcon /></Link>
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
                    {(userInfo && <> <div className='flex justify-center items-center'> <h1 className='text-[25px] font-medium '>{userInfo?.name}</h1><div className="dropdown dropdown-hover">
                        <label tabindex="0" className="inline-flex flex-shrink-0 cursor-pointer flex-wrap items-center justify-center bg-transparent  m-1"><div><MdArrowDropDown className='' size={30} /> </div></label>
                        <ul tabindex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='ml-[-60px] shadow bg-base-100'><a onClick={signOutHandler} >Sign Out</a></li>

                        </ul>
                    </div>        </div> </>) || (userInfoRegister && <><div className='flex justify-center items-center'><h1 className='text-[25px] font-medium '>{userInfoRegister?.name}</h1> <div className="dropdown dropdown-hover">
                        <label tabindex="0" className="inline-flex flex-shrink-0 cursor-pointer flex-wrap items-center justify-center bg-transparent  m-1"><div><MdArrowDropDown className='' size={30} /> </div></label>
                        <ul tabindex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='ml-[-60px] shadow bg-base-100'><a onClick={signOutHandler} >Sign Out</a></li>

                        </ul>
                    </div>  </div></>) || <Link to='/login'><button onClick={() => setModalOpen(true)} type="button" className="px-6
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



                <div onClick={() => setNav2(!nav2)} className='md:hidden'>

                    {
                        !nav2 ? <Bars3Icon className="h-6 w-6 text-black" /> : <XMarkIcon className="h-6 w-6 text-black" />

                    }

                </div>

            </div>

            <div className={nav ? 'fixed left-0 top-[74px] w-full h-screen bg-black/80' : ''}>
                <div className={nav ? 'fixed left-0 top-[74px] w-[70%] md:w-[25%] h-screen bg-[#FFFFFF]  ease-in-out duration-300' : 'fixed left-[-100%] top-[74px] w-[70%] md:w-[25%] h-screen bg-[#FFFFFF] ease-in duration-500'}>

                    <div className='mt-[20px] px-[40px]'>
                        <div className='flex justify-between items-center text-[#010203]'>
                            <h1 className=' text-[20px] md:text-[24px]'>Categories</h1>
                            <XMarkIcon onClick={handleNav} className="h-4 w-4 md:h-6 md:w-6 cursor-pointer" />



                        </div>

                        {featuredCategories.map((s, index) => <div
                            key={index + 1}
                            className='flex flex-col mt-[25px] space-y-1 '>

                            <div className='flex justify-between items-center'>
                                <div className='flex justify-start items-center space-x-3 text-sm'>
                                    {/* <FolderMinusIcon className="h-4 w-4" /> */}

                                    <a href={`https://brandatoz.com/search/category/${s}`} rel="noopener noreferrer">
                                        <p className=''>{s}</p>


                                    </a>
                                </div>

                            </div>

                        </div>)}

                    </div>

                </div>

            </div>

            <div className={!nav2 ? 'hidden' : 'absolute w-full bg-[#FFFFFF]  px-4 md:hidden'}>

                <VscHome className='border-b-2 border-zinc-300 w-full my-[8px]' size={25} />
                <DocumentTextIcon className="h-6 w-full border-b-2 border-zinc-300 my-[8px] " />
                <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-full border-b-2 border-zinc-300 my-[8px]   " />
                <BellIcon className="h-6 w-full  border-b-2 border-zinc-300  my-[8px]" />
                <Link to={'/cart'} className="border-b-2 border-zinc-300 my-[8px] ">  <ShoppingCartIcon className='h-6 w-full ' /></Link>

                {(userInfo || userInfoRegister) ? <a onClick={signOutHandler} className=" " href="#"> <button className=' w-full px-6 py-2.5
            bg-[#D1DEEB]
            font-semibold
            text-[16px]
            leading-tight           
            rounded
            shadow-md
             text-[#2B333B] hover:bg-gray-200 md:mt-[50px]'>SignOut</button> </a> : <Link to='/login' ><button onClick={() => setModalOpen(true)} type="button" className="px-6
            py-2.5
            bg-[#D1DEEB]
            w-full          
            font-semibold
            text-[16px]
            leading-tight           
            rounded
            shadow-md
             text-[#2B333B]
            transition
            duration-150
            ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Log in
                </button></Link>}
            </div>

        </div>
    );
};

export default Nav;
