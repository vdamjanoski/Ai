import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signin() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try{
      const res = await fetch(`http://localhost:10000/api/v1/signup`, {
        method: `POST`,
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify({ name,email, password}),
      })
      const data = await res.json();
      if (res.ok) {
        navigate("/")
      } else {
        setError(res.data.error || "Грешка при регистрирање")
      }
    }catch(err){
      console.log(err);
      setError("Серверска грешка")
    }
  }

  return <div style={{maxWidth: 350, margin: "2rem auto"}}>
    <h2>Регистрација</h2>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Име:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required style={{width: "100%", marginBottom: 0}} />
        </div>
      <div>
        <label>Е-пошта</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{width: "100%", marginBottom: 0}}/>
      </div>
            <div>
        <label>Лозинка</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{width: "100%", marginBottom: "25px"}}/>
      </div>
      {/* {error && <div style={{color: "red", marginBottom: 8}}>{error}</div>} */}
      <button type='submit' style={{width: "100%"}}>Регистрирај се</button>
      <p style={{color: "red"}}>{error}</p>
    </form>
  </div>;
}

export default Signin;