import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import axios from 'axios';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const App = () => {

    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    const onChildSubmit= (data)=>{
        const KEY = "AIzaSyBW2jd0RMB3bSFZyPDa3zMDya1siYLGqCU"
        axios.get("https://www.googleapis.com/youtube/v3/search",{
            params:{
                part: 'snippet', 
                type: 'video',
                maxResults: 5,
                key: KEY,
                q:data,
            }

        })
        .then(resp=>{
            setVideos(resp.data.items)
            setSelectedVideo(null) 
        })
    }

    const onVideoSelect = (video) =>{
        setSelectedVideo(video)
    }

    return (
        <>
            <SearchBar onSubmit={onChildSubmit}/>

            {videos.length === 0 && <div className='ui container segment'>Waiting for your selection...</div>}


            <div className='ui container'>
            <div className='ui grid'>
                <div className='ui row'>
                    {/* first condition */}
                {selectedVideo && <><div className='eleven wide column'>
                     <VideoDetail video = {selectedVideo} /> 
                    </div>
                    <div className='five wide column'>
                        <VideoList 
                        videos={videos}
                        onSelect = {onVideoSelect}
                        />
                    </div></>}
                    {/* second condition */}
                {!selectedVideo && <>
                    <div className='ui container'>
                        <VideoList 
                        videos={videos}
                        onSelect = {onVideoSelect}
                        />
                    </div></>}

                    </div>
            </div>
            </div>
        </>
    );
}
 

export default App;