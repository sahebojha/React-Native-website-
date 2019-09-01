import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import Servicephoto from '../components/Services/Servicephoto'

const ServicesPage = ({data}) => ( 
  <Layout>
    <SEO title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
    title=""
    subtitle=""
    heroclass="services-background"
    />
    <br/>
    
    <Servicephoto/>
    <br/>
  </Layout>
)
export const query = graphql`
{
  img: file(relativePath: {eq: "heromain.jpg"}){
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

}
`

export default ServicesPage
