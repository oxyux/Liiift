import React from 'react';

import { motion } from "framer-motion";

import './ldevicepage.scss'

const LDevicePage = ({
    lDeviceTitle,
    lDeviceImage,
    lColor,
    lTitleColor
}) => {

    return (
        <div
            className={`lDevicePage__container`}
        >
            <div
                className={`lDevicePage__svgImgWrapper`}
            >
                <div
                    className={`lDevicePage__svgDiv`}
                >
                    <svg 
                        className={`lDevicePage__svg`}
                        version="1.1" 
                        viewBox="0 0 640 565.35" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.path 
                            className={`lDevicePage__svg__L_Path`}
                            clipPath="url(#lDevicePage__svg__L_clipPath)"
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
                            id="lDevicePage__svg__L_clipPath"
                        >
                            <path 
                                d="m5.0455 41.04v524.31h639.57v-96.8h-533.1v-427.51z"
                            />
                        </clipPath>
                    </svg>
                </div>
                <motion.div
                    className={`lDevicePage__imgDiv`}
                    initial={{ translateY: 30, opacity :0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.25 }}
                >
                    <img
                        src={lDeviceImage.url}
                        alt={lDeviceImage.fileName}
                    />
                </motion.div>
                <motion.div
                    className={`lDevicePage__titleDiv`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.75 }}
                    style={{
                        color: lTitleColor ? lTitleColor : 'var(--main-color-peach)'
                    }}
                >
                    {lDeviceTitle}
                </motion.div>
            </div>
        </div>
    );
}

export default LDevicePage