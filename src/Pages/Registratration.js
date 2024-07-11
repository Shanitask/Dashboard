import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Registratration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function postData(e){
e.preventDefault();
console.log(name,email,username,password);
const empData={name,email,username,password};
fetch('http://localhost:3000/registration',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(empData)
}).then((result)=>{
    alert("Saved Data");
    
}).catch(error=>{
    console.log(error.message)
})
    }
  return (
    <div>
        <div className='card' style={{width:"50%",display:"block",margin:"auto",padding:"20px"}}>
        <form onSubmit={postData}>
        <div class="form-group">
    <label for="exampleInputEmail1">Full Name</label>
    <input type="type" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">User Name</label>
    <input type="type" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" onChange={(e)=>setUsername(e.target.value)} />
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
  <p>Already have an account?<Link to="/"> Login</Link></p>
</form>
        </div>
      
    </div>
  )
}
