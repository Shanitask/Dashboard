import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function EditHome(){
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[number,setphone]=useState("");
    const[city,setcity]=useState(""); 
const {empid}=useParams();
    useEffect(()=>{
       
fetch('http://localhost:3000/Home/'+ empid).then(data=>{
    return data.json();
}).then((data)=>{
    console.log(data);
  
    setname(data.name);
    setemail(data.email);
    setphone(data.number);
    setcity(data.city);
}).catch((err)=>{
    console.log(err.message)
})
    },[])
    const updateData=(e)=>{
e.preventDefault();
const empdata={name,email,number,city}
fetch('http://localhost:3000/Home/'+empid,{
    method:'PUT',
    headers:{"content-type":"application/json"},
    body:JSON.stringify(empdata)
}).then((res)=>{
    alert('Update Sucessfully')
}).catch((err)=>{
    console.log(err.message)
})
    }
    return(
        <>
         <form onSubmit={updateData} >
 
 <div className="form-group">
<label htmlFor="firstname">First Name</label>
<input type="text" className="form-control" name="firstname" onChange={e=>setname(e.target.value)} value={name}  />
</div>
<div className="form-group">
<label htmlFor="Email1">Email address</label>
<input type="email" className="form-control" aria-describedby="emailHelp" name="email" onChange={e=>setemail(e.target.value)} value={email} />
</div>
<div className="form-group">
<label htmlFor="lastname">City</label>
<input type="text" className="form-control"  name="lastname"  onChange={e=>setcity(e.target.value)} value={city}  />
</div>
<div className="form-group">
<label htmlFor="phoneno">Phone Number</label>
<input type="text" className="form-control" name="phoneno"  onChange={e=>setphone(e.target.value)} value={number}/>
</div>


<button type="submit" className="btn btn-primary" name="create">Add </button>
</form>
        </>
    )
}
export default EditHome;