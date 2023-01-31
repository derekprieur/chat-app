import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { db, auth } from '../firebase'

const SendMessage = ({ scroll }) => {
    const [input, setInput] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault()
        if (!input) return alert('Please enter a message!')

        const { uid, displayName } = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })

        setInput('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <form onSubmit={sendMessage} className='h-14 w-full max-w-[728px] flex text-xl absolute bottom-0'>
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Message' className='w-full text-xl p-3 bg-gray-900 text-white outline-none border-none' />
            <button className='w-[20%] bg-yellow-500' type='submit'>Send</button>
        </form>
    )
}

export default SendMessage