import React from 'react'
import './sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'


const sidebar = ({sidebar,catagery,setCatagery}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="shortcut-list">
            <div className={`side-link ${catagery===0?"active":""}`} onClick={()=>setCatagery(0)}>
                <img src={home} alt="" /><p>Home</p>
            </div>

            <div className={`side-link ${catagery===20?"active":""}`} onClick={()=>setCatagery(20)}>
                <img src={game_icon} alt="" /><p>Game_icon</p>
            </div>

            <div className={`side-link ${catagery===2?"active":""}`} onClick={()=>setCatagery(2)}>
                <img src={automobiles} alt="" /><p>Automobiles</p>
            </div>

            <div className={`side-link ${catagery===17?"active":""}`} onClick={()=>setCatagery(17)}>
                <img src={sports} alt="" /><p>Aports</p>
            </div>

            <div className={`side-link ${catagery===24?"active":""}`} onClick={()=>setCatagery(24)}>
                <img src={entertainment} alt="" /><p>Entertainment</p>
            </div>

            <div className={`side-link ${catagery===28?"active":""}`} onClick={()=>setCatagery(28)}>
                <img src={tech} alt="" /><p>Technology</p>
            </div>

            <div className={`side-link ${catagery===10?"active":""}`} onClick={()=>setCatagery(10)}>
                <img src={music} alt="" /><p>Music</p>
            </div>

            <div className={`side-link ${catagery===22?"active":""}`} onClick={()=>setCatagery(22)}>
                <img src={blogs} alt="" /><p>Blogs</p>
            </div>

            <div className={`side-link ${catagery===25?"active":""}`} onClick={()=>setCatagery(25)}>
                <img src={news} alt="" /><p>News</p>
            </div>
        </div>
        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-link">
                <img src={jack} alt="" /><p>Me</p>
            </div>

            <div className="side-link">
                <img src={simon} alt="" /><p>MrBeast</p>
            </div>

            <div className="side-link">
                <img src={tom} alt="" /><p>Justin Bieber</p>
            </div>

            <div className="side-link">
                <img src={megan} alt="" /><p>5-Minutes-Crafts</p>
            </div>

            <div className="side-link">
                <img src={cameron} alt="" /><p>Nas Daily</p>
            </div>
        </div>
    </div>
  )
}

export default sidebar