import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <nav className='flex justify-center w-full bg-gray-50'>
            <ul className='flex p-4 gap-14'>
                <li className='text-medium font-semibold text-blue-600'>
                    <button type='button' className=''><Link to='/'>HOME</Link></button>
                </li>
                <li className='text-medium font-semibold text-blue-600'>
                    <button type='button' className=''><Link to='/'>ABOUT</Link></button>
                </li>
                <li className='text-medium font-semibold text-blue-600'>
                    <button type='button' className=''><Link to='/'>CONTACT</Link></button>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav