import React, { useState } from 'react'
import "./Navbar.css"
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link, useNavigate } from 'react-router-dom'

// Changed component name to start with an uppercase 'N'
const Navbar = ({setSidebar}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`)
    }
  }

  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
          <img 
            className='menu-icon' 
            onClick={() => setSidebar(prev => prev === false ? true : false)} 
            src={menu_icon} 
            alt='Menu'
          />
          <Link to='/'><img className='logo' src={logo} alt='Logo' /></Link>
        </div>
        
        <form onSubmit={handleSearchSubmit} className="nav-middle flex-div">
            <div className="search-box flex-div">
              <input 
                type="text" 
                placeholder='search' 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <img 
                src={search_icon} 
                alt="Search" 
                onClick={handleSearchSubmit}
                style={{ cursor: 'pointer' }}
              />  
            </div>
        </form>
        
        <div className="nav-right flex-div">
            <img src={upload_icon} alt="Upload" />
            <img src={more_icon} alt="More" />
            <img src={notification_icon} alt="Notifications" />
            <Link to='/you'>
              <img src={profile_icon} className='user-icon' alt="Profile" />
            </Link>
        </div>
    </nav>
  )
}

export default Navbar