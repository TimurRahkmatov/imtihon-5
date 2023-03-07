import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import Headerthree from '../Components/Headerthree'
import { profileExpreince } from '../redux/actions';
import { profileEducation } from './../redux/reducers/education';
import { profileExprience } from './../redux/reducers/exprience';

const AddExprience = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [todate, setTodate] = useState("");
    const [fromdate, setFromdate] = useState("")
    const [current, setCurrent] = useState(false);
    const [location, setLocation] = useState("");
    const [descition, setDescition] = useState("");

    async function exprience(e) {

        e.preventDefault();
        const PutExperience = {
            "title": title,
            "company": company,
            "from": fromdate,
            "current": current,
            "location": location,
            "description": descition,
            "to": todate
        }
        try {
            const { data } = await axios.put('/profile/experience', PutExperience)
            dispatch(profileExpreince(data))
            // console.log("salom dunyo", data);
            secondary()
            if (data) {
              return toast("Creating exprience", { type: "success" })
            }
        } catch (error) {
            toast("Malumotlarni to'gri tuldiring", { type: "error" })
            console.log("catch error", error, PutExperience)
        }
    }
    const secondary = () => {
        // console.log("ketdiii");
        window.location.replace("/dashboaraccount")
    }
    return (
        <div>
            <Headerthree />
            <section className='py-5' >
                <div className="container">
                    <Link to='/dashboaraccount'>
                        <button className="btn btn-danger mt-2">
                            Go back
                        </button>
                    </Link>
                    <h2 className='py-3'>Add Experience</h2>
                    <form onSubmit={exprience} >
                        <div className="row">
                            <div className="col-md-6">
                                <label className='form-label' htmlFor="title">Title</label>
                                <input type="text" name='title' id='title' className='form-control' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Senior developer' />
                            </div>
                            <div className="col-md-6">
                                <label className='form-label' htmlFor="company">Company</label>
                                <input type="text" name='company' value={company} onChange={(e) => setCompany(e.target.value)} id='company' className='form-control' placeholder='Apple' />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="" className="form-label">Date</label>
                                <div className="input-group d-flex">
                                    <input type="date" name='from' id='from' value={fromdate} onChange={(e) => setFromdate(e.target.value)} className='form-control' />
                                    <span className='input-group-text'>To</span>
                                    <input type="date" name='to' value={todate} onChange={(e) => setTodate(e.target.value)} id='to' className='form-control' />
                                </div>
                                <div className="row g-5 d-flex">
                                    <div className="offset-6 col-6">
                                        <input type="checkbox" name='current' id='current' />
                                        <label className='form-label ps-3' htmlFor="current">Current</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label className='form-label' htmlFor="location">Location</label>
                                <input type="text" name='location' value={location} onChange={(e) => setLocation(e.target.value)} id='location' className='form-control' placeholder='One Apple Park Way; Cupertino , Ca 95014 , U.S.A ' />
                            </div>
                            <div className="col-md-12">
                                <label className='form-label' htmlFor="descition">Descition</label>
                                <textarea rows="5" type="text" value={descition} onChange={(e) => setDescition(e.target.value)} name='descition' id='descition' className='form-control' placeholder='Tell us  a little about  the exprience' ></textarea>
                            </div>
                            <button onClick={exprience} className="btn btn-danger w-100 mt-3">Add</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddExprience
