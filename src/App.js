import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';
import axios from 'axios';
import { clear } from '@testing-library/user-event/dist/clear';

function App() {
  const[firstName,setfirstName] = useState("");
  const[lastName,setlastName] = useState("");
  const[Email,setEmail] = useState("");
  const[Mobile,setMobile] = useState("");
  const[Students,SetStudents] = useState("");
  const handleSubmit = (e) =>//{alert (firstName + " " +lastName +" " + Email + " " + Mobile )};
   {
     const data ={
       FirstName :firstName,
       LastName : lastName,
       Email : Email,
       Mobile :Mobile,
       Type :"Add"
     }    
     axios.post("",data)
     .then((json)=>{
     clear()
     GetAllStudents();
    })
     
     .Catch((error)=>{console.log(error);})
  }
  const handleUpdate = (e) =>//{alert (firstName + " " +lastName +" " + Email + " " + Mobile )};
   {
     const data ={
       FirstName :firstName,
       LastName : lastName,
       Email : Email,
       Mobile :Mobile,
       Type :"Update"
     }    
     axios.post("",data)
     .then((json)=>{
     clear()
     GetAllStudents();
    })
     
     .Catch((error)=>{console.log(error);})
  }
const handledelete = (id)=>{
  if(id>0){
    const data ={
      Id : id,
      Type :"Delete"
    }    
    axios.post("",data)
    .then((json)=>{
    clear();
    GetAllStudents();
   })
    
    .Catch((error)=>{console.log(error);})
  }

}
const handleedit = (id)=>{
  if(id>0){
    const data ={
      Id : id
    }
  
  axios.post("",data)
  .then((json)=>{
    if(json){
setfirstName(json.data.students.firstName)

setfirstName(json.data.students.lastName)
setfirstName(json.data.students.Email)
setfirstName(json.data.students.Mobile)}
  })
  .Catch((error)=>{console.log(error);})
}}

     const GetAllStudents = () =>{
     axios.get("").then((json)=>{

       SetStudents(json.data.lststudents)}
       )
       .Catch((error)=>{console.log(error);})
     }

    //  useEffect(()=>
    //   {
    //     GetAllStudents();
    //   },{})
    
 const clear = ()=>{
   setEmail("")
   setMobile("")
   setfirstName("")
   setlastName("")
   }


  
  return (
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
<button onClick={(e)=>handleUpdate(e)}>update</button>
 <br></br>
<table>
  <thead>
    <th>Serial No</th>
    <th>FirstName</th>
    <th>LastName</th>
    <th>Email</th>
    <th>Mobile</th>
<th>Action</th>
  </thead>
  <tbody>
    {
      Students && Students.map((stu,index)=>{
       return(
        <tr key ={index}>
          <td> {index+1}</td>
          <td>{stu.firstName}</td>
          <td>{stu.lastName}</td>
          <td>{stu.Email}</td>
          <td>{stu.Mobile}</td>
          <td>
            <button onclick ={()=>handleedit(stu.Id)}>Edit</button>
          </td>
          <td>
            <button onclick ={()=>handledelete(stu.Id)}>Delete</button>
          </td>
        </tr>
       ) 
      })
    }
  </tbody>

</table>
      </Fragment>
  
  );
}

export default App;
