import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Explore from "./Pages/Explore";
import Login from './Pages/Login'
import Registar from './Pages/Registar'
import Dashboard from './Pages/Dashboard'
import MyJobs from './Pages/MyJobs'
import PageNotFound from './Pages/PageNotFound';
import CreateProfile from './Pages/CreateProfile'
 
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
      </Routes>
    </div>
  )
}

export default App
