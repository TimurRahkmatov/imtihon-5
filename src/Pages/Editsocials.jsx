import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Headerthree from '../Components/Headerthree'
import { useDispatch, useSelector } from 'react-redux';
import { profilesocial } from '../redux/actions';

const Editsocials = () => {
    const dispatch = useDispatch()
    const [facebook, setFacebook] = useState("")
    const [instagram, setInstagram] = useState("")
    const [twitter, setTwitter] = useState("")
    const [youtube, setYoutube] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const navigate = useNavigate()
    async function EditSocial(e) {
        e?.preventDefault()
        const ummumiyvalues = {
            "facebook": facebook,
            "instagram": instagram,
            "twitter": twitter,
            "youtube": youtube,
            "linkedin": linkedin,

        }
        const { data } = await axios.put('profile/socials', ummumiyvalues)
        dispatch(profilesocial(data))
        // console.log(arr);
        console.log(data)
        navigate("/dashboaraccount")
    }
    // SocialsProfile()
    // EditSocial()
    return (
        <div>
            <Headerthree />
            <section className="jdfsgljf">
                <div className="container">
                    <Link to='/dashboaraccount'><button className="btn btn-danger mt-5">Back to Dashboard </button></Link>
                    <h2 className='mt-5'>Your Social Links</h2>
                    <form className='mt-4' >
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="facebook" className='form-label'>Facebook</label>
                                <input className='form-control' type="url" name='facebook' defaultValue={facebook} onChange={(e) => setFacebook(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="imstagram" className='form-label'>instagram</label>
                                <input className='form-control' value={instagram} onChange={(e) => setInstagram(e.target.value)} type="url" name='imstagram' />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="twitter" className='form-label'>Twitter</label>
                                <input className='form-control' value={twitter} onChange={(e) => setTwitter(e.target.value)} type="url" name='twitter' />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="youtube" className='form-label'>You tube</label>
                                <input className='form-control' value={youtube} onChange={(e) => setYoutube(e.target.value)} type="url" name='youtube' />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="linkedin" className='form-label'>Linkedin</label>
                                <input className='form-control' value={linkedin} onChange={(e) => setLinkedin(e.target.value)} type="url" name='linkedin' />
                            </div>
                            <div className="col-md-6 d-flex">
                                <button onClick={EditSocial} className="btn btn-danger w-100 mt-auto ">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Editsocials
