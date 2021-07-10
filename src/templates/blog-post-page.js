import React, { useContext, useEffect } from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

import { motion } from "framer-motion";

import LDevicePage from "../components/l-device/lDevicePage"
import Footer from '../components/footer/Footer';


import '../content-general.scss';
import './blog-post-page.scss';
import LDeviceVideo from '../components/l-device/lDeviceVideo';
import RichTextBlock from '../components/blocks/RichTextBlock';
import ImageGrid from '../components/blocks/ImageGrid';
import { topnavColorContext } from '../../provider';

const BlogPostPage = ({ 
    data: { blogPost },
    mount, transitionStatus, entry, exit
}) => {
    const { changeColor, changeMainColor } = useContext(topnavColorContext);

    useEffect(() => {
        changeMainColor('var(--main-color-peach)');
        changeColor('var(--main-color-peach)');
    }, []);

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
        <SEO 
          title={blogPost.metaTitle ? blogPost.metaTitle : blogPost.title} 
          description={blogPost.metaDescription ? blogPost.metaDescription : ``}
        />
        <div>
          {
            blogPost.type !== 'video'
            ?
            <LDevicePage
              lDeviceImage={blogPost.headerImage}
              lDeviceTitle={blogPost.title}
              altText={blogPost.headerImageAltText}
            />
            :
            <LDeviceVideo 
              videoURL={blogPost.headerVideoUrl}
              lDeviceTitle={blogPost.title}
            />
          }
        </div>
        <div
          className={`blog-post-page_Page__content`}
        >
          <div
            className={`pageContent__header`}
          >
            {blogPost.header}
          </div>
          <div
            className={`pageContent__body`}
          >
            {
              blogPost.blocks && blogPost.blocks.map(block => {
                if (block.__typename === "GraphCMS_RichTextBlock") {
                  return (
                    <RichTextBlock
                      key={block.id}
                      html={block.richTextBlock.html}
                    />
                  )
                } else {
                  return (
                    <ImageGrid 
                      key={block.id}
                      block={block}
                    />
                  )
                }
              })
            }
            <div
              className="authorDateDiv"
            >
              <div>
                {blogPost.author ? `by ${blogPost.author}` : ``}
              </div>
              <div>
                {blogPost.publicationDate ? new Date(blogPost.publicationDate).toLocaleDateString('en-GB') : ''}
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </motion.div>
    );
}

export const pageQuery = graphql`
    query BlogPostPageQuery($id: String!) {
        blogPost: graphCmsBlogPost(id: { eq: $id }) {
            type
            title
            slug
            id
            publicationDate
            headerVideoUrl
            author
            metaTitle
            metaDescription
            headerImage {
                url
                fileName
            }
            headerImageAltText
            previewText
            publicationDate
            blocks {
              ... on GraphCMS_ImageGrid {
             id
             rows
             columns
             image {
                 fileName
                 url
                 id
              }
             imageWithAltTexts {
                image {
                    fileName
                    url
                    id
                }
                altText
              }
             }
              ... on GraphCMS_RichTextBlock {
             id
             richTextBlock {
                     html
                 }
             }
         }
        }
    }
`;

export default BlogPostPage;