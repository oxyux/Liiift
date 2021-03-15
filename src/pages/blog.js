import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

import { motion } from "framer-motion";

import Footer from '../components/footer/Footer';

import './blog.scss';

const BlogItemPost = ({
  post,
  isFirst
}) => {

  return (
    isFirst 
    ?
    <div
      className={`blogItemPostFullscreen`}
    >

    </div>
    :
    <div
      className={`blogItemPost`}
    >

    </div>
  );
}


const BlogItemVideo = ({
  post
}) => {

  return (
    <div>

    </div>
  );
}

const BlogPage = ({
  data,
  mount, transitionStatus, entry, exit
}) => {
  let blogPosts = data.allGraphCmsBlogPost.edges;

  console.log(blogPosts)

  return (
    <motion.div
      className={`blog-main_Page`}
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
      <SEO title="Blog" />
      <div
        className={`blog-main_Page__content`}
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
              <path d="m5.0455 41.04v524.31h639.57v-96.8h-533.1v-427.51z" fill="var(--main-color-dark)"/>
              <g className="cls-2" transform="translate(-520)" clipPath="url(#clipPath)" fill="var(--main-color-dark)">
                <path className="cls-4" d="m1820.5 247.53v-82.27h-109.7v-124.26h-101.63v124.26h-204.89v-58.08c0-16.13 8.07-24.2 22.59-24.2h69.37v-82.27h-104.86c-53.24 0-88.73 35.49-88.73 90.34v74.21h-101.62v82.27h101.64v317.82h101.63v-317.82h204.89v227.47c0 54.85 35.49 90.35 88.73 90.35h112.91v-82.28h-77.44c-14.52 0-22.59-8.07-22.59-24.2v-211.34z" fill="var(--main-color-dark)"/>
              </g>
              </g>
            </g>
          </svg>
        </div>
        {
          blogPosts.map((node, index) => {
            if (node.type === 'post') {
              return (
                <BlogItemPost 
                  post={node}
                  isFirst={index === 0}
                />
              )
            } else {
              return (
                <BlogItemVideo 
                  post={node}
                />
              )
            }
          })
        }
      </div>
      <Footer />
  </motion.div>
  );
}


export default BlogPage


export const query = graphql`
query BlogMainQuery {
    allGraphCmsBlogPost {
      edges {
        node {
          type
          videoUrl
          title
          slug
          headerImage {
            url
            fileName
          }
          previewText
          publicationDate
        }
      }
    }
  }
`