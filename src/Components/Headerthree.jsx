import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { localtoken } from './../constains/index';

const Headerthree = () => {
    const navigate = useNavigate()
    function removeLogout() {
        const confirm1 = confirm("logut qilishni xohlaysizmi")
        if(confirm1 === true) {
            localStorage.removeItem(localtoken)
            navigate("/login")
        }
    }
    return (
        <div>
            <div>
                <header className='py-4 two'>
                    <nav className="container d-flex align-items-center center justify-content-between">
                        <div className="logo">
                            <Link className='text-decoration-none text-danger fs-2' to='/dashboard'>Jobify</Link>
                        </div>
                        <div className="alohida d-flex gap-2 align-items-center">
                            <ul className='d-flex gap-3 align-items-center mb-0'>
                                <li><Link className='text-decoration-none text-dark' to="/dashboaraccount">Dashboard</Link></li>
                                <li><Link className='text-decoration-none text-dark' to="/myjobs">My Jobs</Link></li>
                                <li><Link className='text-decoration-none text-dark' to="/Explore">Explore</Link></li>
                            </ul>
                            <Link to='/login'><button onClick={removeLogout} className='btn m-0 btn-danger'>Logout</button></Link>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    )
}

export default Headerthree
