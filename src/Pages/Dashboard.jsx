import React, { useEffect } from 'react'
import Headertwo from '../Components/Headertwo'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { localtoken } from './../constains/index';
import useGetdate from '../Hooks/useGetdate';
import axios from 'axios';
import { flushSync } from 'react-dom';
import MyJobs from './MyJobs';

const Dashboard = () => {
    const { data, Loading, isError, error, mutateAsync } = useGetdate("/auth")    
    const navigate = useNavigate()
    const status = localStorage.setItem("user status")
    if(status) {
        navigate("/dashboaraccount")
    }
    async function getprofileuser() {
        const { data } = await axios.get("/profile/me")
        if(data) {
            navigate("/dashboaraccount")
        }
        await mutateAsync()
    }
    getprofileuser()
    // const {info} = useSelector(({market}) => market)
    let token = localStorage.getItem(localtoken)
    // if (Loading) {
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // }
    // console.log(data);
    return (
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
    )
}

export default Dashboard
