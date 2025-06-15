import axios from "axios"
import { useState, useEffect } from "react";
import { getEmailFromToken } from "./Homepage";

function Pocva() {
    const email = getEmailFromToken();
    const [data, setData] = useState([])
    // const [error, setError] = useState("")
    const token = localStorage.getItem(`token`)
    const fetchPochva = async () => {
            try{
                const rest = await axios.get(`http://localhost:10000/api/v1/pochva`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });  
                setData(rest.data.data.Pocva);
                console.log(rest.data.data.Pocva);
                // Bearer token
            }catch(err){
                console.log(err.message)
            }
        }
    useEffect(() => {
        fetchPochva();
    }, []);

    return <div>
         <h3 style={{fontWeight: "bold", color: "lightblue"}}>Најавен гостин: {email}</h3>
        <h2>Сите почви</h2>
        {data.map((p) => (
            <li>{p.name} - {p.data}</li>
        ))}
    </div>
}

export default Pocva;