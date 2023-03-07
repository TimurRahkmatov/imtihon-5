import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Headertwo from "../Components/Headertwo";
import useGetdate from "../Hooks/useGetdate";
import { localtoken } from "./../constains/index";

const MyJobs = () => {
  const [myjob, setMyjob] = useState([]);
  const [titlejob, setTitlejobe] = useState("");
  const [description, setDescription] = useState("");
  const [dataState, setDataState] = useState([]);
  const [loading, setLoading] = useState(false);
  let token = localStorage.getItem(localtoken);
  // const { data, Loading, isError, error } = useGetdate("/jobs/me");
  async function myJobdelete(id) {
    try {
      setLoading(true);
      await axios.delete(`/jobs/${id}`);
      await axios.get("/jobs/me").then((dat) => setDataState(dat.data));
      setLoading(false);
      toast("Deleted jobe", { type: "success" })
    } catch (error) {

      console.log(error);
    }
  }
  async function userLike(id) {
    try {
      setLoading(true)
      const { data } = await axios.put(`/jobs/like/${id}`)
      await axios.get("/jobs/me").then((dat) => setDataState(dat.data));
      console.log(data)
      setLoading(false)
      toast("liked", { type: "success" })
    } catch {
      return toast("uji like qilingan", { type: "error" })
    }
  }
  async function userApply(id) {
    try {
      setLoading(true)
      const { data } = await axios.post(`/jobs/apply/${id}`)
      await axios.get("/jobs/me").then((dat) => setDataState(dat.data));
      setLoading(false)
      if (data) {
        toast("Applyed!", { type: "success" })
      }
    }
    catch {
      return toast("uji aplied qilingan", { type: "error" })
    }
  }
  async function handleMyJobs(e) {
    e.preventDefault();
    const ummumiyvalues = {
      title: titlejob,
      description: description,
    };
    try {
      setLoading(true);
      await axios.post("/jobs", ummumiyvalues);
      await axios.get("/jobs/me").then((dat) => setDataState(dat.data));
      setLoading(false);
      setTitlejobe("");
      setDescription("");
      toast("Creating job", { type: "success" })
      console.log("dst", dataState);
    } catch (error) {
      setLoading(false)
      return toast("Polyani tuldiring", { type: "error" })
      console.log(error);
    }
  }
  useEffect(() => {
    axios.get("/jobs/me").then((dat) => setDataState(dat.data));
    setLoading(false);
  }, []);
  return token ? (
    <div>
      <Headertwo />
      <section className="mt-5">
        <div className="container">
          <h2 className="fs-1">Do you want to create a job opportunities?</h2>
          <p>Enter necessary details and submit</p>
          <form onSubmit={handleMyJobs} className="d-flex flex-column gap-2">
            <label htmlFor="">Job title</label>
            <input
              type="text"
              value={titlejob}
              name="title"
              onChange={(e) => setTitlejobe(e.target.value)}
              className="form-control"
              placeholder="Senior React Developer"
            />
            <label htmlFor="description">Job description</label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
              id="description"
              cols="25"
              rows="5"
              placeholder="Tell a tittle bit about job  requirements and benefits"
            ></textarea>
            <button type="submit" className="btn btn-danger">
              Submit
            </button>
          </form>
          <h2 className="mt-3">Jobs you posted</h2>
        </div>
      </section>
      <section>
        <div className="container">
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            dataState?.map((item) => (
              <div
                key={item._id}
                className="cardewrew gap-1 justify-content-between px-5 d-flex"
              >
                <Link
                  to={`/myjobview/${item._id}`}
                  className="text-decoration-none text-dark "
                >
                  <div className="por">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>By:{item.name}</p>
                    <p>{item.date}</p>
                  </div>
                </Link>
                <Link to={`/myjobview/${item._id}`}>
                  <div className="por-3"></div>
                </Link>
                <div className="por-2 d-flex justify-content-between">
                  <div className="d-flex gap-2 align-items-center">
                    <div className="btns d-flex flex-column gap-2 align-items-center">
                      <button className="d-flex gap-1 justify-content-center align-items-center  btn btn-primary">
                        <i onClick={() => userLike(item?._id)} className="fa-solid fa-thumbs-up"></i>
                        {item.likes.length}
                      </button>
                      <button onClick={() => userApply(item?._id)} className="btn btn-success">
                        <i className="fa-solid fa-graduation-cap"></i>
                      </button>
                    </div>
                    <div className="already">
                      <button
                        onClick={() => myJobdelete(item?._id)}
                        className="btn alreadyr btn-danger m-auto"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default MyJobs;
