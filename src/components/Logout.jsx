import React from 'react'
import { auth } from '../firebase'

const Logout = () => {

    const logout = () => {
        auth.signOut()
    }

    return (
        <button className='bg-gray-200 px-4 py-2 hover:bg-gray-100 rounded-lg' onClick={logout}>
            Logout
        </button>
    )
}

export default Logout