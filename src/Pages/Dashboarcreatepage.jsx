import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Headerthree from '../Components/Headerthree'
import useGetdate from '../Hooks/useGetdate'
import { localtoken } from './../constains/index';
import { useDispatch, useSelector } from 'react-redux';
import { profileGet } from './../redux/actions/index';

const Dashboarcreatepage = () => {
    const states = useSelector((state) => state?.profile);
    // console.log("exprience", states);
    const stated = useSelector((state) => state?.profile)
    // console.log("education",stated);
    const state = useSelector((state) => state?.profile)
    // console.log("social_state", state);
    const { data, Loading } = useGetdate('/auth');
    const token = localStorage.getItem(localtoken)
    // console.log(data);
    const [user, setUser] = useState([])
    const [github, setGithub] = useState([])
    const dispatch = useDispatch()
    const navi = useNavigate()
    async function useGetprofileID() {
        try {
            const { data } = await axios.get("/profile/me")
            if(!data) {
                navi("/dashboard")
            }
            localStorage.setItem("status user " , data.status)
            console.log("er" , data.status);
            setUser(data)
            dispatch(profileGet(data))
            // console.log("------------", data);
        } catch (error) {
            if(!error.config.data) {
                navi("/dashboard")
            }
        }
    }

    useGetprofileID()



    async function DangerZone() {
        const confirm1 = confirm("siz accountni ocirishni hohlaysizmi 1")
        if (confirm1 === true) {
            const confirm2 = confirm("siz accountni ocirishni hohlaysizmi 2")
            if (confirm2 === true) {
                const confirm3 = confirm("siz accountni ocirishni hohlaysizmi 3")
                if (confirm3 === true) {
                    const { data } = await axios.delete("/profile")
                    toast("user deleted", { type: "success" });
                    localStorage.removeItem(localtoken)
                    navi("/login")

                }
            }
        }
    }

    useEffect(() => {
        useGetprofileID();
    }, [Loading])

    async function deleteExperience(id) {
        try {
            await axios.delete(`/profile/experience/${id}`,)
            toast("Deleted Exprience", {type:"success"})
        }catch {
            toast("Delete error", {type:"error"})
        }
    }
    async function deleteEducation(id) {
        try {
            await axios.delete(`/profile/education/${id}`,)
            toast("Deleted Education", {type:"success"})
        }catch {
            toast("Delete error")
        }
    }
    return token ? (
        <div>
            <Headerthree />
            <section className='py-5'>
                <div className="container">
                    <h1 className='pt-1'>Hello, {data?.name}</h1>
                    <p>What are you planning to do today?</p>
                    <div className="buttons d-flex gap-2">
                        <Link to='/myjobs'><button className="btn btn-primary">Post a job</button></Link>
                        <Link to='/explore'><button className="btn btn-info">Explore jobe</button></Link>
                    </div>
                </div>
                <div className="container">
                    <h2 className='mt-3 py-3'>Your Info</h2>
                    <div className="Yourinfo gap-5 py-4 px-3 border d-flex justify-content-between">
                        <div className="portionimg d-flex gap-5 align-items-start">
                            <div>
                                <img className='imageprofile' src="https://gravatar.com/avatar/e8095b9d9cbdc225b59b144e4c64da78?d=mm&r=pg&s=200" alt="image" />
                            </div>
                            <div className="portion-status">
                                <p>Email:<a href={data?.email}>{data?.email}</a></p>
                                <p>Status:{state?.profile?.status}</p>
                                <p>Location:{state?.profile?.location}</p>
                                <p>Bio:{state?.profile?.bio}</p>
                                <p>Joined at:{state?.profile?.date}</p>
                            </div>
                        </div>
                        <div className="portion-skills">
                            <p>Company:{state?.profile?.company}</p>
                            <p>Website: <a href={state?.profile?.website}>{state?.profile?.website}</a></p>
                            <p>Skills:{state?.profile?.skills}</p>
                        </div>
                        <div className="portionhamma ml-5  flex-wrap d-flex flex-column justify-content-between  gap-2">
                            <div className="urls d-flex flex-column flex-wrap">

                                <div className="d-flex gap-2"><p><a className='text-decoration-none text-dark' target="_blank" href={state?.profile?.social?.youtube}><i className="fa-brands fa-youtube text-danger"></i>Youtube</a></p></div>
                                <p><a className='text-decoration-none text-dark' target="_blank" href={state?.profile?.social?.twitter}><i className="fa-brands fa-twitter text-primary"></i>twitter</a></p>
                                <p><a className='text-decoration-none text-dark' target="_blank" href={state?.profile?.social?.instagram}><i className="fa-brands fa-instagram text-danger"></i>instagram</a></p>
                                <p><a className='text-decoration-none text-dark' target="_blank" href={state?.profile?.social?.linkedin}><i className="fa-brands fa-linkedin-in text-primary"></i>linkedin</a></p>
                                <p><a className='text-decoration-none text-dark' target="_blank" href={state?.profile?.social?.facebook}><i className="fa-brands fa-facebook text-primary"></i>facebook</a></p>
                            </div>
                            <div className="btnsbutton gap-2 d-flex mr-4">

                                <Link to='/edit-profile'>
                                    <button className="btn btn-info">
                                        Edit profile
                                    </button>
                                </Link>
                                <Link to='/edit-socials'>
                                    <button className="btn btn-primary">
                                        Edit socials
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2 className='py-2 mt-3'>Experiences</h2>
                    <div className="expriencies border d-flex justify-content-center px-3 flex-column py-4">
                        {user?.experience == 0 ? (<h2 className='text-center'>No experience Added</h2>) : (user?.experience?.map(
                            (experience) => {
                                return (
                                    <div key={experience?._id}>
                                        <div  className='d-flex justify-content-between'>
                                            <div>
                                                <h2><span className='text-danger'>{experience.title}</span> at <span className='text-danger'>{experience.company}</span></h2>
                                                <p>From:{experience.from}</p>
                                                <p>Until:{experience.to}</p>
                                                <p>location:{experience.location}</p>
                                                <p>Description:{experience.description}</p>
                                            </div>
                                            <div>
                                                <button onClick={() => deleteExperience(experience._id)} className="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        ))}
                        <div className='d-flex justify-content-center'>
                            <Link to="/exprience"><button className='btn btn-danger'>Add</button></Link>
                        </div>
                    </div>
                </div>
                <div className="container ">
                    <h2 className='py-2 mt-3'>Educations</h2>
                    <div className="educations border d-flex justify-content-center  flex-column px-4 py-4">
                        {user?.education == 0 ? (<h2 className='text-center'>No education Added</h2>) : (user?.education?.map(
                            (education) => {
                                return (
                                    <div key={education._id} className='d-flex justify-content-between gap-5'>
                                        <div>
                                            <h2><span className='text-danger'>{education.degree}</span> at <span className='text-danger'>{education.school}</span></h2>
                                            <p>From:{education.from}</p>
                                            <p>Until:{education.to}</p>
                                            <p>location:{education.location}</p>
                                            <p>Description:{education.description}</p>
                                        </div>
                                        <div>
                                            <button onClick={() => deleteEducation(education._id)} className="btn btn-danger">Delete</button>
                                        </div>
                                    </div>
                                )
                            }
                        ))}
                        <Link to='/education'>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-danger">
                                    Add
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="container">
                    <div className="dangerzone mt-5 border d-flex justify-content-center  flex-column py-5 px-4">
                        <h2 className='display-1 text-danger'>!!!DANGER ZONE!!!</h2>
                        <p>This area is so dangerous. You may delete all your data by accident in here! PLEASE BE CAREFUL!!!</p>
                        <div className="btnds">
                            <button onClick={DangerZone} className="btn btn-danger">Delete account</button>
                        </div>
                    </div>
                </div>
                {
                    github?.map((item) => {
                        <div className="container">
                            <h2>Recent Git Repos</h2>
                            <p>{item.name}</p>
                        </div>
                    })
                }
            </section>
        </div>
    ) : navi("/login")
}

export default Dashboarcreatepage
