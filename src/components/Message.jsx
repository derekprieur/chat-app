import React from 'react'
import { auth } from '../firebase'

const Message = ({ message }) => {
    return (
        <div>
            <div className={`flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full ${message.uid === auth.currentUser.uid ? 'bg-gray-900 text-yellow-300 flex-row-reverse text-end float-right rounded-bl-full' : 'bg-[#e5e5ea] text-black float-left rounded-br-full'}`}>
                <p className='absolute mt-[-4rem] text-gray-600 text-xs'>{message.name}</p>
                <p className=''>{message.text}</p>
            </div>
        </div>
    )
}

export default Message