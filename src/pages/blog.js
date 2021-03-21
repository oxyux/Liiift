import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

import { motion } from "framer-motion";

import Footer from '../components/footer/Footer';

import './blog.scss';
import { TransitionLink } from 'gatsby-plugin-transition-link/components/TransitionLink';

const BlogItemPost = ({
  post
}) => {

  return (
    <div
      className={`blogItemPost`}
    >
      <img 
        src={post.headerImage.url}
        alt={post.headerImage.fileName}
      />
      <div
        className={`blogItemPost__contentDiv`}
      >
        <TransitionLink
            to={`/blog/${post.slug}`}
            className="contentDivcaseStudy__link"
            exit={{
              length: 0.4,
              state: { x: typeof window !== 'undefined' ? -window.innerWidth : 0, opacity: 0 }
            }}
            entry={{
              delay: 0.6,
              state: { x: typeof window !== 'undefined' ? window.innerWidth : 0 }
            }}
        >
          <h6>
            BLOG
          </h6>
          <h2>
              {post.title}
          </h2>
        </TransitionLink>  
        <p>
          {post.previewText}
        </p>
      </div>
    </div>
  );
}

const BlogItemPostFirst = ({
  post
}) => {

  return (
    <div
      className={`blogItemPostFullscreen`}
    >
      <img 
        src={post.headerImage.url}
        alt={post.headerImage.fileName}
      />
        <div
            className={`blogItemPostFullscreen__svgDiv`}
        >
          <svg 
              className={`blogItemPostFullscreen__svg`}
              version="1.1" 
              viewBox="0 0 640 565.35" 
              xmlns="http://www.w3.org/2000/svg"
          >
              <motion.path 
                  className={`blogItemPostFullscreen__svg__L_Path`}
                  clipPath="url(#blogItemPostFullscreen__svg__L_clipPath)"
                  d="m650.32 534.32c-694.4-2.5857-645.15 96.734-612.83-509.4" 
                  stroke={"#ffa6ab"}
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
                  id="blogItemPostFullscreen__svg__L_clipPath"
              >
                  <path 
                      d="m5.0455 41.04v524.31h639.57v-96.8h-533.1v-427.51z"
                  />
              </clipPath>
          </svg>
      </div>
      <div
        className={`blogItemPostFullscreen__contentDiv`}
      >
        <TransitionLink
            to={`/blog/${post.slug}`}
            className="contentDivcaseStudy__link"
            exit={{
              length: 0.4,
              state: { x: typeof window !== 'undefined' ? -window.innerWidth : 0, opacity: 0 }
            }}
            entry={{
              delay: 0.6,
              state: { x: typeof window !== 'undefined' ? window.innerWidth : 0 }
            }}
        >
          <h6>
            BLOG
          </h6>
          <h2>
              {post.title}
          </h2>
        </TransitionLink>  
        <p>
          {post.previewText}
        </p>
      </div>
    </div>
  )
}

const BlogItemVideo = ({
  post,
  isFirst
}) => {

  return (
    <div
      className={`videoPost`}
      style={{
        marginTop: isFirst ? '0' : '',
        marginBottom: isFirst ? '4rem' : '4rem'
      }}
    >
      <iframe 
        width="560" height="315" 
        src={post.headerVideoUrl}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      >
      </iframe>
      <div
        className={`videoPost__contentDiv`}
      >
        <TransitionLink
            to={`/blog/${post.slug}`}
            className="contentDivcaseStudy__link"
            exit={{
              length: 0.4,
              state: { x: typeof window !== 'undefined' ? -window.innerWidth : 0, opacity: 0 }
            }}
            entry={{
              delay: 0.6,
              state: { x: typeof window !== 'undefined' ? window.innerWidth : 0 }
            }}
        >
          <h6>
            VIDEO
          </h6>
          <h2>
              {post.title}
          </h2>
        </TransitionLink>  
        <p>
          {post.previewText}
        </p>
      </div>
    </div>
  );
}

const BlogPage = ({
  data,
  mount, transitionStatus, entry, exit
}) => {
  const [isVideoItemFirst, setIsVideoItemFirst] = useState(false);
  let blogPosts = data.allGraphCmsBlogPost.edges;


  useEffect(() => {

    if (blogPosts && blogPosts[0].node.type === 'video') {
      setIsVideoItemFirst(true);
    }
  }, [])

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
      <SEO 
        title="Blog"
        description="Liiift Blog"
      />
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
              <path d="m5.0455 41.04v524.31h639.57v-96.8h-533.1v-427.51z" fill={isVideoItemFirst ? `#FFFFFF`: 'var(--main-color-dark)'}/>
              <g className="cls-2" transform="translate(-520)" clipPath="url(#clipPath)" fill={isVideoItemFirst ? `#FFFFFF`: 'var(--main-color-dark)'}>
                <path className="cls-4" d="m1820.5 247.53v-82.27h-109.7v-124.26h-101.63v124.26h-204.89v-58.08c0-16.13 8.07-24.2 22.59-24.2h69.37v-82.27h-104.86c-53.24 0-88.73 35.49-88.73 90.34v74.21h-101.62v82.27h101.64v317.82h101.63v-317.82h204.89v227.47c0 54.85 35.49 90.35 88.73 90.35h112.91v-82.28h-77.44c-14.52 0-22.59-8.07-22.59-24.2v-211.34z" fill={isVideoItemFirst ? `#FFFFFF`: 'var(--main-color-dark)'}/>
              </g>
              </g>
            </g>
          </svg>
        </div>
        {
          blogPosts.map((edge, index) => {           
            if (edge.node.type === 'post') {
              return (
                index === 0
                ?
                <BlogItemPostFirst
                  key={edge.node.id}
                  post={edge.node}
                />
                :
                <BlogItemPost 
                  key={edge.node.id}
                  post={edge.node}
                />
              )
            } else {
              return (
                <BlogItemVideo 
                  key={edge.node.id}
                  post={edge.node}
                  isFirst={index === 0}
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

// (sort: {fields: publicationDate, order: DESC})

export const query = graphql`
query BlogMainQuery {
    allGraphCmsBlogPost(sort: {fields: publicationDate, order: DESC}) {
      edges {
        node {
          id
          type
          headerVideoUrl
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