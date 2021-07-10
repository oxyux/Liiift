import React from 'react';

import { motion } from "framer-motion";

import './ldevicemain.scss'

const LDeviceMain = ({
    lDeviceTitle,
    lDeviceImage,
    altText
}) => {

    return (
        <div
            className={`lDeviceMain__container`}
        >
            <div
                className={`lDeviceMain__svgImgWrapper`}
            >
                <div
                    className={`lDeviceMain__svgDiv`}
                >
                    <svg 
                        className={`lDeviceMain__svg`}
                        version="1.1" 
                        viewBox="0 0 1300 565.35" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.g 
                            className={`lDeviceMain__svg__iPoints_Group`}
                            transform="translate(-520)" 
                            fill="#ffa6ab"
                            initial={{ opacity :0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 2 }}
                        >
                            <path 
                                d="m823.89 0c28.55 0 50.82 20 50.82 49.1s-22.27 49.11-50.82 49.11-50.81-20-50.81-49.11 22.27-49.1 50.81-49.1"
                            />
                            <path 
                                d="m968.31 0c28.55 0 50.82 20 50.82 49.1s-22.27 49.11-50.82 49.11-50.82-20-50.82-49.11 22.27-49.1 50.82-49.1" 
                            />
                            <path 
                                d="m1113.1 0c28.55 0 50.82 20 50.82 49.1s-22.27 49.11-50.82 49.11-50.81-20-50.81-49.11 22.26-49.1 50.81-49.1"
                            />
                        </motion.g>
                        <motion.g
                            className={`lDeviceMain__svg__iBodies_Group`}
                            fill="#ffa6ab"
                            initial={{ opacity :0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 2.1 }}
                        >
                            <rect 
                                x="253.08" y="165.26" 
                                width="101.63" height="266.91" 
                            />
                            <rect 
                                x="397.85" y="165.26" 
                                width="101.64" height="266.91" 
                            />
                            <rect 
                                x="542.98" y="165.26" 
                                width="101.64" height="266.91" 
                            />
                        </motion.g>
                        <motion.path 
                            className={`lDeviceMain__svg__L_Path`}
                            clipPath="url(#lDeviceMain__svg__L_clipPath)"
                            d="M 650.31945,534.32082 C -44.084001,531.73508 5.1715261,631.05501 37.493566,24.925469"
                            stroke="#00384a"
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
                            id="lDeviceMain__svg__L_clipPath"
                        >
                            <path 
                                d="m5.0455 41.04v524.31h639.57v-96.8h-533.1v-427.51z" 
                            />
                        </clipPath>
                        <motion.g 
                            className={`lDeviceMain__svg__ft_Group`}
                            transform="translate(-520)"
                            initial={{ opacity :0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 2 }}
                        >
                            <path 
                                d="m1820.5 247.53v-82.27h-109.7v-124.26h-101.63v124.26h-204.89v-58.08c0-16.13 8.07-24.2 22.59-24.2h69.37v-82.27h-104.86c-53.24 0-88.73 35.49-88.73 90.34v74.21h-101.62v82.27h101.64v317.82h101.63v-317.82h204.89v227.47c0 54.85 35.49 90.35 88.73 90.35h112.91v-82.28h-77.44c-14.52 0-22.59-8.07-22.59-24.2v-211.34z" 
                                fill="#00384a"
                            />
                        </motion.g>
                    </svg>
                </div>
                <motion.div
                    className={`lDeviceMain__imgDiv`}
                    initial={{ translateY: 30, opacity :0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <img
                        src={lDeviceImage.url}
                        alt={altText ? altText : lDeviceImage.fileName}
                    />
                </motion.div>
                <motion.div
                    className={`lDeviceMain__titleDiv`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.8 }}
                >
                    {lDeviceTitle}
                </motion.div>
            </div>
        </div>
    );
}

export default LDeviceMain