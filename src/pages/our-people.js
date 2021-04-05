import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"


import LDevicePage from "../components/l-device/lDevicePage"

import { motion } from "framer-motion";

import TransitionLink from 'gatsby-plugin-transition-link';

import '../content-general.scss';
import './our-people.scss';
import Footer from "../components/footer/Footer";
import CaseStudiesSlider from "../components/casestudies-slider/CasestudiesSlider";

const OurPeoplePage = ({ 
  data,
  mount, transitionStatus, entry, exit
}) => {
  let dataFromCMS = data.allGraphCmsOurPeopleMain.edges[0].node;
  let caseStudies = data.allGraphCmsCaseStudy.edges

  return (
    <motion.div
    className={`our-people_Page`}
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
      title="Our People" 
      description={dataFromCMS.metaDescription ? dataFromCMS.metaDescription : `Our People`}
    />
    <div>
      <LDevicePage
        lDeviceImage={dataFromCMS.lDeviceImage}
        lDeviceTitle={dataFromCMS.lDeviceTitle}
        lColor={`#00384A`}
      />
    </div>
    <div
      className={`our-people_Page__content`}
    >
      <div
        className={`pageContent__header`}
      >
        {dataFromCMS.headerMain}
      </div>
      <div
        className={`pageContent__body`}
      >
        {dataFromCMS.bodyMain}
      </div>
    </div>
    <div
      className={`our-people_Page__expertsSection`}
    >
      <h1
        className={`pageContent__header`}
      >
        {dataFromCMS.headerExperts}
      </h1>
      <div
        className={`our-people_Page__expertDiv`}
        style={{
          gridArea: 'expert_1'
        }}
      >
        {
          dataFromCMS.expert1Image
          ?
          <img
            src={dataFromCMS.expert1Image.url}
            alt={dataFromCMS.expert1Image.filename}
          />
          :
          null
        }
        <h4>
          {dataFromCMS.expert1Title}
        </h4>
        <div
          dangerouslySetInnerHTML={{
            __html: dataFromCMS.expert1Body
          }}
        />
      </div>
      <div
        className={`our-people_Page__expertDiv`}
        style={{
          gridArea: 'expert_2'
        }}
      >
        {
          dataFromCMS.expert2Image
          ?
          <img
            src={dataFromCMS.expert2Image.url}
            alt={dataFromCMS.expert2Image.filename}
          />
          :
          null
        }
        <h4>
          {dataFromCMS.expert2Title}
        </h4>
        <div
          dangerouslySetInnerHTML={{
            __html: dataFromCMS.expert2Body
          }}
        />
      </div>
      {
        dataFromCMS.expertsVideoUrl
        ?
        <div
          className={`our-people_Page__videoDiv`}
        >
          <div
            className={`our-people_Page__videoDiv__video`}
          >
            <iframe 
              width="560" height="315" 
              src={dataFromCMS.expertsVideoUrl}
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            >
            </iframe>
          </div>
          <svg 
              className={`our-people_Page__videoDiv__svg`}
              version="1.1" 
              viewBox="0 0 640 565.35" 
              xmlns="http://www.w3.org/2000/svg"
          >
              <motion.path 
                  className={`our-people_Page__videoDiv__L_Path`}
                  clipPath="url(#our-people_Page__videoDiv__L_clipPath)"
                  d="m650.32 534.32c-694.4-2.5857-645.15 96.734-612.83-509.4" 
                  stroke="#00384A"
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
                  id="our-people_Page__videoDiv__L_clipPath"
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
    {
      dataFromCMS.clientsVideoUrl
      ?
      <div
        className={`our-people_Page__clientsSection`}
      >
        <h1
          className={`pageContent__header`}
        >
          {dataFromCMS.headerClients}
        </h1>
        <div
          className={`our-people_Page__videoDiv`}
        >
          <div
            className={`our-people_Page__videoDiv__video`}
          >
            <iframe 
              width="560" height="315" 
              src={dataFromCMS.clientsVideoUrl}
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            >
            </iframe>
          </div>
          <svg 
              className={`our-people_Page__videoDiv__svg`}
              version="1.1" 
              viewBox="0 0 640 565.35" 
              xmlns="http://www.w3.org/2000/svg"
          >
              <motion.path 
                  className={`our-people_Page__videoDiv__L_Path`}
                  clipPath="url(#our-people_Page__videoDiv__L_clipPath)"
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
                  id="our-people_Page__videoDiv__L_clipPath"
              >
                  <path 
                      d="m5.0455 41.04v524.31h639.57v-96.8h-533.1v-427.51z"
                  />
              </clipPath>
          </svg>
        </div>
      </div>
      :
      <div
        style={{
          height: '10vh',
          width: '100%'
        }}
      />
    }
    <CaseStudiesSlider
      caseStudies={caseStudies}
    />
    <Footer />
  </motion.div>
  );
}


export default OurPeoplePage


export const query = graphql`
query OurPeopleQuery {
    allGraphCmsOurPeopleMain {
      edges {
        node {
          bodyMain
          expert1Body
          clientsVideoUrl
          clientsVideoTitle
          headerMain
          headerExperts
          headerClients
          expertsVideoUrl
          expertsVideoTitle
          expert2Title
          expert2Body
          expert1Title
          expert1Image {
            url
            fileName
          }
          lDeviceTitle
          lDeviceImage {
            fileName
            url
          }
          expert2Image {
            url
            fileName
          }
        }
      }
    }
    allGraphCmsCaseStudy {
      edges {
        node {
          body {
            html
          }
          id
          header
          slug
          title
          lDeviceImage {
            url
            fileName
          }
          sliderImage {
            url
            fileName
          }
        }
      }
    }
  }
`