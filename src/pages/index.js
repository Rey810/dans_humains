import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../containers/Layout"
import Landing from "../containers/Landing/Landing"
import Projects from "../containers/Projects/Projects"
import Form from "../components/UI/Form/Form"
import Button from "../components/UI/Button/Button"

const home = props => {
  return (
    <Layout>
      <Landing />
      <section id="first-child-section" className="values-beliefs-container">
        <h2>Objectives</h2>
        <div className="section-children-container objectives-container">
          <ul>
            <li>
              <span>
                Our objective is to explore the boundaries between the arts,
                therefore making it an interdisciplinary creation.
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section className="latest-projects-container">
        <h2>Latest Projects</h2>
        <div className="section-children-container">
          <Projects />
          <Button extraClass="more-projects-link" type="link" btnStyle="PRIMARY_1">
            See More
          </Button>
        </div>
      </section>
      <section className="about-container">
        <h2>Who We Are</h2>
        <div className="section-children-container">
          <div className="about-content-container">
            <div className="about-description">
              <p>
                Dans Humains is a female artists' collective that brings to
                fruition a combination of skills in dance, theatre, research,
                anthropology and global activism. We produce work independently
                and collectively; we use art as a medium through which to
                address a wide range of issues.
              </p>
              <Button type="link" btnStyle="PRIMARY_1">
                MORE
              </Button>
            </div>
            <div className="about-image-container">
              <div className="image-container">
                <Img fluid={props.data.val.childImageSharp.fluid} className="h-full"/>
              </div>
              <div className="image-container">
                <Img fluid={props.data.est.childImageSharp.fluid} className="h-full"/>
              </div>
              <div className="image-container">
                <Img fluid={props.data.xim.childImageSharp.fluid} className="h-full"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="form-container">
        <h2>Contact Us</h2>
        <div className="section-children-container">
          <Form />
        </div>
      </section>
      <section className="partners-container">
        <h2>Partners</h2>
        <div className="section-children-container">
          <div className="partners">
            <div className="partner">Partner 1</div>
            <div className="partner">Partner 2</div>
            <div className="partner">Partner 3</div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default home

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    val: file(relativePath: { eq: "val.jpg" }) {
      ...fluidImage
    }
    est: file(relativePath: { eq: "est.jpg" }) {
      ...fluidImage
    }
    xim: file(relativePath: { eq: "xim.jpg" }) {
      ...fluidImage
    }
  }
`
