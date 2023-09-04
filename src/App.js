import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './components/styles.module.css'

const App = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [confirmPasswordError, setconfirmPasswordError] = useState("");

  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  const createUser = (e) => {
    //prevent default refresh of browser to keep state from being reset
    e.preventDefault();

    //javascript obj to hold all vals
    const newUser = {username, email, password, confirmPassword};
    console.log("Welcome", newUser);
    //used to reset info to empty string
    setUsername("");
    setUsernameError("");
    setEmail("");
    setEmailError("");
    setPassword("");
    setPasswordError("");
    setconfirmPassword("");
    setconfirmPasswordError("");
    setHasBeenSubmitted(true);
  };

  // const formMessage = () => {
  //   if(hasBeenSubmitted) {
  //     return "Thank you for submitting the form!";
  //   }
  //   else {
  //     return "Welcome, please submit the form";
  //   }
  // };
  
    const handleUsername = (e) => {
      setUsername(e.target.value);
      if(e.target.value.length < 1) {
        setUsernameError("Username is required!");
      }
      else if(e.target.value.length < 3) {
        setUsernameError("Username must be at least 2 characters");
      }
      else {
        setUsernameError("");
      }
    };

    const handleEmail = (e) => {
      setEmail(e.target.value);
      if(e.target.value.length < 1) {
        setEmailError("Email is required!");
      }
      else if(e.target.value.length < 3) {
        setEmailError("Email must be at least 2 characters");
      }
      else {
        setEmailError("");
      }
    };

    const handlePassword = (e) => {
      setPassword(e.target.value);

      if(e.target.value.length < 1) {
        setPasswordError("Password is required!");
      }
      else if(e.target.value.length < 3) {
        setPasswordError("Password must be at least 2 characters");
      }
      else if(e.target.value != confirmPassword) {
        setPasswordError("Passwords must match")
        setconfirmPasswordError("Passwords must match")
      }
      else {
        setPasswordError("");
        setconfirmPasswordError("");
      }

     
    };

    const handleConfirmPassword = (e) => {
      setconfirmPassword(e.target.value);
      // console.log("CONFIRM" + e.target.value);
      // console.log("JUST" + password);
      if(e.target.value != password) {
        setPasswordError("Passwords must match")
        setconfirmPasswordError("Passwords must match")
      }
      if(e.target.value == password && password.length > 2) {
        setconfirmPasswordError("");
        setPasswordError("");
      }

    };

  return (
    <>
    <div className = "App">
      <form onSubmit= { createUser }>
          {
            hasBeenSubmitted ?
            <h3>Thank you for submitting the form!</h3> :
            <h3>Welcome, please submit the form.</h3> 
          }
          <div className= {styles.border}>
            <label>Username: </label>
            <input type = "text" value = {username} /*setting username here */ onChange= { handleUsername /*reset username to "" here */ } />
            {
              
              usernameError ?
              <p>{ usernameError }</p> :
              ''
            } 
          </div>
          <br>
          </br>
          <div className= {styles.border}>
            <label>Email Address: </label>
            <input type = "text" value = {email} onChange = { handleEmail } />
            {
              emailError ?
              <p> { emailError } </p> :
              ''
            }
          </div>
          <br>
          </br>
          <div  className= {styles.border}>
            <label>Password: </label>
            <input type = "password" value = {password} onChange = { handlePassword } /> 
            {
              
              passwordError ?
              <p> { passwordError } </p> :
              ''
            }
          </div>
          <br>
          </br>
          <div className = {styles.border}>
            <label>Confirm Password: </label>

            <input type = "password" value = {confirmPassword} onChange = { handleConfirmPassword } />  
            {
              confirmPasswordError ?
              <p> { confirmPasswordError } </p> :
              ''
            }
          </div>
          <br>
          </br>
          {
            passwordError || confirmPasswordError ?
            <input type= "submit" value = "Create User" disabled/> :
            <input type= "submit" value = "Create User"/>
          }

          
      </form>
      
   {/* MAKE PASSWORD * SYMBOLS
    */}
    
    </div>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    
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


// const nums = [1, 2, 3, 4, 5];
 
// function double(num) {
//     return num * 2;
// }
 
// const newNums = nums.map( double );
 
// console.log( newNums ); // logs [2, 4, 6, 8, 10]

// import React from 'react';
 
    
// const Groceries = (props) => {
//     // this could just as easily come from props
//     const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
//     return ( 
//         <ul>
//             { groceryList.map( (item, i) => 
//                 <li key={ i }>{ item }</li> ) }
//         </ul>
//     ); 
// }
    
// export default Groceries;