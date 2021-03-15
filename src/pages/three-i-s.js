import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

import { motion } from "framer-motion";

import LDevicePage from "../components/l-device/lDevicePage"
import Footer from '../components/footer/Footer';

import './three-i-s.scss';

const ThreeIsPage = ({
  data,
  mount, transitionStatus, entry, exit
}) => {
  let dataFromCMS = data.allGraphCmsThreeIs.edges[0].node;

  console.log(dataFromCMS)

  return (
    <motion.div
    className={`liiift-myself-page_Page`}
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
    <SEO title="Three i's of Liiift" />
      <div>
        <LDevicePage
          lDeviceImage={dataFromCMS.lDeviceImage}
          lDeviceTitle={dataFromCMS.lDeviceTitle}
          lColor={`#00384A`}
        />
        <section
          className={`threeIsSection`}
          style={{
            backgroundColor: 'var(--main-color-peach)',
            
          }}
        >
          <h2
            style={{
              color: `#FFFFFF`
            }}
          >
            <span style={{color: `var(--main-color-dark)`}}>i</span>mmerse
          </h2>
          <p>
            {dataFromCMS.para1}
          </p>
        </section>
        <section
          className={`threeIsSection`}
          style={{
            backgroundColor: 'var(--main-color-dark)',
            
          }}
        >
          <h2
            style={{
              color: `#FFFFFF`
            }}
          >
            <span style={{color: `var(--main-color-peach)`}}>i</span>nvest
          </h2>
          <p            
            style={{
              color: `#FFFFFF`
            }}
          >
            {dataFromCMS.para2}
          </p>
        </section>
        <section
          className={`threeIsSection`}
          style={{
            backgroundColor: 'var(--main-color-biege)',
            
          }}
        >
          <h2
            style={{
              color: `#FFFFFF`
            }}
          >
            <span style={{color: `var(--main-color-dark)`}}>i</span>nnovate
          </h2>
          <p>
            {dataFromCMS.para3}
          </p>
        </section>
        <section
          className={`threeIsSection`}
          style={{
            backgroundColor: '#FFFFFF'
          }}
        >

        </section>
      </div>
    <Footer 
      customCtaDiv={true}
    />
  </motion.div>
  );
}


export default ThreeIsPage


export const query = graphql`
query ThreeIsQuery {
    allGraphCmsThreeIs {
      edges {
        node {
          para1
          para2
          para3
          lDeviceImage {
            url
            fileName
          }
          lDeviceTitle
        }
      }
    }
  }
`