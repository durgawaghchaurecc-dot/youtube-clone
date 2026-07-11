import React, { useEffect, useState } from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../../Data'
import moment from 'moment'

// 1. Added curly braces around catagery to destructure props
const Feed = ({ catagery }) => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    // 2. Changed ${category} to ${catagery} to match your prop spelling
    const videoList_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&videoCategoryId=${catagery}&key=${API_KEY}`;
    
    // 3. Fixed typos in the fetch stream response handling
    await fetch(videoList_url)
      .then(response => response.json())
      .then(data => setData(data.items || []))
  }

  useEffect(() => {
    fetchData();
  }, [catagery])

  return (
    <div className="feed">
      {data.map((item, index) => {
        return (
          <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card' key={index}>
            {/* Dynamic data from the YouTube API */}
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default Feed