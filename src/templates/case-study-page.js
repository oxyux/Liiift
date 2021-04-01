import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

import { motion } from "framer-motion";

import LDeviceCaseStudy from "../components/l-device/lDeviceCaseStudy"
import Footer from '../components/footer/Footer';


import '../content-general.scss';
import './case-study-page.scss';

const CaseStudyPage = ({
    data: { caseStudy },
    mount, transitionStatus, entry, exit
}) => {

    return (
        <motion.div
        className={`case-study-page_Page`}
        initial={entry.state}
        animate={
          transitionStatus === "exiting"
          ?
          exit.state 
          :
          { opacity: 1, x: 0, y: 0 }
        }
        transition={
          transitionStatus === "exiting"
          ?
          { duration: exit.length }
          :
          { duration: 0.4 }
        }
      >
        <SEO 
          title={caseStudy.title} 
          description={caseStudy.metaDescription ? caseStudy.metaDescription : ``}
        />
        <div>
          <LDeviceCaseStudy
            lDeviceImage={caseStudy.lDeviceImage}
            lDeviceTitle={caseStudy.lDeviceTitle}
          />
        </div>
        <div
          className={`case-study-page_Page__content`}
        >
          <div
            className={`pageContent__header`}
          >
            {caseStudy.header}
          </div>
          <div
            className={`pageContent__body`}
            dangerouslySetInnerHTML={{__html: caseStudy.body.html}}
          >
          </div>
          <div
            className="imgQuoteWrapper"
          >
            {
              caseStudy.bottomImage
              ?
              <div
                  className={`case-study-page__bottomImg`}
              >
                  <img 
                      src={caseStudy.bottomImage.url}
                  />
              </div>
              :
              null
            }
            {
              caseStudy.bottomQuoteBody
              ?
              <div
                  className={`case-study-page__bottomQuote`}
              >
                  <div
                      className={`case-study-page__bottomQuote__quote`}
                      dangerouslySetInnerHTML={{__html: caseStudy.bottomQuoteBody.html}}
                  />
                  <div 
                      className={`case-study-page__bottomQuote__author`}
                  >
                      {caseStudy.bottomQuoteAuthor}
                  </div>
                  <svg 
                      className={`case-study-page__bottomQuote_svg`}
                      version="1.1" 
                      viewBox="0 0 640 565.35" 
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      <motion.path 
                          className={`case-study-page__bottomQuote__L_Path`}
                          clipPath="url(#case-study-page__bottomQuote__L_clipPath)"
                          d="m650.32 534.32c-694.4-2.5857-645.15 96.734-612.83-509.4" 
                          stroke="#ffa6ab"
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
                          id="case-study-page__bottomQuote__L_clipPath"
                      >
                          <path 
                              d="m5.0455 41.04v524.31h639.57v-96.8h-533.1v-427.51z"
                          />
                      </clipPath>
                  </svg>
              </div>
              :
              null
            }
          </div>
        </div>
        <Footer />
      </motion.div>
    );
}

export const pageQuery = graphql`
    query CaseStudyPageQuery($id: String!) {
        caseStudy: graphCmsCaseStudy(id: { eq: $id }) {
            body {
                html
            }
            id
            header
            slug
            metaDescription
            title
            lDeviceTitle
            lDeviceImage {
                url
                fileName
            }
            bottomImage {
                url
                fileName
            }
            bottomQuoteBody {
                html
            }
            bottomQuoteAuthor
        }
    }
`;

export default CaseStudyPage;