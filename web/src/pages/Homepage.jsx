import { jwtDecode } from "jwt-decode"

export function getEmailFromToken(){
  const token = localStorage.getItem("token");
  if(!token) return null;
  try{
    const decoded = jwtDecode(token)
    return decoded.name || null
  }catch(err){
    return null;
  }
}

function Homepage() {
  const name = getEmailFromToken()
  return <div style={{maxWidth: 600, margin: "2rem auto", textAlign: "center"}}>
    <h3 style={{fontWeight: "bold", color: "lightblue"}}>Најавен гостин: {name}</h3>
    <h1>Добредојдовте на првата апликација за почви во Македонија!</h1>
    <h2>Станете дел од земјоделците во нашата држава</h2>
    <p>Оваа апликација ни овозможува да прегледуваме информации за земјоделските работи, и сите потребни информации може да ги најдите тука!</p>
  </div>;
}

export default Homepage;