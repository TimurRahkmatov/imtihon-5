import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Headerthree from '../Components/Headerthree'
import { useDispatch } from 'react-redux';
import { profileEducation } from './../redux/actions/index';

const AddEducation = () => {
    const dispatch = useDispatch()
    const [school, setSchool] = useState("");
    const [degree, setDegree] = useState("");
    const [fieldofstudy, setFieldofstudy] = useState("");
    const [fromdate, setFromdate] = useState("")
    const [current, setCurrent] = useState(false)
    const [todate, setTo] = useState('')
    const [description, setDescription] = useState("")

    async function education(e) {
        e?.preventDefault();
        const PutEducation = {
            "school": school,
            "degree": degree,
            "fieldofstudy": fieldofstudy,
            "current": current,
            "from": fromdate,
            "description": description,
            "to": todate,
        }
        try {
            const { data } = await axios.put('/profile/education', PutEducation)
            dispatch(profileEducation(data))
            secondary()
            if (data) {
                return toast("creating education", { type: "success" })
            }
            // console.log("salom dunyo", data);
        } catch (error) {
            toast("Malumotlarni to'gri tuldiring", { type: "error" })
            console.log("catch error", error)
        }
    }
    const secondary = () => {
        console.log("ketdiii");
        window.location.replace("/dashboaraccount")
    }
    return (
        <div>
            <Headerthree />
            <section >
                <div className="container">
                    <Link to='/dashboaraccount'>
                        <button className="btn btn-danger mt-5">
                            Go back
                        </button>
                    </Link>
                    <h2 className='py-3'>Add Education</h2>
                    <form onSubmit={education} >
                        <div className="row">
                            <div className="col-md-6">
                                <label className='form-label' htmlFor="title">School</label>
                                <input type="text" name='title' id='title' className='form-control' value={school} onChange={(e) => setSchool(e.target.value)} placeholder='Stanford' />
                            </div>
                            <div className="col-md-6">
                                <label className='form-label' htmlFor="company">Degree</label>
                                <input type="text" name='company' value={degree} onChange={(e) => setDegree(e.target.value)} id='company' className='form-control' placeholder='Master' />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="" className="form-label">Date</label>
                                <div className="input-group d-flex">
                                    <input type="date" name='from' id='from' value={fromdate} onChange={(e) => setFromdate(e.target.value)} className='form-control' />
                                    <span className='input-group-text'>To</span>
                                    <input type="date" name='to' value={todate} onChange={(e) => setTo(e.target.value)} id='to' className='form-control' />
                                </div>
                                <div className="row g-5 d-flex">
                                    <div className="offset-6 col-6">
                                        <input type="checkbox" name='current' id='current' />
                                        <label className='form-label ps-3' htmlFor="current">Current</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label className='form-label' htmlFor="location">Field of study</label>
                                <input type="text" name='location' value={fieldofstudy} onChange={(e) => setFieldofstudy(e.target.value)} id='location' className='form-control' placeholder='Computer Sience' />
                            </div>
                            <div className="col-md-12">
                                <label className='form-label' htmlFor="descition">Description</label>
                                <textarea rows="5" type="text" value={description} onChange={(e) => setDescription(e.target.value)} name='descition' id='descition' className='form-control' placeholder='Tell us  a little about  the exprience' ></textarea>
                            </div>
                            <button onClick={education} className="btn btn-danger w-100 mt-3">Add</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddEducation