import React from 'react';

import { motion } from "framer-motion";

import './ldevicecasestudy.scss'

const LDeviceCaseStudy = ({
    lDeviceTitle,
    lDeviceImage,
    lColor,
    altText
}) => {

    return (
        <div
            className={`lDeviceCaseStudy__container`}
        >
            <div
                className={`lDeviceCaseStudy__svgImgWrapper`}
            >
                <div
                    className={`lDeviceCaseStudy__svgDiv`}
                >
                    <svg 
                        className={`lDeviceCaseStudy__svg`}
                        version="1.1" 
                        viewBox="0 0 640 565.35" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.path 
                            className={`lDeviceCaseStudy__svg__L_Path`}
                            clipPath="url(#lDeviceCaseStudy__svg__L_clipPath)"
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
                            id="lDeviceCaseStudy__svg__L_clipPath"
                        >
                            <path 
                                d="m5.0455 41.04v524.31h639.57v-96.8h-533.1v-427.51z"
                            />
                        </clipPath>
                    </svg>
                </div>
                <motion.div
                    className={`lDeviceCaseStudy__imgDiv`}
                    initial={{ translateY: 30, opacity :0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.25 }}
                >
                    <img
                        src={lDeviceImage.url}
                        alt={altText ? altText : lDeviceImage.fileName}
                    />
                </motion.div>
                <motion.div
                    className={`lDeviceCaseStudy__titleDiv`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.75 }}
                >
                    <div
                        style={{
                            color: 'var(--main-color-peach)'
                        }}
                    >
                        Case Study:
                    </div>
                    <div
                        style={{
                            color: 'var(--main-color-dark)'
                        }}
                        dangerouslySetInnerHTML={{
                            __html: lDeviceTitle
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default LDeviceCaseStudy