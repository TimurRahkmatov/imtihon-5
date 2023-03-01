import React from 'react'
import { Link } from "react-router-dom";
import "../styles/Login.css";
const Login = () => {
    return (
        <div className='salom d-flex align-items-center h-100vh justify-content-center'>
            <div className='logincard d-flex flex-column justify-content-center'>
                <h2 className='text-center fs-1 fw-normal'>Login</h2>
                <form className='form d-flex flex-column px-5 gap-2'>
                    <label htmlFor="email">Your email</label>
                    <input className='form-control' type="email" placeholder='email' name='email' id='email' />
                    <label htmlFor="password">Your password</label>
                    <input className='form-control' type="password" id='password' placeholder='password' />
                    <button className='btn btn-danger mt-3' type='submit'>Login</button>
                </form>
                <div className='d-flex justify-content-center mt-4'><p>No acount yet? <Link className='text-danger text-decoration-none' to="/registar">Registar</Link></p></div>
            </div>
        </div>
    )
}

export default Login
