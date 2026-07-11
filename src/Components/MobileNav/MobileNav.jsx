import React from 'react'
import './MobileNav.css'
import { NavLink } from 'react-router-dom'
import home_icon from '../../assets/home.png'
import profile_icon from '../../assets/jack.png'

const MobileNav = () => {
  return (
    <div className="mobile-bottom-nav">
        <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <img src={home_icon} alt="Home" />
            <p>Home</p>
        </NavLink>

        <NavLink to="/shorts" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M10 14.65v-5.3L15 12l-5 2.65M17.77 10.3c-.77-.32-1.2-.5-1.2-.5L18 8.7c1.47-.93 1.94-2.83 1.05-4.3a3.17 3.17 0 0 0-4.36-1.06L5.3 9.4c-1.47.93-1.94 2.83-1.05 4.3.5.8 1.32 1.27 2.2 1.27.4 0 .8-.1 1.17-.3l1.2-.5-.44 1.1c-.92 2.3 0 4.96 2.13 6.06a3.17 3.17 0 0 0 4.36-1.06l9.38-5.96c1.47-.93 1.94-2.84 1.05-4.3-.33-.53-.87-.88-1.48-1.07z"/>
            </svg>
            <p>Shorts</p>
        </NavLink>

        <div className="nav-item add-btn" onClick={() => alert('Upload feature coming soon!')}>
            <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
            </svg>
        </div>

        <NavLink to="/subscriptions" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M20 7H4v10h16V7zm2-2c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h2V3h16v2h2zm-12 9V9l5 2.5-5 2.5z"/>
            </svg>
            <p>Subscriptions</p>
        </NavLink>

        <NavLink to="/you" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <img src={profile_icon} alt="You" className="nav-profile-pic" />
            <p>You</p>
        </NavLink>
    </div>
  )
}

export default MobileNav