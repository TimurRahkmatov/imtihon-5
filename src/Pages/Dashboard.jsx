import React from 'react'
import Headertwo from '../Components/Headertwo'
import {Link} from 'react-router-dom'
const Dashboard = () => {
    return (
        <div>
            <Headertwo />
            <section className='dashboard mt-5'>
                <div className="container">
                <h2>Hello, Timur</h2>
                <p>You have not created an profile yet.</p>
                <Link to="/profile"><button className='btn btn-danger'>Create Profile</button></Link>
                </div>
            </section>
        </div>
    )
}

export default Dashboard
