import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useState, useEffect, useRef } from 'react'
import { db } from '../firebase'
import Message from './Message'
import SendMessage from './SendMessage'

const Chat = () => {
    const scroll = useRef()
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = []
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id })
            })
            setMessages(messages)
        })
        return unsubscribe
    }, [])

    return (
        <>
            <main className='flex flex-col p-[10px] relative'>
                {messages?.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </main>
            <SendMessage scroll={scroll} />
            <span ref={scroll}></span>
        </>
    )
}

export default Chat