import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { IoMdPerson } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import { VscAccount } from "react-icons/vsc";
import { BiSolidCameraMovie } from 'react-icons/bi';
import { MdOutlineEventNote } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { fetchMovies } from '../../services/MovieService';


const TopNav = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const location = useLocation();

    const handleSearch = () => {
        if (searchQuery.trim()) {
            navigate(`/content/${searchQuery}`);
        }
        setSearchQuery('');
        setIsSearchOpen(false);
    };

    const isActive = (path) => location.pathname === path;

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className='flex fixed top-0 z-50  w-full items-center justify-center bg-white border-b'>
            <div className='w-full max-w-screen-xl py-2  md:py-1 bg-white border-gray-100 flex items-center justify-between'>
                <div
                    className='text-base pl-2 md:pl-1 font-semibold cursor-pointer '
                    onClick={() => navigate('/')}
                >
                    <img className='w-28 h-12' src='https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png' />
                </div>

                <div className='hidden md:flex items-center'>
                    <input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder='Search for Movies, Events, Plays, Sports and Activities'
                        className='px-2 border rounded-sm p-2 w-[43vw] sm:w-[35vw] lg:w-[500px] text-sm'
                    />
                    <button
                        onClick={handleSearch}
                        className='ml-2 px-2 md:px-4 p-1 text-sm rounded-sm bg-[#f84464] text-white'
                    >
                        Search
                    </button>
                </div>

                <div className='hidden md:flex items-center gap-x-4'>
                    <p className='text-sm'>Select you...</p>
                    <button className='px-4 p-1 text-sm rounded-sm bg-[#f84464] text-white'>Sign in</button>
                </div>

                <div className='flex md:hidden pr-3 md:pr-0 items-center'>
                    <FiSearch
                        className='text-lg cursor-pointer text-[#f84464] md:hidden'
                        onClick={() => setIsSearchOpen(true)}
                    />
                </div>

                {isSearchOpen && (
                    <div className='fixed inset-0 bg-white flex items-center left-0 z-40 top-0 justify-start px-4 py-2'>
                        <div className='flex w-full place-self-start start max-w-[19rem] bg-gray-100 rounded-full px-3 py-1'>
                            <input
                                type='text'
                                value={searchQuery}
                                onKeyDown={handleKeyDown}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder='Search Movies, Events, etc.'
                                className='flex-grow bg-transparent focus:outline-none text-sm px-2'
                            />
                            <button
                                onClick={handleSearch}
                                className='text-[#f84464] text-lg px-2'
                            >
                                <FiSearch />
                            </button>
                        </div>
                        <button
                            onClick={() => setIsSearchOpen(false)}
                            className='absolute top-3 right-4 text-[#f84464] text-lg'
                        >
                            <AiOutlineClose />
                        </button>
                    </div>
                )}

                <div className='flex md:hidden w-full justify-between px-6 z-50 bg-white border-t py-3 fixed bottom-0'>

                    <a href='/' className={`cursor-pointer flex flex-col items-center gap-y-1 ${isActive('/') ? 'text-[#f84464]' : 'text-gray-600'}`}>
                        <FaHome className='size-6' />
                        <p className='text-xs'>Home</p>
                    </a>
                    <a href='/content/movies' className={`cursor-pointer flex flex-col items-center gap-y-1 ${isActive('/content/movies') ? 'text-[#f84464]' : 'text-gray-600'}`}>
                        <BiSolidCameraMovie className='size-6' />
                        <p className='text-xs'>Movies</p>
                    </a>
                    <a href='/content/events' className={`cursor-pointer flex flex-col items-center gap-y-1 ${isActive('/content/events') ? 'text-[#f84464]' : 'text-gray-600'}`}>
                        <MdOutlineEventNote className='size-6' />
                        <p className='text-xs'>Events</p>
                    </a>
                    <a href='/profile' className={`cursor-pointer flex flex-col items-center gap-y-1 ${isActive('/profile') ? 'text-[#f84464]' : 'text-gray-600'}`}>
                        <VscAccount className='size-6' />
                        <p className='text-xs'>Profile</p>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default TopNav;
