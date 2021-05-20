import React, { useRef, useState } from 'react';


import ScrollMenu from 'react-horizontal-scrolling-menu';


import './videosSlider.scss';

const VideoHearFrom= ({
    videoHearFrom,
    person
}) => {
    const [isTitleVisible, setTitleVisible] = useState(true);
    const [showControls, setShowControls] = useState(false);
    let videoRef = useRef(null)

    return (
        <div
            className={`videoHearFrom`}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
        >
            <video
                ref={videoRef}
                controls={showControls}
                poster={videoHearFrom.thumbnailPicture ? videoHearFrom.thumbnailPicture.url : null}
                onPlay={() => setTitleVisible(false)}
                onPause={() => setTitleVisible(true)}
                
            >
                <source
                    src={videoHearFrom.videoAsset.url}
                    itemType={videoHearFrom.videoAsset.mimeType}
                />
            </video>
            <div
                className={`videoHearFrom__titleDiv ${isTitleVisible ? 'videoHearFrom__titleDiv--visible' : 'videoHearFrom__titleDiv-hidden'}`}
                onClick={() => videoRef.current && videoRef.current.play()}
            >
                <h4>{person}</h4>
                <div>
                    {videoHearFrom.title}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" className="videoHearFrom__titleDiv__playSVG" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                </svg>
            </div>
        </div>
    );
}

const ScrollForward = () => (
    <button
        className="scrollForwardArrow"
    >
        <svg xmlns="http://www.w3.org/2000/svg"  fill="var(--main-color-peach)" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
    </button>
)

const ScrollBack = () => (
    <button
        className="scrollBackArrow"
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="var(--main-color-peach)" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
    </button>
)

const VideosSlider = ({
    videos,
    person
}) => {

    let menuData = videos.map((videoHearFrom) => (
        <VideoHearFrom
            key={videoHearFrom.id}
            videoHearFrom={videoHearFrom}
            person={person}
        />
    ))

    return (
        <div
            className={`videosSlider`}
        >
            <div style={{width: '100%'}}>
                <ScrollMenu 
                    data={menuData}
                    wheel={false}
                    alignCenter={true}
                    scrollBy={1}
                    arrowRight={<ScrollForward />}
                    arrowLeft={<ScrollBack />}
                    dragging={false}
                />
            </div>
        </div>
    );
}

export default VideosSlider;