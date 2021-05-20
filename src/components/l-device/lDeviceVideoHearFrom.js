import React, { useRef, useState } from 'react';

import { motion } from "framer-motion";

import './ldevicevideoHearFrom.scss'

const LDeviceVideoHearFromHearFrom = ({
    videoHearFrom,
    person,
    lColor
}) => {
    const [isTitleVisible, setTitleVisible] = useState(true);
    const [showControls, setShowControls] = useState(false);
    let videoRef = useRef(null)

    return (
        <div
            className={`lDeviceVideoHearFrom__container`}
        >
            <div
                className={`lDeviceVideoHearFrom__svgImgWrapper`}
            >
                <div
                    className={`lDeviceVideoHearFrom__svgDiv`}
                >
                    <svg 
                        className={`lDeviceVideoHearFrom__svg`}
                        version="1.1" 
                        viewBox="0 0 640 565.35" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.path 
                            className={`lDeviceVideoHearFrom__svg__L_Path`}
                            clipPath="url(#lDeviceVideoHearFrom__svg__L_clipPath)"
                            d="m650.32 534.32c-694.4-2.5857-645.15 96.734-612.83-509.4" 
                            stroke={lColor ? lColor : "#ffa6ab"}
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
                <motion.div
                    initial={{ translateY: 30, opacity :0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.25 }}
                >
                <div
                    className={`lDeviceVideoHearFrom__videoHearFrom`}
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
                        className={`lDeviceVideoHearFrom__videoHearFrom__titleDiv ${isTitleVisible ? 'lDeviceVideoHearFrom__videoHearFrom__titleDiv--visible' : 'lDeviceVideoHearFrom__videoHearFrom__titleDiv-hidden'}`}
                        onClick={() => videoRef.current && videoRef.current.play()}
                    >
                        <div>
                        {person}: {videoHearFrom.title}
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" className="lDeviceVideoHearFrom__videoHearFrom__titleDiv__playSVG" viewBox="0 0 16 16">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                        </svg>
                    </div>
                </div>
                </motion.div>
            </div>
        </div>
    );
}

export default LDeviceVideoHearFromHearFrom;