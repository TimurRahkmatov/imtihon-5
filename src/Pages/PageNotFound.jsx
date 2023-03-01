import React from 'react'
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div>
      <h1>Sorry, page you are looking for is not found </h1>
      <h3>Back to home <Link to='/dashboard'><i className="fa-solid fa-arrow-left"></i></Link></h3>
    </div>
  )
}

export default PageNotFound;
