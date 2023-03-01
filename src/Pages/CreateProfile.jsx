import React from 'react'
import { Link } from "react-router-dom";
import Headertwo from '../Components/Headertwo';

const CreateProfile = () => {
    return (
        <div>
            <Headertwo />
            <section className='pt-5'>
                <div className="container">
                    <p className='text-danger'>* = required fields</p>
                    <form>
                        <div className="row-3 gap-4 d-flex flex-wrap">
                            <div className="col-md-6">
                                <label className='form-label' htmlFor="status">Work Status</label>
                                <select name="status" id="status" className='form-select'>
                                    <option value>Select your work  status</option>
                                    <option value="open to work">Open to work</option>
                                    <option value="open to hire">Open to hire</option>
                                    <option value="Looking for new oppurtunities">Looking for new opputunities</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <label className='form-lebel' htmlFor="skills">*Skills</label>
                                    <input className='form-control' type="text" name='skills' id='skills' placeholder='HTML, CSS, JS' />
                                    <p className='form-text'>Separete each skill with comma (,) </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <label className='form-label' htmlFor="company">Company</label>
                                    <input type="text" placeholder='Company' className='form-control' name='company' id='company' />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <label className='form-lebel' htmlFor="location">Location</label>
                                    <input className='form-control' type="text" name='location' id='location' placeholder='One Apple Park Way; Cupertiono, CA 95014, U.S.A' />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <label className='form-label' htmlFor="website">Website</label>
                                    <input type="text" placeholder='website' className='form-control' name='website' id='website' />
                                    <p className='form-text'>You do not need to specify  https protocol </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <label className='form-label' htmlFor="github">Github user name</label>
                                    <input type="text" placeholder='github' className='form-control' name='github' id='github' />
                                    <p className='form-text'>You need to specify only username (without https://github.com)</p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="bio">Bio</label>
                                <textarea name="bio" id="bio" cols="30" rows="5" className='form-control' placeholder='Tell us a title bit about  yourself'></textarea>
                                <p>You may say about your recent experience or what you are up to.</p>
                            </div>
                            <Link className='w-100 pb-5' to='dashboard'><button className='btn btn-danger w-100'>Create</button></Link>
                        </div>
                    </form>
                </div>
            </section >
        </div >
    )
}

export default CreateProfile
