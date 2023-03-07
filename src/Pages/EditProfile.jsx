import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Headerthree from '../Components/Headerthree'
import { toast } from 'react-toastify';

const EditProfile = () => {
    const state = useSelector(state => state.profile);
    // console.log("edit-data", state);
    const [status, setStatus] = useState("")
    const [skills, setSkills] = useState("")
    const [company, setCompany] = useState("")
    const [website, setWebsite] = useState("")
    const [location, setLocation] = useState("")
    const [github, setGithub] = useState("")
    const [bio, setBio] = useState("");
    const navigate = useNavigate();
    async function handleCreateProfile(e) {
        e.preventDefault()
        const createProfile = {
            "status": status,
            "skills": skills,
            "company": company,
            "website": website,
            "location": location,
            "github": github,
            "bio": bio,
        };
        try {
            console.log(createProfile);
            const { data } = await axios.post("/profile", createProfile);
            console.log(data);
            toast("edited", {type:"success"})
            navigate("/dashboaraccount");
        } catch {
            return toast("Status bilan Skillsiyam ozgartiring", {type:"error"})
        }
    }

    // handleCreateProfile()
    return (
        <div>
            <Headerthree />
            <section className='pt-5'>
                <div className="container">
                    <p className='text-danger'>* = required fields</p>
                    <form>
                        <div className="row-3 gap-4 d-flex flex-wrap">
                            <div className="col-md-6">
                                <label className='form-label' htmlFor="status">Work Status</label>
                                <select name="status" defaultValue={state?.profile?.status} onChange={(e) => setStatus(e.target.value)} id="status" className='form-select'>
                                    <option value>Select your work  status</option>
                                    <option value="open to work">Open to work</option>
                                    <option value="open to hire">Open to hire</option>
                                    <option value="Looking for new oppurtunities">Looking for new opputunities</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <label className='form-lebel' htmlFor="skills">*Skills</label>
                                    <input className='form-control' defaultValue={state?.profile?.skills} onChange={(e) => setSkills(e.target.value)} type="text" name='skills' id='skills' placeholder='HTML, CSS, JS' />
                                    <p className='form-text'>Separete each skill with comma (,) </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <label className='form-label' htmlFor="company">Company</label>
                                    <input type="text" placeholder='Company' defaultValue={state?.profile?.company} onChange={(e) => setCompany(e.target.value)} className='form-control ' name='company' id='company' />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <label className='form-lebel' htmlFor="location">Location</label>
                                    <input className='form-control' defaultValue={state?.profile?.location} onChange={(e) => setLocation(e.target.value)} type="text" name='location' id='location' placeholder='One Apple Park Way; Cupertiono, CA 95014, U.S.A' />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <label className='form-label' htmlFor="website">Website</label>
                                    <input type="text" placeholder='website' defaultValue={state?.profile?.website} onChange={(e) => setWebsite(e.target.value)} className='form-control' name='website' id='website' />
                                    <p className='form-text'>You do not need to specify  https protocol </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <label className='form-label' htmlFor="github">Github user name</label>
                                    <input type="text" placeholder='github' defaultValue={state?.profile?.githubusername} onChange={(e) => setGithub(e.target.value)} className='form-control' name='github' id='github' />
                                    <p className='form-text'>You need to specify only username (without https://github.com)</p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="bio">Bio</label>
                                <textarea name="bio" id="bio" cols="30" defaultValue={state?.profile?.bio} onChange={(e) => setBio(e.target.value)} rows="5" className='form-control' placeholder='Tell us a title bit about  yourself'></textarea>
                                <p>You may say about your recent experience or what you are up to.</p>
                            </div>
                        </div>
                        <Link className='w-100 pb-5'><button onClick={handleCreateProfile} className='btn btn-danger w-100'>Create</button></Link>
                    </form>
                </div>
            </section >
        </div>
    )
}

export default EditProfile
