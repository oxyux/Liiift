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
                src={caseStudy.lDeviceImage.url}
            />
            <TransitionLink
                to={`/our-people/${caseStudy.slug}`}
                className="caseStudy__link"
            >
                <h6>
                    CASE STUDY
                </h6>
                <h2>
                    {caseStudy.lDeviceTitle}
                </h2>
            </TransitionLink>  
        </div>
    );
}

const CaseStudiesSlider = ({
    caseStudies
}) => {
    const [scrollProgress, setSecrollProgress] = useState(0);

    const handleSetScrollProgress = ({ translate }) => {
        console.log(translate)
    }

    return (
        <div
            className={`caseStudiesSlider`}
        >
            <h4>
                Case Studies
            </h4>
            <div
                className={`caseStudiesSlider__container`}
            >
                <ScrollMenu 
                    data={caseStudies.map((caseStudy) => (
                        <CaseStudy 
                            key={caseStudy.node.id}
                            caseStudy={caseStudy.node}
                        />
                    ))}
                    onUpdate={handleSetScrollProgress}
                    scrollBy={1}
                />
            </div>
        </div>
    );
}

export default CaseStudiesSlider;