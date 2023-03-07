import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Explore from "./Pages/Explore";
import Login from './Pages/Login';
import Registar from './Pages/Registar';
import Dashboard from './Pages/Dashboard';
import MyJobs from './Pages/MyJobs';
import PageNotFound from './Pages/PageNotFound';
import CreateProfile from './Pages/CreateProfile'
import Explorecomment from './Pages/Explorecomment'
import Dashboarcreatepage from './Pages/Dashboarcreatepage'
import Editsocials from './Pages/Editsocials'
import EditProfile from './Pages/EditProfile';
import AddExprience from './Pages/AddExprience';
import AddEducation from './Pages/AddEducation'
import Viewprofile from './Pages/Viewprofile'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registar' element={<Registar />} /> 
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/myjobs' element={<MyJobs />} />
          <Route path='/profile' element={<CreateProfile />} />
          <Route path='*' element= {<PageNotFound />} />
          <Route path='/myjobview/:id' element={<Viewprofile />} />
          <Route path='/explore-details/:id' element={<Explorecomment />} />
          <Route path='/dashboaraccount' element={<Dashboarcreatepage />} />
          <Route path='/edit-socials' element={<Editsocials />} />
          <Route path='/edit-profile' element={<EditProfile/>} />
          <Route path='/exprience' element={<AddExprience/>} />
          <Route path='/education'  element={<AddEducation />}/>
      </Routes>
    </div>
  )
}

export default App
