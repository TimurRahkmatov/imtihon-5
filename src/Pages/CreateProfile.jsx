import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Headertwo from '../Components/Headertwo';
import { profileGet } from '../redux/actions';

const CreateProfile = () => {
    const dispatch = useDispatch();

    const [status, setStatus] = useState("")
    const [skills, setSkills] = useState("")
    const [company, setCompany] = useState("")
    const [website, setWebsite] = useState("")
    const [location, setLocation] = useState("")
    const [github, setGithub] = useState("")
    const [bio, setBio] = useState("");
    const navigate = useNavigate()
    async function handleCreateProfile(e) {
        e?.preventDefault();
        const createProfile = {
            "status": status,
            "skills": skills,
            "company": company,
            "website": website,
            "location": location,
            "github": github,
            "bio": bio
        };
        try {
            const { data } = await axios.post("/profile", createProfile)
            dispatch(profileGet(data))
            toast("Created profile", { type: "success" })
            navigate("/dashboaraccount")
        }catch {
            return toast("status bilan skills toldiring" , {type:"error"})
        }
    }
    // handleCreateProfile()
    return (
        <div>
            <Headertwo />
            <section className='pt-5'>
                <div className="container">
                    <p className='text-danger'>* = required fields</p>
                    <form onSubmit={handleCreateProfile}>
                        <div className="row-3 gap-4 d-flex align-items-center flex-wrap">
                            <div className="col-md-6">
                                <label className='form-label' htmlFor="status">Work Status</label>
                                <select name="status" value={status} onChange={(e) => setStatus(e.target.value)} id="status" className='form-select'>
                                    <option value>Select your work  status</option>
                                    <option value="open to work">Open to work</option>
                                    <option value="open to hire">Open to hire</option>
                                    <option value="Looking for new oppurtunities">Looking for new opputunities</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <label className='form-lebel' htmlFor="skills">*Skills</label>
                                    <input className='form-control' type="text" name='skills' id='skills' value={skills} onChange={(e) => setSkills(e.target.value)} placeholder='HTML, CSS, JS' />
                                    <p className='form-text'>Separete each skill with comma (,) </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <label className='form-label' htmlFor="company">Company</label>
                                    <input type="text" placeholder='Company' className='form-control ' value={company} onChange={(e) => setCompany(e.target.value)} name='company' id='company' />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <label className='form-lebel' htmlFor="location">Location</label>
                                    <input className='form-control' type="text" name='location' id='location' value={location} onChange={(e) => setLocation(e.target.value)} placeholder='One Apple Park Way; Cupertiono, CA 95014, U.S.A' />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <label className='form-label' htmlFor="website">Website</label>
                                    <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder='website' className='form-control' name='website' id='website' />
                                    <p className='form-text'>You do not need to specify  https protocol </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <label className='form-label' htmlFor="github">Github user name</label>
                                    <input type="text" value={github} onChange={(e) => setGithub(e.target.value)} placeholder='github' className='form-control' name='github' id='github' />
                                    <p className='form-text'>You need to specify only username (without https://github.com)</p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="bio">Bio</label>
                                <textarea name="bio" value={bio} onChange={(e) => setBio(e.target.value)} id="bio" cols="30" rows="5" className='form-control' placeholder='Tell us a title bit about  yourself'></textarea>
                                <p>You may say about your recent experience or what you are up to.</p>
                            </div>
                        </div>
                        <button className='btn btn-danger w-100 my-4' type='submit'>Create</button>
                    </form>
                </div>
            </section >
        </div >
    )
}

export default CreateProfile
