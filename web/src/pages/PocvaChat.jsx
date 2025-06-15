import axios from "axios"
import { jwtDecode } from "jwt-decode"
import styles from './PocvaChat.module.css'
import { useState } from "react";

function getUserName(){
    const token = localStorage.getItem(`token`);
    if(!token) return null
    try{
        const decoded = jwtDecode(token);
        return decoded.name || decoded.email
    }catch{
        return null
    }
}

function PocvaChat() {
    const [messages, setMessages] = useState([]) // [{role: `user` || `ai`, content: string}]
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)
    const userName = getUserName()


    const handleSend = async (e) => {
        e.preventDefault();
        if(!input.trim()) return

        const userTime = new Date().toLocaleTimeString()
        setMessages((prev) => [...prev, {role: `user`, content: input, timestamp: userTime}])
        setLoading(true)
        try{
            const token = localStorage.getItem(`token`)
            const response = await axios.post(`http://localhost:10000/api/v1/pochva/chat`, {
                prompt: input
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
            const aiTime = new Date().toLocaleTimeString()
            setMessages((prev) => [...prev, {role: `ai`, content: response.data.answer || `Нема одговор.`, timestamp: aiTime}])
        }catch{
            setMessages((prev) => [...prev, {role: `ai`, content: `Грешка при комуникација со серверот.`}])
        }
        setInput("")
        setLoading(false)
    }
    // const time = new Date(msg.timestamp).toLocaleTimeString(); 
    // console.log(time)

    return <div className = {styles.container}>
            <h2>Прашај нешто ако ти треба</h2>
            {userName &&( <div className={styles.header}>
                Најавен корисник: <b>{userName}</b>
            </div>)}
            <div className={styles.chatBox}>
                {messages.map((msg, idx) => (
                    <div key={idx} className={msg.role === `user` ? `${styles.message}${styles.messageUser}` : styles.message}>
                        <span className={msg.role === `user` ? `${styles.bubble}${styles.bubbleUser}` : styles.bubble}>{msg.content}</span>
                        <div style={{color: "black"}}>{msg.timestamp}</div>
                    </div>
                ))}
                {loading && (
                    <div className={styles.loading}>Се вчитува...</div>
                )}
            </div>
            <form onSubmit={handleSend} className={styles.form}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Постави прашање за почвите' disabled={loading}/>
                <button type="submit" disabled={loading || !input.trim()}>Испрати</button>
            </form>
        </div>
}
export default PocvaChat

// prompt/baranje
// poraka
// {role: `user`, content: `Kazi mi za pocvite vo Makedonija`, {role: `ai`, content: `Pocvite vo Makedoniaj se mnogu plodni`}}
