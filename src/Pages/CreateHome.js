import { useState } from "react";
function CreateHome(){

    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[number,setphone]=useState("");
    const[city,setcity]=useState(""); 
    const SaveData=(e)=>{
e.preventDefault();
// console.log(Name,Email,Phone,City)
const empData={name,email,number,city}
fetch("http://localhost:3000/Home",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(empData)

}).then((res)=>{
    alert("saved successfully")
}).catch((err)=>{
    console.log(err.message)
})
    }
    return(
        <>
        
        <form onSubmit={SaveData} >
 
		<div className="form-group">
    <label htmlFor="firstname">First Name</label>
    <input type="text" className="form-control" name="firstname" onChange={e=>setname(e.target.value)}  />
  </div>
  <div className="form-group">
    <label htmlFor="Email1">Email address</label>
    <input type="email" className="form-control" aria-describedby="emailHelp" name="email" onChange={e=>setemail(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="lastname">City</label>
    <input type="text" className="form-control"  name="lastname"  onChange={e=>setcity(e.target.value)}  />
  </div>
  <div className="form-group">
    <label htmlFor="phoneno">Phone Number</label>
    <input type="text" className="form-control" name="phoneno"  onChange={e=>setphone(e.target.value)}/>
  </div>

  
  <button type="submit" className="btn btn-primary" name="create">Add </button>
</form>
        </>
    )
}
export default CreateHome;