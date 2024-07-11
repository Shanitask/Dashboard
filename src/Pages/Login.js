import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate()
    const getData = async (e) => {
        e.preventDefault();
        debugger;
        try {
            const response = await fetch('http://localhost:3000/registration');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Data from server:', data); 
            const user = data.find((a) => a.username === username && a.password === password);
            console.log('Found user:', user); 
            if (user) {
              alert("login successful");
              navigate('/Dashboard')
              
            } else {
              alert("user not found")
            }
          } catch (error) {
            console.error('Error:', error);
            alert('Something Went Wrong');
          }
        };
    return (
        <div>
            <div className='card' style={{ width: "50%", display: "block", margin: "auto", padding: "20px" }}>
                <form onSubmit={getData}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">User Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setUsername(e.target.value)} />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"  >Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>

                    <p>
          Don't have an account? <Link to="/Registration">Register Here</Link>
        </p>
                </form>
            </div>
        </div>
    )
}
