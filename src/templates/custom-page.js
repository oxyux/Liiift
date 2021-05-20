import React, { useContext, useEffect } from "react";
import { graphql } from "gatsby";

import { motion } from "framer-motion";

import SEO from '../components/seo';

import Footer from "../components/footer/Footer";
import RichTextBlock from "../components/blocks/RichTextBlock";
import ImageGrid from "../components/blocks/ImageGrid";

import '../content-general.scss';
import './custom-page.scss';
import LDevicePage from "../components/l-device/lDevicePage";
import { topnavColorContext } from "../../provider";

const CustomPage = ({
    data: { customPage },
    mount, transitionStatus, entry, exit
}) => {
    const { changeColor, changeMainColor } = useContext(topnavColorContext);

    useEffect(() => {
        changeMainColor('var(--main-color-peach)');
        changeColor('var(--main-color-peach)');
    }, []);

    return (
      <motion.div
        className={`custom-page_Page`}
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
          title={customPage.title} 
          description={customPage.metaDescription}
        />
        <div>
          {
            customPage.lDeviceImage
            ?
            <LDevicePage
              lDeviceImage={customPage.lDeviceImage}
              lDeviceTitle={customPage.lDeviceTitle}
            />
            :
            <h1
              className="custom-page_Page__h1"
            >
              {customPage.title}
            </h1>
          }
        </div>
        <div
          className={`custom-page_Page__content`}
        >
          {
            customPage.lead && customPage.lead.html
            ?
            <div
              className={`pageContent__header`}
              dangerouslySetInnerHTML={{__html: customPage.lead.html}}
            />
            :
            null
          }
          <div
            className={`pageContent__body`}
          >
            {
              customPage.blocks && customPage.blocks.map(block => {
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
                {customPage.author ? `by ${customPage.author}` : ``}
              </div>
              <div>
                {customPage.publicationDate ? new Date(customPage.publicationDate).toLocaleDateString('en-GB') : ''}
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </motion.div>
    );
}

export const pageQuery = graphql`
query CustomPageQuery($id: String!) {
     
      customPage: graphCmsCustomPage(id: { eq: $id }) {
      metaDescription
      slug
      title
      lDeviceTitle
      lDeviceImage {
        url
        fileName
      }
      blocks {
         ... on GraphCMS_ImageGrid {
          id
          rows
          columns
          image {
            url
            fileName
            handle
          }
        }
         ... on GraphCMS_RichTextBlock {
          id
          richTextBlock {
            html
          }
        }
      }
      lead {
        html
      }
    }
  }
`

export default CustomPage;