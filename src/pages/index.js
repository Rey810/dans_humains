import React from "react"
import Layout from "../containers/Layout"
import Landing from "../containers/Landing/Landing"
import Projects from "../containers/Projects/Projects"
import Form from "../components/UI/Form/Form"
import Button from "../components/UI/Button/Button"

const home = () => {
  return (
    <Layout>
      {/* Landing Section */}
      <Landing />
      {/* Needs to be responsive */}
      {/* <blockquote>
        <p>
          Humane - marked by compassion and sympathy; treating all beings as
          humans worthy of your empathy.
        </p>
      </blockquote> */}
      {/* Values and Beliefs Section */}
      <section className="values-beliefs-container">
        <h2>Values & Beliefs</h2>
        <div className="section-children-container">
          <ul>
            <ol>
              <li>
                Our objective is to explore the boundaries between the arts,
                therefore making it an interdisciplinary creation.
              </li>
            </ol>
          </ul>
        </div>
      </section>
      <section className="latest-projects-container">
        <h2>Latest Projects</h2>
        <div className="section-children-container">
          <Projects />
          <Button type="link" btnStyle="PRIMARY_1">
            See More
          </Button>
        </div>
      </section>
      <section className="about-container">
        <h2>Who We Are</h2>
        <div className="section-children-container">
          <p>
            Dans Humains is a female artists' collective that brings to fruition
            a combination of skills in dance, theatre, research, anthropology
            and global activism. We produce work independently and collectively;
            we use art as a medium through which to address a wide range of
            issues.
          </p>
          <Button type="link" btnStyle="PRIMARY_1">
            MORE
          </Button>
        </div>
      </section>
      <section className="form-container">
        <h2>Contact Us</h2>
        <div className="section-children-container">
          {/* FORM */}
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
