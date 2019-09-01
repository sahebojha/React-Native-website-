import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import Contacthtml from '../components/Contact/Contacthtml'
const ContactPage = ({data}) => ( 
  <Layout>
    <SEO title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
    title="Contact Us"
    subtitle="Fill free to contact us"
    heroclass="contact_background"
    />
    <br/>
    <Contacthtml/>
    <br/>
  </Layout>
)
export const query = graphql`
{
  img: file(relativePath: {eq: "contact.png"}){
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

}
`

export default ContactPage
