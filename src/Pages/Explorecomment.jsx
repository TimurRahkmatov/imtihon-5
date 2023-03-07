import React from 'react'
import { Link, useParams } from "react-router-dom";
import Headertwo from '../Components/Headertwo';
import useGetdate from './../Hooks/useGetdate';
import { toast } from 'react-toastify';
import axios from 'axios';
const Explorecomment = () => {
    const { id } = useParams();
    const { data, Loading, isError, error, mutateAsync } = useGetdate(`/jobs/${id}`);
    let details = data;
    if (Loading) {
        return (
            <h1>Loading...</h1>
        )
    }
    async function userDisleked(id) {
        try {
            const { data } = await axios.put(`/jobs/unlike/${id}`)
            await mutateAsync();
            toast("Unliked", { type: "success" })
            console.log(data);
        } catch {
            toast("Like hali bosilmagan", {type:"error"})
        }
    }
    async function userLike(id) {
        try {
            const { data } = await axios.put(`/jobs/like/${id}`)
            await mutateAsync();
            toast("Liked", { type: "success" })
            console.log(data)
        } catch {
            toast("Like Already", { type: "error" })

        }

    }
    async function userApply(id) {
        try {
            const { data } = await axios.post(`/jobs/apply/${id}`)
            await mutateAsync();
            if (data) {
                toast("Applyed!", { type: "success" })
            }
        }
        catch {
            return toast("uji aplied qilingan", { type: "error" })
        }
    }
    return details ? (
        <div>
            <Headertwo />
            <div className="container">
                <Link to="/explore"><button className='btn btn-danger my-5'> Go Back</button></Link>
                <div className=" div d-flex align-items-center justify-content-center">
                    <div className="cardcover gap-1 justify-content-between px-5 d-flex border border-1">
                        <div className="por">
                            <h2 >{details.title}</h2>
                            <p>{details.description}</p>
                            <p>By:{details.name}</p>
                            <p>{details.date}</p>
                        </div>
                        <div className="por-2 d-flex justify-content-between">
                            <div className='d-flex gap-2 align-items-center'>
                                <div className="btns d-flex flex-column gap-2 align-items-center">
                                    <button onClick={() => userLike(details._id)} className='d-flex gap-1 justify-content-center align-items-center  btn btn-primary'><i className="fa-solid fa-thumbs-up"></i><div className='dumaloq text-dark d-flex align-items-center justify-content-center'>{details?.likes.length}</div></button>
                                    <button onClick={() => userDisleked(details._id)} className='btn btn-secondary'><i className="fa-solid fa-thumbs-down "></i></button>
                                    <button className='btn btn-success d-flex align-items-center justify-content-center gap-1'><i className="fa-solid fa-graduation-cap justify-content-center align-items-center"></i><div className="dumaloq text-dark d-flex justify-content-center align-items-center">{details?.applicants.length}</div></button>
                                </div>
                                <div className="already">
                                    <button onClick={() => userApply(details?._id)} className='btn alreadyr btn-danger m-auto'><i className="fa-solid fa-plus"></i>Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    ) : <div>No details</div>
}

export default Explorecomment
