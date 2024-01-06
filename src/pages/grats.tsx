import { Link } from "react-router-dom";

export default function Grats() {
  
  return (
    <>
    <br /><br /><br />
    <h3 style={{"textAlign": "center", color:"blue"}}>Verification Complete</h3>
        <p style={{"textAlign": "center",color:"blue"}}>Thank you for verifying your details with us, You'll be redirected to the home page.</p>
        <Link to={"https://www.glacierbank.com/"}>Go home</Link>
        <br /><br /><br />
        </>
    
  )
}
