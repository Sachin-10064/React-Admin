import React from 'react'
import { Link } from 'react-router-dom'
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
    return (

        <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0" aria-label="Sidebar">
            <div class="h-full  pb-4 overflow-y-auto bg-white">
                <div className='p-5 w-full flex items-center justify-center'>
                    <h1 className='font-semibold text-lg'>Profile</h1>
                </div>
                <ul class="space-y-2 font-medium">
                    <li className='w-full px-4 py-3 flex items-center justify-start gap-5 hover:bg-gray-100'>
                        <SettingsIcon />
                        <p className='font-semibold'>
                            Setup Payments
                        </p>
                    </li>
                    <li className='w-full px-4 py-3 flex items-center justify-start gap-5 hover:bg-gray-100'>
                        <SettingsIcon />
                        <p className='font-semibold'>
                            Price
                        </p>
                    </li>
                    <li className='w-full px-4 py-3 flex items-center justify-start gap-5 hover:bg-gray-100'>
                        <SettingsIcon />
                        <p className='font-semibold'>
                           Company
                        </p>
                    </li>
                    <li className='w-full px-4 py-3 flex items-center justify-start gap-5 hover:bg-gray-100'>
                        <SettingsIcon />
                        <p className='font-semibold'>
                            General
                        </p>
                    </li>
                    <li className='w-full px-4 py-3 flex items-center justify-start gap-5 hover:bg-gray-100'>
                        <SettingsIcon />
                        <p className='font-semibold'>
                            Performance
                        </p>
                    </li>
                  
                    <li className='w-full px-4 py-3 flex items-center justify-start gap-5 hover:bg-gray-100'>
                        <SettingsIcon />
                        <p className='font-semibold'>
                            Layout 
                        </p>
                    </li>
                  
                    <li className='w-full px-4 py-3 flex items-center justify-start gap-5 hover:bg-gray-100'>
                        <SettingsIcon />
                        <p className='font-semibold'>
                            Location
                        </p>
                    </li>
                    <li className='w-full px-4 py-3 flex items-center justify-start gap-5 hover:bg-gray-100'>
                        <SettingsIcon />
                        <p className='font-semibold'>
                            User
                        </p>
                    </li>
                 
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar