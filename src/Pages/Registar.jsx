import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import "../styles/Register.css";
import { localtoken } from './../constains/index';
import { profileGet } from './../redux/actions/index';

const Registar = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
    })
    function handleInputChange(e) {
        setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
    }
    const navigate = useNavigate()
    async function handleRegister(e) {
        e.preventDefault()
        if (!values.name || !values.email || !values.password || !values.confirmpassword) {
            return toast("Please , fill the fields!", { type: 'error' })
        }
        try {
            const { data } = await axios.post("/users", values)
            const { token } = data;
            localStorage.setItem(localtoken, token)
            toast("Registered!", { type: "success" })
            navigate("/dashboard")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='umm'>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="registar d-flex justify-content-around flex-column px-4 gap-2">
                    <h2 className='text-center fs-1 fw-normal' >Registar</h2>
                    <form onSubmit={handleRegister} className='d-flex flex-column gap-1'>
                        <label className='mt-2' htmlFor="name">Your name</label>
                        <input className='form-control' name='name' type="text" id='name' value={values.name} onChange={handleInputChange} />
                        <label className='mt-2' htmlFor="email">Your email</label>
                        <input className='form-control' name='email' id='email' value={values.email} onChange={handleInputChange} type="email" />
                        <label className='mt-2' htmlFor="password">Your password</label>
                        <input type="password" id='password' name='password' value={values.password} onChange={handleInputChange} className='form-control' />
                        <label className='mt-2' htmlFor="confirm">Confirm password</label>
                        <input type="password" name='confirmpassword' id='confirm' value={values.confirmpassword} onChange={handleInputChange} className='form-control' />
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
