import React, { useState } from 'react';

import { TransitionLink } from 'gatsby-plugin-transition-link/components/TransitionLink';


import ScrollMenu from 'react-horizontal-scrolling-menu';


import './casestudiesslider.scss';

const CaseStudy = ({
    caseStudy
}) => {

    return (
        <div
            className={`caseStudy`}
        >
            <img
                src={caseStudy.sliderImage ? caseStudy.sliderImage.url : caseStudy.lDeviceImage.url}
            />
            <TransitionLink
                to={`/our-people/${caseStudy.slug}`}
                className="caseStudy__link"
                exit={{
                  length: 0.4,
                  state: { x: typeof window !== 'undefined' ? -window.innerWidth : 0, opacity: 0 }
                }}
                entry={{
                  delay: 0.6,
                  state: { x: typeof window !== 'undefined' ? window.innerWidth : 0 }
                }}
            >
                <h6>
                    CASE STUDY
                </h6>
                <h2>
                    {caseStudy.title}
                </h2>
            </TransitionLink>  
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

const CaseStudiesSlider = ({
    caseStudies
}) => {

    let menuData = caseStudies.map((caseStudy) => (
        <CaseStudy 
            key={caseStudy.node.id}
            caseStudy={caseStudy.node}
        />
    ))

    return (
        <div
            className={`caseStudiesSlider`}
        >
            <h4>
                Case Studies
            </h4>
            <div style={{width: '100%'}}>
                <ScrollMenu 
                    data={menuData}
                    wheel={false}
                    alignCenter={true}
                    scrollBy={1}
                    arrowRight={<ScrollForward />}
                />
            </div>
        </div>
    );
}

export default CaseStudiesSlider;