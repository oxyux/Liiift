import React, { useContext, useEffect } from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

import { motion } from "framer-motion";

import LDevicePage from "../components/l-device/lDevicePage"
import Footer from '../components/footer/Footer';


import '../content-general.scss';
import './liiift-my-business-page.scss';
import { TransitionLink } from 'gatsby-plugin-transition-link/components/TransitionLink';
import { topnavColorContext } from '../../provider';


const LiiiftMyBusinessSeparatePage = ({
    data: { pageData, linksData },
    mount, transitionStatus, entry, exit
}) => {
    const { changeColor, changeMainColor } = useContext(topnavColorContext);

    useEffect(() => {
        changeMainColor('var(--main-color-peach)');
        changeColor('var(--main-color-peach)');
    }, []);

    return (
        <motion.div
        className={`liiift-my-business-page_Page`}
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
          title={pageData.metaTitle ? pageData.metaTitle : pageData.title} 
          description={pageData.metaDescription ? pageData.metaDescription : ``}
        />
        <div>
          <LDevicePage
            lDeviceImage={pageData.lDeviceImage}
            lDeviceTitle={pageData.lDeviceTitle}
            altText={pageData.lDeviceImageAltText}
          />
        </div>
        <div
          className={`liiift-my-business-page_Page__content`}
        >
          <div
            className={`pageContent__header`}
            dangerouslySetInnerHTML={{
              __html: pageData.header
            }}          
          />
          <div
            className={`pageContent__body`}
          >
            {pageData.body}
          </div>
        </div>
        <div
            className={`liiift-my-business_Page__linksDiv`}
          >
            {linksData.edges.filter(edge => edge.node.title !== pageData.title).map(edge => (
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
                  {edge.node.title}
                </TransitionLink>       
              </div>
            ))}
        </div>
        <Footer />
      </motion.div>
    );
}

export const pageQuery = graphql`
    query LiiiftMyBusinessSeparatePageQuery($id: String!) {
        pageData: graphCmsLiiiftMyBusinessPage(id: { eq: $id }) {
            body
            id
            slug
            header
            title
            metaTitle
            metaDescription
            lDeviceTitle
            lDeviceImage {
                fileName
                url
            }
            lDeviceImageAltText
        }
        linksData: allGraphCmsLiiiftMyBusinessPage {
          edges {
            node {
              slug
              lDeviceTitle
              title
            }
          }
        }
    }
`;

export default LiiiftMyBusinessSeparatePage;