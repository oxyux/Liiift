import React, { useContext, useEffect } from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

import { motion } from "framer-motion";

import LDevicePage from "../components/l-device/lDevicePage"
import Footer from '../components/footer/Footer';

import './three-i-s.scss';
import LDeviceVideo from '../components/l-device/lDeviceVideo';
import { topnavColorContext } from '../../provider';

const ThreeIsPage = ({
  data,
  mount, transitionStatus, entry, exit
}) => {
  const { changeColor, changeMainColor } = useContext(topnavColorContext);

  useEffect(() => {
      changeMainColor('var(--main-color-peach)');
      changeColor('var(--main-color-peach)');
  }, []);

  let dataFromCMS = data.allGraphCmsThreeIs.edges[0].node;

  let dataCTAlinks = data.allGraphCmsFooter.edges[0].node;

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
    <SEO 
      title="Three i's of Liiift" 
      description={dataFromCMS.metaDescription ? dataFromCMS.metaDescription : `Three i's of Liiift`}
    />
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
        {
        dataFromCMS.lDeviceVideoUrl
        ?
        <section>
          <div
            className={`threeIs__videoDiv`}
          >
            <div
              className={`threeIs__videoDiv__video`}
            >
              <iframe 
                width="560" height="315" 
                src={dataFromCMS.lDeviceVideoUrl}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              >
              </iframe>
            </div>
            <svg 
                className={`threeIs__videoDiv__svg`}
                version="1.1" 
                viewBox="0 0 640 565.35" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path 
                    className={`threeIs__videoDiv__L_Path`}
                    clipPath="url(#threeIs__videoDiv__L_clipPath)"
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
                    id="threeIs__videoDiv__L_clipPath"
                >
                    <path 
                        d="m5.0455 41.04v524.31h639.57v-96.8h-533.1v-427.51z"
                    />
                </clipPath>
            </svg>
          </div>
        </section>
        :
        null
        }
        <section
          className={`threeIsSection threeIsSection_CTA`}
          style={{
            backgroundColor: '#FFFFFF'
          }}
        >
          <div
              className="ctaDiv__message"
          >
              Ready to be L<span style={{color: 'var(--main-color-peach)'}}>iii</span>fted?
          </div>
          <div
              className="ctaDiv__buttonsDiv"
          >
              <div>
                  <a
                      href={`mailto:${dataCTAlinks.contactEmail}`}
                  >
                      Drop us a line
                  </a>
              </div>
              <div>
                  <a
                      href={`tel:${dataCTAlinks.contactPhone}`}
                  >
                      Give us a call
                  </a>
              </div>
          </div>
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
          metaDescription
          lDeviceImage {
            url
            fileName
          }
          lDeviceTitle
          lDeviceVideoUrl
        }
      }
    }

    allGraphCmsFooter {
      edges {
        node {
          contactEmail
          contactPhone
        }
      }
    }
  }
`