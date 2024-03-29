import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import Infoblock from "../components/Reusable/Infoblock"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"
const IndexPage = ({data}) => ( 
  <Layout>
    <SEO title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
    title="I Write Code"
    subtitle="Learning.com"
    heroclass="hero-background"
    />
    <Infoblock heading="About Us"/>
    <Dualinfoblock heading="Our Team"/>
  </Layout>
)
export const query = graphql`
{
  img: file(relativePath: {eq: "heromain.png"}){
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }


}
`

export default IndexPage
