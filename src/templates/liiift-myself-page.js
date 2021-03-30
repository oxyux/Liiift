import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

import { motion } from "framer-motion";

import LDevicePage from "../components/l-device/lDevicePage"
import Footer from '../components/footer/Footer';


import '../content-general.scss';
import './liiift-myself-page.scss';

const LiiiftMyselfSeparatePage = ({
    data: { pageData },
    mount, transitionStatus, entry, exit
}) => {

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
          title={pageData.title} 
          description={pageData.metaDescription ? pageData.metaDescription : ``}
        />
        <div>
          <LDevicePage
            lDeviceImage={pageData.lDeviceImage}
            lDeviceTitle={pageData.lDeviceTitle}
            lColor={`#00384A`}
            lTitleColor={`#00384A`}
          />
        </div>
        <div
          className={`liiift-myself-page_Page__content`}
        >
          <div
            className={`pageContent__title`}
          >
            {pageData.title}
          </div>
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
        <Footer />
      </motion.div>
    );
}

export const pageQuery = graphql`
    query LiiiftMyselfSeparatePageQuery($id: String!) {
        pageData: graphCmsLiiiftMyselfPage(id: { eq: $id }) {
            body
            id
            slug
            header
            title
            metaDescription
            lDeviceTitle
            lDeviceImage {
                fileName
                url
            }
        }
    }
`;

export default LiiiftMyselfSeparatePage;