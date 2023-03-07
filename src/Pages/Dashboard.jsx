import React, { useEffect } from 'react'
import Headertwo from '../Components/Headertwo'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { localtoken } from './../constains/index';
import useGetdate from '../Hooks/useGetdate';
import axios from 'axios';
import { flushSync } from 'react-dom';
import MyJobs from './MyJobs';

const Dashboard = () => {
    const navigate = useNavigate()
    async function getprofileuser() {
        const { data } = await axios.get("/profile/me")
        console.log("salom", data);
        if (data.status) {
            navigate("/dashboaraccount")
        }
    }
    getprofileuser()
    // const {info} = useSelector(({market}) => market)
    let token = localStorage.getItem(localtoken)
    const { data, Loading, isError, error, mutateAsync } = useGetdate("/auth")
    if (Loading) {
        return (
            <h1>Loading...</h1>
        )
    }
    // console.log(data);
    return token ? (
        <div>
            <Headertwo />
            <section className='dashboard mt-5'>
                <div className="container">
                    <h2>Hello, {data?.name}</h2>
                    <p>You have not created an profile yet.</p>
                    <Link to="/profile"><button className='btn btn-danger'>Create Profile</button></Link>
                </div>
            </section>
        </div>
    ) : <Navigate to='/login' />
}

export default Dashboard
