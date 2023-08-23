import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { localtoken } from '../constains';
import "../styles/Login.css";
const Login = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem(localtoken)
    if(token) {
        navigate("/dashboard")
    }
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleLogin(e) {
        e.preventDefault()
        const Obshiyvalue = {
            'email': email,
            'password': password
        }
        try {
            const { data } = await axios.post("/auth", Obshiyvalue)
            toast("Loginid!", { type: "success" })
            const { token } = data;
            localStorage.setItem(localtoken, token)
            if (data) {
                navigate("/dashboard")
            }
        } catch (error) {
            console.log(error);
            return toast("Already not accound", { type: "error" })
        }
    }
    return (
        <div className='container'>
            <div className='salom d-flex align-items-center h-100vh justify-content-center'>
            <div className='logincard d-flex flex-column justify-content-center'>
                <h2 className='text-center fs-1 fw-normal'>Login</h2>
                <form onSubmit={handleLogin} className='form d-flex flex-column px-5 gap-2'>
                    <label htmlFor="email">Your email</label>
                    <input className='form-control' type="email" placeholder='email' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="password">Your password</label>
                    <input className='form-control' type="password" id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                    <button className='btn btn-danger mt-3' type='submit'>Login</button>
                </form>
                <div className='d-flex justify-content-center mt-4'><p>No acount yet? <Link className='text-danger text-decoration-none' to="/registar">Registar</Link></p></div>
            </div>
        </div>
        </div>
    )
}

export default Login
