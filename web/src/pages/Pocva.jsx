const { useEffect } = require("react");
const { useState } = require("react");
import axios from "axios"

function Pocva() { 
    const [data, setData] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchPochva = async () => {
            try{
                const rest = await axios.get(`http://localhost:10000/api/v1/pocvi`)
                setData(rest.data);
                // Bearer token
            }catch(err){
                console.log(err.message)
                setError("Greska pri vcituvanjeto na serverot")
            }
        }
    }, []);

    return <div>
        <h2>Сите почви</h2>
        <ul>
            {data.map((p, index)=> (
                <li key={index}>
                    {p.ime} - {p.ph}, Локација: {p.lokacija}
                </li>
            ))}
        </ul>
    </div>
}

export default Pocva;