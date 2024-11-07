import React from 'react';
import { NavLink } from 'react-router-dom';

const SecondNav = () => {
    return (
        <div className='border-gray-200 mt-14 border-b w-full hidden md:flex items-center justify-center py-3'>
            <div className='max-w-screen-xl gap-x-4 w-full flex items-center justify-between px-2'>
                <div className='flex gap-x-6 text-xs md:text-sm'>
                    <NavLink to='/content/movies' className={({ isActive }) => isActive ? 'text-[#f84464]' : ''}>
                        Movies
                    </NavLink>
                    <NavLink to='/content/stream' className={({ isActive }) => isActive ? 'text-[#f84464]' : ''}>
                        Stream
                    </NavLink>
                    <NavLink to='/content/events' className={({ isActive }) => isActive ? 'text-[#f84464]' : ''}>
                        Events
                    </NavLink>
                    <NavLink to='/content/plays' className={({ isActive }) => isActive ? 'text-[#f84464]' : ''}>
                        Plays
                    </NavLink>
                    <NavLink to='/content/sports' className={({ isActive }) => isActive ? 'text-[#f84464]' : ''}>
                        Sports
                    </NavLink>
                    <NavLink to='/content/activities' className={({ isActive }) => isActive ? 'text-[#f84464]' : ''}>
                        Activities
                    </NavLink>
                </div>

                <div className='flex gap-x-6 text-xs text-[#333333]'>
                    <NavLink to='/content/list-your-show' className={({ isActive }) => isActive ? 'text-[#f84464]' : ''}>
                        List Your Show
                    </NavLink>
                    <NavLink to='/content/corporates' className={({ isActive }) => isActive ? 'text-[#f84464]' : ''}>
                        Corporates
                    </NavLink>
                    <NavLink to='/content/offers' className={({ isActive }) => isActive ? 'text-[#f84464]' : ''}>
                        Offers
                    </NavLink>
                    <NavLink to='/content/gift-cards' className={({ isActive }) => isActive ? 'text-[#f84464]' : ''}>
                        Gift Cards
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default SecondNav;
