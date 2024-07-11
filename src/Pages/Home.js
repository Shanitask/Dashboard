import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate();
const [homeData,sethomeData]=useState(null)
    useEffect(()=>{
getData();
 
    },[])
    function getData(){
      fetch('http://localhost:3000/Home').then((res)=>{
        return res.json();
      }).then((response)=>{
        sethomeData(response)
        // console.log(response)
      }).catch((err)=>{
        console.log(err.message)
      })
    }
    

    const edit =(id)=>{
      navigate('/Dashboard/EditHome/'+id)
    }
const deleteData=(id)=>{
fetch('http://localhost:3000/Home/'+id,{
  method:'DELETE'

}).then(res=>{
  console.log(res);
 
  alert('Data Deleted Sucessfully')
},[])
}
  return (
    
    <div>
      {/* <button className='btn btn-primary '>Create </button> */}
      <Link to="/Dashboard/CreateHome" class="btn btn-primary">Create</Link>
     <div class="table-responsive">
  <table class="table">

  <thead>
    <tr>
      <th scope="col">sr .No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">city</th>
      <th scope="col">Number</th>
      <th scope='col'>Action</th>

    </tr>
  </thead>
  <tbody>
    { homeData && homeData.map(item=>(

   
    <tr>
      <th scope="row">{item.id}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.city}</td>
      <td>{item.number}</td>
      <td><button className='btn btn-primary' onClick={()=>{edit(item.id)}} >Edit</button>
      <button className='btn btn-danger' onClick={()=>{deleteData(item.id)}}>Delete</button>
      </td>
      
    </tr>
     ))
}
  
  </tbody>
</table>
</div>
    </div>
  )

}

export default Home
