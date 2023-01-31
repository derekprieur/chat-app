import React from 'react'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from './SignIn'
import Logout from './Logout'

const Navbar = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='bg-gray-800 h-20 flex justify-between items-center p-4'>
            <div className='flex items-center gap-1'>
                <h1 className='text-white text-3xl'>Chirp</h1>
                <img src="https://cdn-icons-png.flaticon.com/512/141/141737.png" alt="" className='w-8 h-8 object-cover' />
            </div>
            {!user ?
                <SignIn /> :
                <Logout />
            }
        </div>
    )
}

export default Navbar