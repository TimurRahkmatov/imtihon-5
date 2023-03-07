import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header className='py-4'>
                <nav className="container d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <Link className='text-decoration-none text-danger fs-2' to='/'>Jobify</Link>
                    </div>
                    <ul className=' mb-0 d-flex text-decoration-none gap-4 align-items-center'>
                        <li><Link className='text-decoration-none text-dark' to='/explore'>Explore</Link></li>
                        <li><Link className='text-decoration-none text-dark' to='/login'>Login</Link></li>
                        <li><Link className='text-decoration-none text-dark' to='/registar'>Registar</Link></li>
                    </ul>
                </nav>
            </header>  
        </div>
    )
}

export default Header
