import React from "react"
import { Link, graphql } from "gatsby"

import { TransitionState } from "gatsby-plugin-transition-link";

import SEO from "../components/seo"


import LDeviceMain from "../components/l-device/lDeviceMain"

import { motion } from "framer-motion";

import TransitionLink from 'gatsby-plugin-transition-link';

import '../content-general.scss';
import './liiift-my-business.scss';
import Footer from "../components/footer/Footer";

const LiiiftMyBusinessPage = ({ 
  data,
  mount, transitionStatus, entry, exit
}) => {
  let dataFromCMS = data.allGraphCmsLiiiftMyBusinessMain.edges[0].node;

  let pages = data.allGraphCmsLiiiftMyBusinessPage.edges

  console.log(transitionStatus)

  return (
    <motion.div
    className={`liiift-my-business_Page`}
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
    <SEO title="Liiift My Business" />
    <div>
      <LDeviceMain
        lDeviceImage={dataFromCMS.lDeviceImage}
        lDeviceTitle={dataFromCMS.lDeviceTitle}
      />
    </div>
    <div
      className={`liiift-my-business_Page__content`}
    >
      <div
        className={`pageContent__title`}
      >
        {/* needs CMS content model update for just "title" */}
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
        className={`liiift-my-business_Page__linksDiv`}
      >
        {pages.map(edge => (
          <div
            key={edge.node.lDeviceTitle}
          >
            <TransitionLink
              to={`/liiift-my-business/${edge.node.slug}`}
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
        className={`liiift-my-business_Page__imgDiv`}
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


export default LiiiftMyBusinessPage


export const query = graphql`
query LiiiftMyBusinessMainQuery {
    allGraphCmsLiiiftMyBusinessMain {
      edges {
        node {
          title
          body
          header
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
    allGraphCmsLiiiftMyBusinessPage {
      edges {
        node {
          slug
          lDeviceTitle
        }
      }
    }
  }
`