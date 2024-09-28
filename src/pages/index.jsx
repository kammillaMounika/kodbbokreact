import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Index() {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
    const navigate=useNavigate();

	
	const handleSubmit = async(e) => {
		e.preventDefault();
		
		const resp=await axios.post('http://localhost:8080/login',
			{username,password});
            if(resp.data === "valid"){
                navigate('/home');
                alert("login successful");
            }
            else{
                navigate('/');
                alert("login not sucessfull,try again");

            }
		
	}

		
  return (
    <>
    <h2>Login HERE :</h2>

    <form onSubmit={handleSubmit}>
			<label>USERNAME : </label>
			<input type = "text"
			 name = "username"
			 value={username}
			 onChange={(e)=>{setUsername(e.target.value)}}
			 />
			<br/>
			<br/>
		
			<label>PASSWORD : </label>
			<input type = "password" 
			name = "password"
			value={password}
			onChange={(e)=>{setPassword(e.target.value)}}
			/>
			<br/>
			<br/>
			
			<input type="submit"
			 value = "LOGIN"/>
			<hr></hr>
            <a href = "/openResetPassword">Forgot password?</a>
			<a href = "/openSignUp">Create new account</a>
		</form>
    
    </>
  )
}
