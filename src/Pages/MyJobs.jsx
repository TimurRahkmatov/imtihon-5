import React from 'react'
import Headertwo from '../Components/Headertwo'

const MyJobs = () => {
  return (
    <div>
      <Headertwo />
      <section className='mt-5'>
        <div className="container">
            <h2 className='fs-1'>Do you want to create a job opportunities?</h2>
            <p>Enter necessary details and submit</p>
            <form className='d-flex flex-column gap-2'>
                <label htmlFor="">Job title</label>
                <input type="text" className='form-control' placeholder='Senior React Developer' />
                <label htmlFor="description">Job description</label>
                <textarea className='form-control' name="description" id="description" cols="25" rows="5" placeholder='Tell a tittle bit about job  requirements and benefits'></textarea>
                <button type='submit' className='btn btn-danger'>Submit</button>
            </form>
            <h2 className='mt-3'>Jobs you posted</h2>
        </div>
      </section>
    </div>
  )
}

export default MyJobs
