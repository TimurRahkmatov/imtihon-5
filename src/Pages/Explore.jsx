import React, { useEffect, useState } from 'react'
import Headertwo from '../Components/Headertwo'
import { Navigate, Link, useParams } from 'react-router-dom';
import { localtoken } from './../constains/index';
import useGetdate from './../Hooks/useGetdate';
import "../styles/explore.css"
import axios from 'axios';
import { toast } from 'react-toastify';

const Explore = () => {
  const [refresh, setRefresh] = useState()
  
  const [count,setCount]=useState()
  let token = localStorage.getItem(localtoken)
  const { id } = useParams()
  const { data, Loading, isError, error,mutateAsync } = useGetdate("/jobs");
  if (Loading) {
    return (
      <h1>Loading...</h1>
    )
  }
  async function userLike(id) {
    try {
      const { data } = await axios.put(`/jobs/like/${id}`)
      await mutateAsync();
      console.log(data)
      toast("liked" , {type:"success"})
    } catch {
      return toast("uji like qilingan", {type:"error"})
    }
  }

  async function userDisleked(id) {
    try {
      const { data } = await axios.put(`/jobs/unlike/${id}`)
      await mutateAsync();
      console.log(data);
      toast("Disliked", { type: "success" })
    } catch {
      return toast("Like hali qilinmagan", {type:"error"})
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

  return token ? (
    <div>
      <Headertwo />
      <section className='pt-5 btnewkjn'>
        <div className="container">
          <h2 className='fs-1 mt-2 py-4'>Find the best opportunities...</h2>
          <div className="alohida d-flex flex-column gap-5">
            {data?.map((item) => (
              <div key={item._id} className="cardewrew gap-1 justify-content-between px-5 d-flex">
                <Link to={`/explore-details/${item._id}`} className='text-decoration-none text-dark '>
                  <div className="por">
                    <h2 >{item.title}</h2>
                    <p>{item.description}</p>
                    <p>By:{item.name}</p>
                    <p>{item.date}</p>
                  </div>
                </Link>
                <Link to={`/explore-details/${item?._id}`}><div className='por-3'></div></Link>
                <div className="por-2 d-flex justify-content-between">
                  <div className='d-flex jg gap-2 align-items-center'>
                    <div className="btns d-flex flex-column gap-2 align-items-center">
                      <button onClick={() => {
                        userLike(item._id)
                        setCount(state=>state+1)
                      }} className='d-flex gap-1 justify-content-center align-items-center  btn btn-primary'><i className="fa-solid fa-thumbs-up"></i><div className='dumaloq text-dark d-flex align-items-center justify-content-center'>{item.likes.length}</div></button>
                      <button onClick={() => userDisleked(item?._id)} className='btn btn-secondary'><i className="fa-solid fa-thumbs-down "></i></button>
                      <button className='btn btn-success d-flex align-items-center justify-content-center gap-1'><i className="fa-solid fa-graduation-cap justify-content-center align-items-center"></i><div className="dumaloq text-dark d-flex justify-content-center align-items-center">{item?.applicants.length}</div></button>
                    </div>
                    <div className="already">
                      <button onClick={() => userApply(item?._id)} className='btn alreadyr btn-danger m-auto'><i className="fa-solid fa-plus"></i>Apply</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >
    </div >
  ) : <Navigate to='/login' />
}

export default Explore
