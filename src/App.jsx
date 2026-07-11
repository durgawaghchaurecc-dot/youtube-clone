import React, { useState } from 'react'
import Navbar from './Components/Navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import MobileNav from './Components/MobileNav/MobileNav'

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='/video/:catageryId/:videoId' element={<Video/>}/>
        
        {/* Placeholder routes for search and bottom nav */}
        <Route path='/search/:query' element={<div style={{padding: '20px', paddingTop: '80px', textAlign: 'center'}}><h2>Search Results Page</h2></div>}/>
        <Route path='/shorts' element={<div style={{padding: '20px', paddingTop: '80px', textAlign: 'center'}}><h2>Shorts Page Coming Soon</h2></div>}/>
        <Route path='/subscriptions' element={<div style={{padding: '20px', paddingTop: '80px', textAlign: 'center'}}><h2>Subscriptions Page Coming Soon</h2></div>}/>
        <Route path='/you' element={<div style={{padding: '20px', paddingTop: '80px', textAlign: 'center'}}><h2>Your Profile Page Coming Soon</h2></div>}/>
      </Routes>

      <MobileNav/>
    </div>
  )
}

export default App