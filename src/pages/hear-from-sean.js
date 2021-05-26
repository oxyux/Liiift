import React, { useContext, useEffect } from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

import { motion } from "framer-motion";

import Footer from '../components/footer/Footer';

import './hear-from.scss';

import { topnavColorContext } from '../../provider';
import VideosSlider from '../components/videos-slider/VideosSlider';
import LDeviceVideoHearFrom from '../components/l-device/lDeviceVideoHearFrom';

const HearFromSeanPage = ({
  data,
  mount, transitionStatus, entry, exit
}) => {
  const { changeColor, changeMainColor } = useContext(topnavColorContext);

  useEffect(() => {
      changeMainColor('var(--main-color-peach)');
      changeColor('var(--main-color-peach)');
  }, []);

  let dataFromCMS = data.allGraphCmsHearFromSean.edges[0].node;

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
      title={dataFromCMS.metaTitle ? dataFromCMS.metaTitle : "Hear from Sean"  }
      description={dataFromCMS.metaDescription ? dataFromCMS.metaDescription : `Hear from Sean`}
    />
      <div
        className="hearFromUsPage"
      >
        <VideosSlider
            videos={dataFromCMS.hearFromVideos}
            person={`Sean O’Neill`}
        />
      </div>
    <Footer />
  </motion.div>
  );
}


export default HearFromSeanPage


export const query = graphql`
query HearFromSeanQuery {
    allGraphCmsHearFromSean {
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
