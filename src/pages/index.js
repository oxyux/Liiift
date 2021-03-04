import React from "react"
import { Link, graphql } from "gatsby"


import SEO from "../components/seo"

import Layout from "../components/layout/layout"
import Image from "../components/homepage/image"

import bgImage from "../images/main_page.png"

import './homepage.scss'

const IndexPage = ({ data }) => {
  //console.log(data.allGraphCmsLandingPage.edges[0].node)

  let dataFromCMS = data.allGraphCmsLandingPage.edges[0].node;

  return (
    <Layout>
      <SEO title="Home" />
      <div
        className="homepage__wrapper"
      >
        <div
          className="homepage__content"
        >
          <h1>
            {dataFromCMS.paragraph1}
          </h1>
          <p>
            {dataFromCMS.paragraph2}
          </p>
          <p>
            {dataFromCMS.paragraph3}
          </p>
          <div>
            <h4>
              {dataFromCMS.linksHeading}
            </h4>
            <Link 
              to="/liift-my-business/"
              style={{
                marginRight: '16px'
              }}
            >
              {dataFromCMS.liiiftMyBusiness}
            </Link>
            <Link to="/liiift-myself/">
              {dataFromCMS.liiiftMyself}
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}


export default IndexPage


export const query = graphql`
  query IndexPageQuery {
    allGraphCmsLandingPage {
      edges {
        node {
          id
          liiiftMyBusiness
          liiiftMyself
          linksHeading
          paragraph1 
          paragraph2
          paragraph3
        }
      }
    }
  }
`