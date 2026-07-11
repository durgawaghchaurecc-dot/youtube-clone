import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'


const Home = ({ sidebar }) => {

  const [catagery, setCatagery] = useState(0);
  return (
    <>
   
      <Sidebar sidebar={sidebar} catagery={catagery} setCatagery={setCatagery}/>
      
     
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed catagery={catagery}/>
      </div>
    </>
  )
}

export default Home