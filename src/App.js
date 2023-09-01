import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './components/styles.module.css'

const App = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const createUser = (e) => {
    //prevent default refresh of browser to keep state from being reset
    e.preventDefault();

    //javascript obj to hold all vals
    const newUser = {username, email, password, confirmPassword};
    console.log("Welcome", newUser);
    //used to reset info to empty string
    setUsername("");
    setEmail("");
    setPassword("");
    setconfirmPassword("");
  };

  return (
    <>
    <div className = "App">
      <form onSubmit= { createUser }>

          <div className= {styles.border}>
            <label>Username: </label>
            <input type = "text" value = {username} /*setting username here */ onChange= { (e) => setUsername(e.target.value) /*reset username to "" here */ } /> 
          </div>
          <br>
          </br>
          <div className= {styles.border}>
            <label>Email Address: </label>
            <input type = "text" value = {email} onChange = { (e) => setEmail(e.target.value) } />
          </div>
          <br>
          </br>
          <div  className= {styles.border}>
            <label>Password: </label>
            <input type = "password" value = {password} onChange = { (e) => setPassword(e.target.value) } />  
          </div>
          <br>
          </br>
          <div className = {styles.border}>
            <label>Confirm Password: </label>
            <input type = "password" value = {confirmPassword} onChange = { (e) => setconfirmPassword(e.target.value) } />  
          </div>
          <br>
          </br>
          <input type= "submit" value = "Create User" />
      </form>
      
   {/* MAKE PASSWORD * SYMBOLS
    */}
    
    </div>
    <div className = "result">
      Username: {username}
      <br>
      </br>
      Email: {email}
      <br>
      </br>
      Password: {password}
      <br>
      </br>
      Confirm Password: {confirmPassword}

    </div>
    </>

    
  );
}

export default App;
