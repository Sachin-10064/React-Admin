import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='flex justify-between text-gray-600 text-xs pt-[5rem] min-w-[30rem]'>
                <div>
                    <p className='font-semibold text-xs'>Copyright © 2023 | All Right Reserved</p>
                </div>
                <div>
                    <ul className='flex space-x-2'>
                        <li>Help</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer