import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"


import LDevicePage from "../components/l-device/lDevicePage"

import { motion } from "framer-motion";

import TransitionLink from 'gatsby-plugin-transition-link';

import '../content-general.scss';
import './liiift-myself.scss';
import Footer from "../components/footer/Footer";

const LiiiftMyselfPage = ({ 
  data,
  mount, transitionStatus, entry, exit
}) => {
  let dataFromCMS = data.allGraphCmsLiiiftMyselfMain.edges[0].node;

  let pages = data.allGraphCmsLiiiftMyselfPage.edges

  return (
    <motion.div
    className={`liiift-myself_Page`}
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
      title="Liiift Myself" 
      description={dataFromCMS.metaDescription ? dataFromCMS.metaDescription : `Liiift Myself`}
    />
    <div>
      <LDevicePage
        lDeviceImage={dataFromCMS.lDeviceImage}
        lDeviceTitle={
          <span>
            <svg version="1.1" viewBox="0 0 1300 565.35" xmlns="http://www.w3.org/2000/svg">
 <g data-name="Layer 2">
  <g data-name="Layer 1">
   <g class="cls-2" transform="translate(-520)" clip-path="url(#clip-path)" fill="#ffa6ab">
    <path class="cls-3" d="m1113.1 0c28.55 0 50.82 20 50.82 49.1s-22.27 49.11-50.82 49.11-50.81-20-50.81-49.11 22.26-49.1 50.81-49.1"/>
    <path class="cls-3" d="m823.89 0c28.55 0 50.82 20 50.82 49.1s-22.27 49.11-50.82 49.11-50.81-20-50.81-49.11 22.27-49.1 50.81-49.1"/>
   </g>
   <rect class="cls-3" x="253.08" y="165.26" width="101.63" height="266.91" fill="#ffa6ab"/>
   <g class="cls-2" transform="translate(-520)" clip-path="url(#clip-path)">
    <path class="cls-3" d="m968.31 0c28.55 0 50.82 20 50.82 49.1s-22.27 49.11-50.82 49.11-50.82-20-50.82-49.11 22.27-49.1 50.82-49.1" fill="#ffa6ab"/>
   </g>
   <rect class="cls-3" x="397.85" y="165.26" width="101.64" height="266.91" fill="#ffa6ab"/>
   <rect class="cls-3" x="542.98" y="165.26" width="101.64" height="266.91" fill="#ffa6ab"/>
   <path d="m5.0455 41.04v524.31h639.57v-96.8h-533.1v-427.51z" fill="#00384a"/>
   <g class="cls-2" transform="translate(-520)" clip-path="url(#clip-path)">
    <path class="cls-4" d="m1820.5 247.53v-82.27h-109.7v-124.26h-101.63v124.26h-204.89v-58.08c0-16.13 8.07-24.2 22.59-24.2h69.37v-82.27h-104.86c-53.24 0-88.73 35.49-88.73 90.34v74.21h-101.62v82.27h101.64v317.82h101.63v-317.82h204.89v227.47c0 54.85 35.49 90.35 88.73 90.35h112.91v-82.28h-77.44c-14.52 0-22.59-8.07-22.59-24.2v-211.34z" fill="#00384a"/>
   </g>
  </g>
 </g>
</svg>
 myself
          </span>
        }
        lColor={`#00384A`}
        lTitleColor={`#00384A`}
      />
    </div>
    <div
      className={`liiift-myself_Page__content`}
    >
      <div
        className={`pageContent__title`}
      >
        {dataFromCMS.title}
      </div>
      <div
        className={`pageContent__header`}
      >
        {dataFromCMS.header}
      </div>
      <div
        className={`pageContent__body`}
      >
        {dataFromCMS.body}
      </div>
      <div
        className={`liiift-myself_Page__linksDiv`}
      >
        {pages.map(edge => (
          <div
            key={edge.node.lDeviceTitle}
          >
            <TransitionLink
              to={`/liiift-myself/${edge.node.slug}`}
              style={{
                marginRight: '16px'
              }}
              exit={{
                length: 0.4,
                state: { x: typeof window !== 'undefined' ? -window.innerWidth : 0, opacity: 0 }
              }}
              entry={{
                delay: 0.6,
                state: { x: typeof window !== 'undefined' ? window.innerWidth : 0 }
              }}
            >
              {edge.node.lDeviceTitle}
            </TransitionLink>       
          </div>
        ))}
      </div>
      <div
        className={`liiift-myself_Page__imgDiv`}
      >
        <img
          src={dataFromCMS.bodyImage.url}
          alt={dataFromCMS.bodyImage.fileName}
        />
      </div>
    </div>
    <Footer />
  </motion.div>
  );
}


export default LiiiftMyselfPage


export const query = graphql`
query LiiiftMyselfMainQuery {
    allGraphCmsLiiiftMyselfMain {
      edges {
        node {
          title
          body
          header
          metaDescription
          lDeviceImage {
            url
            fileName
          }
          lDeviceTitle
          bodyImage {
            url
            fileName
          }
        }
      }
    }
    allGraphCmsLiiiftMyselfPage {
      edges {
        node {
          slug
          lDeviceTitle
        }
      }
    }
  }
`