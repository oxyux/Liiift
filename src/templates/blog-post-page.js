import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

import { motion } from "framer-motion";

import LDevicePage from "../components/l-device/lDevicePage"
import Footer from '../components/footer/Footer';


import '../content-general.scss';
import './blog-post-page.scss';

const BlogPostPage = ({ 
    data: { blogPost },
    mount, transitionStatus, entry, exit
}) => {

    return (
    <motion.div
        className={`blog-post-page_Page`}
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
        <SEO title={blogPost.title} />
        <div>
          <LDevicePage
            lDeviceImage={blogPost.headerImage}
            lDeviceTitle={blogPost.title}
          />
        </div>
        <div
          className={`blog-post-page_Page__content`}
        >
          <div
            className={`pageContent__title`}
          >
            {/* needs CMS content model update for just "title" */}
            {blogPost.lDeviceTitle}
          </div>
          <div
            className={`pageContent__header`}
          >
            {blogPost.header}
          </div>
          <div
            className={`pageContent__body`}
            dangerouslySetInnerHTML={{__html: blogPost.body.html}}
          >
          </div>
        </div>
        <Footer />
    </motion.div>
    );
}

export const pageQuery = graphql`
    query BlogPostPageQuery($id: String!) {
        blogPost: graphCmsBlogPost(id: { eq: $id }) {
            title
            slug
            id
            headerImage {
                url
                fileName
            }
            previewText
            publicationDate
            body {
                html
            }
        }
    }
`;

export default BlogPostPage;