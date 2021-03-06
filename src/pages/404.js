import React, { useContext, useEffect } from "react"

import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import Footer from "../components/footer/Footer"

import '../content-general.scss';
import { motion } from "framer-motion";
import { topnavColorContext } from "../../provider";

const NotFoundPage = () => {
  const { changeColor, changeMainColor } = useContext(topnavColorContext);

  useEffect(() => {
      changeMainColor('var(--main-color-peach)');
      changeColor('var(--main-color-peach)');
  }, []);

  return (
    <motion.div
      style={{
        height: '100vh'
      }}
    >
      <SEO title={`404: page not found`} />
      <div
        style={{
          height: '40vh'
        }}
      >
        <h1
          style={{
            height: '40vh',
            paddingTop: '3rem',
            marginLeft: '4rem',
            color: 'var(--main-color-peach)'
          }}
          >
          404: page not found
        </h1>
      </div>
      <Footer />
    </motion.div>
  )
}

export default NotFoundPage
