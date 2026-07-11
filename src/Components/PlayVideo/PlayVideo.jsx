import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import { value_converter, API_KEY } from '../../Data'
import moment from 'moment'

const PlayVideo = ({ videoId }) => {
    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () => {
        const videoDetails_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        const res = await fetch(videoDetails_url);
        const data = await res.json();
        if (data.items && data.items.length > 0) {
            setApiData(data.items[0]);
        }
    }

    const fetchChannelAndComments = async () => {
        if (!apiData) return;

        const channelDetails_url = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        const channelRes = await fetch(channelDetails_url);
        const channelDataJson = await channelRes.json();
        if (channelDataJson.items && channelDataJson.items.length > 0) {
            setChannelData(channelDataJson.items[0]);
        }

        const comment_url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&maxResults=20&key=${API_KEY}`;
        const commentRes = await fetch(comment_url);
        const commentDataJson = await commentRes.json();
        setCommentData(commentDataJson.items || []);
    }

    useEffect(() => {
        fetchVideoData();
    }, [videoId])

    useEffect(() => {
        if (apiData) {
            fetchChannelAndComments();
        }
    }, [apiData])

    // Safety structural return: Keeps the page from crashing while API loads data
    if (!apiData) {
        return <div className='play-video'>Loading video details...</div>;
    }

    return (
        <div className='play-video'>
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            
            <h3>{apiData.snippet.title}</h3>
            
            <div className="play-video-info">
                <p>{value_converter(apiData.statistics.viewCount)} Views &bull; {moment(apiData.snippet.publishedAt).fromNow()} </p>
                <div>
                    <span><img src={like} alt="" /> {value_converter(apiData.statistics.likeCount)}</span>
                    <span><img src={dislike} alt="" /></span>
                    <span><img src={share} alt="" /> Share</span>
                    <span><img src={save} alt="" /> Save</span>
                </div>
            </div>
            <hr />
            
            <div className="publisher">
                <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="" />
                <div>
                    <p>{apiData.snippet.channelTitle}</p>
                    <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : "0"} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            
            <div className="vid-description">
                <p>{apiData.snippet.description.slice(0, 250)}...</p>
                <hr />
                <h4>{value_converter(apiData.statistics.commentCount)} Comments</h4>
                
                {commentData.map((item, index) => {
                    const comment = item.snippet.topLevelComment.snippet;
                    return (
                        <div className="comments" key={index}>
                            <img src={comment.authorProfileImageUrl} alt="" />
                            <div>
                                <h3>{comment.authorDisplayName} <span>{moment(comment.publishedAt).fromNow()}</span></h3>
                                <p>{comment.textDisplay}</p>
                                <div className="comment-action">
                                    <img src={like} alt="" />
                                    <span>{value_converter(comment.likeCount)}</span>
                                    <img src={dislike} alt="" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PlayVideo