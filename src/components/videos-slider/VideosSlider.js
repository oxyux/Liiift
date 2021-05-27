import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';


import ScrollMenu from 'react-horizontal-scrolling-menu';


import './videosSlider.scss';
import useWindowSize from '../utils/useWindowResize';

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
                preload="none"
                
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
                <h4>{videoHearFrom.title ? person : ''}</h4>
                <div>
                    {videoHearFrom.title}
                </div>
            </div>
        </div>
    );
}

const ScrollForward = ({
    onClick,
    disabled
}) => (
    <button
        className="scrollForwardArrow"
        onClick={onClick}
        disabled={disabled}
    >
        <svg xmlns="http://www.w3.org/2000/svg"  fill="var(--main-color-peach)" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
    </button>
)

const ScrollBack = ({
    onClick,
    disabled
}) => (
    <button
        className="scrollBackArrow"
        onClick={onClick}
        disabled={disabled}
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="var(--main-color-peach)" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
    </button>
)

const ScrollSlider = ({
    videos,
    person
}) => {
    // Width to measure the offset
    const { width, height } = useWindowSize();

    const setUpStepWidth = (w) => {
        let stepW = '';

        if (w < 768) {
            stepW = 290;
        } else if (w >= 768 && w < 1024) {
            stepW = 760;
        } else {
            stepW = 1130;
        }

        return stepW;
    }

    // Local state
    const [step, setStep] = useState(setUpStepWidth(width));
    const [arrayLength, setArrayLength] = useState(videos && videos.length)
    const [offset, setOffset] = useState(0);

    const handleScrollForwards = () => {
        setOffset(of => of - step)
    }

    const handleScrollBackwards = () => {
        setOffset(of => of + step)
    }


    useEffect(() => {
        let newStep = setUpStepWidth(width);
       
        setStep(oldStep => {
            if (oldStep === newStep) {
                return oldStep
            } else {
                setOffset(off => {        
                    if (off === 0) {
                        return 0;
                    } else {
                        let diff = newStep / oldStep;     
                        return off * diff
                    }
                })
                return newStep;
            }
        })
        
    }, [width]);



    return (
        <div
            className="scrollSlider"
        >
            <div 
                className="scrollSlider__outer"
            >
                <div
                    className="scrollSlider__inner"
                    style={{
                        transform: `translate3D(${offset}px, 0px, 0px)`
                    }}
                >
                    {
                        videos.map(videoHearFrom => (
                            <VideoHearFrom
                                key={videoHearFrom.id}
                                videoHearFrom={videoHearFrom}
                                person={person}
                            />
                        ))
                    }
                </div>
            </div>
            <ScrollBack 
                onClick={handleScrollBackwards}
                disabled={offset + step > 0}
            />
            <ScrollForward 
                onClick={handleScrollForwards}
                disabled={Math.abs(offset - step) === arrayLength * step}
            />
        </div>
    )
}

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
            <div
                className={`videosSlider__svgDiv`}
            >
                <svg 
                    className={`videosSlider__svg`}
                    version="1.1" 
                    viewBox="0 0 640 565.35" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.path 
                        className={`lDeviceVideoHearFrom__svg__L_Path`}
                        clipPath="url(#lDeviceVideoHearFrom__svg__L_clipPath)"
                        d="m650.32 534.32c-694.4-2.5857-645.15 96.734-612.83-509.4" 
                        stroke={"#ffa6ab"}
                        strokeWidth="190.5"
                        strokeLinecap="butt"
                        strokeLinejoin="round"
                        strokeMiterlimit="4"
                        fill="none"
                        initial={{ pathLength: 0, pathOffset: 1 }}
                        animate={{ pathLength: 1, pathOffset: 0 }}
                        transition={{ duration: 1.5 }}
                    />
                    <clipPath
                        id="lDeviceVideoHearFrom__svg__L_clipPath"
                    >
                        <path 
                            d="m5.0455 41.04v524.31h639.57v-96.8h-533.1v-427.51z"
                        />
                    </clipPath>
                </svg>
            </div>
            <ScrollSlider 
                videos={videos}
                person={person}
            />
        </div>
    );
}

export default VideosSlider;