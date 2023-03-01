import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/Register.css";
const Registar = () => {
    return (
        <div className='umm'>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="registar d-flex justify-content-around flex-column px-4 gap-2">
                    <h2 className='text-center fs-1 fw-normal' >Registar</h2>
                    <form className='d-flex flex-column gap-1'>
                        <label className='mt-2' htmlFor="name">Your name</label>
                        <input className='form-control' type="text" id='name'/>
                        <label className='mt-2' htmlFor="email">Your email</label>
                        <input className='form-control'id='email' type="email" />
                        <label className='mt-2' htmlFor="password">Your password</label>
                        <input type="password" id='password' className='form-control' />
                        <label className='mt-2' htmlFor="confirm">Confirm password</label>
                        <input type="password" id='confirm' className='form-control' />
                        <button type='submit' className='btn btn-danger w-100 mt-3'>Registar</button>
                    </form>
                    <div>
                        <p className='text-center'>Already have an account ? <Link className='text-danger text-decoration-none' to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registar
