import '../App.css';
import React, { useEffect, useRef } from 'react';
import videoFile from '../assets/testVideo.mp4';


function HomePage() {
    const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

    return (
        <div className="home-page">
            <header className="App-header">
                <p>SOURCE MATERIAL</p>
                <video ref={videoRef} src={videoFile} controls autoplay loop muted playsinLine></video>
                <p>2023</p>
            </header>
        </div>
    )
}

export default HomePage