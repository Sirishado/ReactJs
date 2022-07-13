import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';

function App() {
  const[firstName,setfirstName] = useState("");
  const[lastName,setlastName] = useState("");
  const[Email,setEmail] = useState("");
  const[Mobile,setMobile] = useState("");
  const handleSubmit = (e) =>{alert (firstName + " " +lastName +" " + Email + " " + Mobile )}
;  return (
    <Fragment>
      <input type="text" value = {firstName}  placeholder ='Enter First Name' onChange={(e)=>setfirstName(e.target.value)}/>
      <br></br>
      <input type="text" value ={lastName}  placeholder ='Enter Last Name' onChange={(e)=>setlastName(e.target.value)}/>
      <br></br>
      <input type="text" value ={Email}  placeholder ='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
      <br></br>
      <input type="text" value ={Mobile}  placeholder ='Enter MobileNumber' onChange={(e)=>setMobile(e.target.value)}/>
      <br></br>
      
<button onClick={(e)=>handleSubmit(e)}>submit</button>
      </Fragment>
  
  );
}

export default App;
