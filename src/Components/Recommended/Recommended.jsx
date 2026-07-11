import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { value_converter, API_KEY } from '../../Data'
import { Link } from 'react-router-dom';

const Recommended = ({ catageryId }) => {

    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        const relatedVideo_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=${catageryId}&key=${API_KEY}`;
        await fetch(relatedVideo_url)
            .then(res => res.json())
            .then(data => setApiData(data.items || []))
    }

    useEffect(() => {
        fetchData();
    }, [catageryId])

    return (
        <div className='recommended'>
            {apiData.map((item, index) => {
                return (
                    <Link to={`/video/${item.snippet.catageryId}/${item.id}`} key={index} className="side-video-list">
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <div className="vid-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{value_converter(item.statistics.viewCount)} Views</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Recommended