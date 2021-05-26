import React, { useContext, useEffect } from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

import { motion } from "framer-motion";

import Footer from '../components/footer/Footer';

import './hear-from.scss';

import { topnavColorContext } from '../../provider';
import VideosSlider from '../components/videos-slider/VideosSlider';

const HearFromDawnPage = ({
  data,
  mount, transitionStatus, entry, exit
}) => {
  const { changeColor, changeMainColor } = useContext(topnavColorContext);

  useEffect(() => {
      changeMainColor('var(--main-color-peach)');
      changeColor('var(--main-color-peach)');
  }, []);

  let dataFromCMS = data.allGraphCmsHearFromDawn.edges[0].node;

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
      title={dataFromCMS.metaTitle ? dataFromCMS.metaTitle : "Hear from Dawn"  }
      description={dataFromCMS.metaDescription ? dataFromCMS.metaDescription : `Hear from Dawn`}
    />
      <div
        className="hearFromUsPage"
      >
        <VideosSlider
            videos={dataFromCMS.hearFromVideos}
            person={`Dawn Tolcher`}
        />
      </div>
    <Footer />
  </motion.div>
  );
}


export default HearFromDawnPage


export const query = graphql`
query HearFromDawnQuery {
    allGraphCmsHearFromDawn {
        edges {
            node {
                metaDescription
                metaTitle
                hearFromVideos {
                    id
                    title
                    videoAsset {
                        handle
                        fileName
                        mimeType
                        url
                    }
                    thumbnailPicture {
                        url
                    }
                }
            }
        }
    }
}
`
