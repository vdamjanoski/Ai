import { jwtDecode } from "jwt-decode"

function getEmailFromToken(){
  const token = localStorage.getItem("token");
  if(!token) return null;
  try{
    const decoded = jwtDecode(token)
    console.log(decoded)
    return decoded.email || null
  }catch(err){
    return null;
  }
}

function Homepage() {
  const email = getEmailFromToken()
  return <div style={{maxWidth: 600, margin: "2rem auto", textAlign: "center"}}>
    <h3 style={{fontWeight: "bold", color: "lightblue"}}>Најавен гостин: {email}</h3>
    <h1>Добредојдовте на првата апликација за почви во Македонија!</h1>
    <h2>Станете дел од земјоделците во нашата држава</h2>
    <p>Оваа апликација ни овозможува да прегледуваме информации за земјоделските работи, и сите потребни информации може да ги најдите тука!</p>
    <p>За домашна да го збогатите менито со почва, земјоделски култури, ѓубрива и механизација</p>
    {/* Koga ke se najavi korisnikot, da pishuva koj korisnik e najaven, negov mail. */}
  </div>;
}

export default Homepage;