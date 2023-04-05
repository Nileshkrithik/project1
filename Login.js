import React, { useState } from "react";
import NavBar from "./Navbar";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const[state,setState]=useState(false);

  function handleClick()
  {
      setState(true);
  }

  return (
    <div className="dis">
    <img src="https://i.pinimg.com/280x280_RS/94/6c/2d/946c2d4430a0b141585e068574882b72.jpg" id="img"></img>
     {state ? <NavBar /> :  <div> <h1 id="fes">Login Page</h1>
     <form>
       <input
         type="text"
         value={username}
         onChange={(event) => setUsername(event.target.value)}
         placeholder="Username"
         required
       />
       <br />
       <input
         type="password"
         value={password}
         onChange={(event) => setPassword(event.target.value)}
         placeholder="Password"
         required
       />
       <br />
       <br></br>
       <button type="submit" onClick={handleClick} id="button" >Login</button>
     </form>
     </div>
    }
      
    </div>
  );
}

export default Login;
