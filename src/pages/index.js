import React from "react"
import { Link, graphql } from "gatsby"
import TransitionLink from 'gatsby-plugin-transition-link';


import SEO from "../components/seo"

import Layout from "../components/layout/layout"

import './homepage.scss'
import { AnimatePresence, motion } from "framer-motion";

const IndexPage = ({ 
  data, 
  mount, transitionStatus, entry, exit
}) => {


  let dataFromCMS = data.allGraphCmsLandingPage.edges[0].node;

  return (
    <AnimatePresence>
      <motion.div
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
          title="Home" 
          description={dataFromCMS.metaDescription ? dataFromCMS.metaDescription : `Liiift Consultancy agency based in Liverpool`}
        />
        <div
          className="homepage__wrapper"
        >
          <div
            className="logoDiv"
          >
            <svg version="1.1" viewBox="0 0 1300 565.35" xmlns="http://www.w3.org/2000/svg">
              <g data-name="Layer 2">
                <g data-name="Layer 1">
                <g className="cls-2" transform="translate(-520)" clipPath="url(#clipPath)" fill="#ffa6ab">
                  <path className="cls-3" d="m1113.1 0c28.55 0 50.82 20 50.82 49.1s-22.27 49.11-50.82 49.11-50.81-20-50.81-49.11 22.26-49.1 50.81-49.1"/>
                  <path className="cls-3" d="m823.89 0c28.55 0 50.82 20 50.82 49.1s-22.27 49.11-50.82 49.11-50.81-20-50.81-49.11 22.27-49.1 50.81-49.1"/>
                </g>
                <path d="m253.08 165.26h101.63v266.91h-101.63z" fill="#ffa6ab"/>
                <g className="cls-2" transform="translate(-520)" clipPath="url(#clipPath)">
                  <path className="cls-3" d="m968.31 0c28.55 0 50.82 20 50.82 49.1s-22.27 49.11-50.82 49.11-50.82-20-50.82-49.11 22.27-49.1 50.82-49.1" fill="#ffa6ab"/>
                </g>
                <path d="m397.85 165.26h101.64v266.91h-101.64z" fill="#ffa6ab"/>
                <path d="m542.98 165.26h101.64v266.91h-101.64z" fill="#ffa6ab"/>
                <path d="m5.0455 41.04v524.31h639.57v-96.8h-533.1v-427.51z" fill="#fff"/>
                <g className="cls-2" transform="translate(-520)" clipPath="url(#clipPath)" fill="#fff">
                  <path className="cls-4" d="m1820.5 247.53v-82.27h-109.7v-124.26h-101.63v124.26h-204.89v-58.08c0-16.13 8.07-24.2 22.59-24.2h69.37v-82.27h-104.86c-53.24 0-88.73 35.49-88.73 90.34v74.21h-101.62v82.27h101.64v317.82h101.63v-317.82h204.89v227.47c0 54.85 35.49 90.35 88.73 90.35h112.91v-82.28h-77.44c-14.52 0-22.59-8.07-22.59-24.2v-211.34z" fill="#fff"/>
                </g>
                </g>
              </g>
            </svg>
          </div>
          <div
            className="homepage__content"
          >
            <h1>
              Welcome to L<span style={{color: `var(--main-color-peach)`}}>iii</span>ft. Welcome to an organisation that delivers benefits to companies and people; in a real world way – no theorising; purely pragmatism.
            </h1>
            <p>
              {dataFromCMS.paragraph2}
            </p>
            <p>
              {dataFromCMS.paragraph3}
            </p>
            <div>
              <h4>
                {dataFromCMS.linksHeading}
              </h4>
              <div
                className="linkWrapper"
                style={{
                  marginRight: '16px'
                }}
              >
                <TransitionLink
                  to="/liiift-my-business/"
                  exit={{
                    length: 0.8,
                    state: { x: typeof window !== 'undefined' ? -window.innerWidth : 0, opacity: 0 }
                  }}
                  entry={{
                    delay: 0.6,
                    state: { x: typeof window !== 'undefined' ? window.innerWidth : 0 }
                  }}
                >
                  L<span style={{color: 'var(--main-color-peach)'}}>iii</span>ft my business
                </TransitionLink>
              </div>
              <div
                className="linkWrapper"

              >
                <TransitionLink
                  to="/liiift-myself/"
                  style={{
                    marginRight: '16px'
                  }}
                  exit={{
                    length: 0.8,
                    state: { x: typeof window !== 'undefined' ? -window.innerWidth : 0, opacity: 0 }
                  }}
                  entry={{
                    delay: 0.6,
                    state: { x: typeof window !== 'undefined' ? window.innerWidth : 0 }
                  }}
                >
                  L<span style={{color: 'var(--main-color-peach)'}}>iii</span>ft myself
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}


export default IndexPage


export const query = graphql`
  query IndexPageQuery {
    allGraphCmsLandingPage {
      edges {
        node {
          id
          metaDescription
          liiiftMyBusiness
          liiiftMyself
          linksHeading
          paragraph1 
          paragraph2
          paragraph3
        }
      }
    }
  }
`