import React from "react"
import Layout from "../containers/Layout"

const home = () => {
  return (
    <Layout>
      {/* Landing Section */}
      <main>
        <h1>Dans Humains</h1>
        <p>
          We believe in the healing power of arts because art is about sharing
          who we are. We find strength in pain - in other words, we use pain as
          the engine for the creative process and activism. These processes
          become our healing. Through them, we feel empowered and complete.
        </p>
        <nav>
          <div>Bouncing arrow</div>
        </nav>
      </main>
      {/* Needs to be responsive */}
      <blockquote>
        <p>
          Humane - marked by compassion and sympathy; treating all beings as
          humans worthy of your empathy.
        </p>
      </blockquote>
      {/* Values and Beliefs Section */}
      <section>
        <h2>Values & Beliefs</h2>
        <ul>
          <ol>
            <li>We brought the arts into our lives.</li>
            <li>We reclaimed inner power.</li>
          </ol>
          <ol>
            <li>We brought the arts into our lives.</li>
            <li>We reclaimed inner power.</li>
          </ol>
          <ol>
            <li>We brought the arts into our lives.</li>
            <li>We reclaimed inner power.</li>
          </ol>
        </ul>
      </section>
      <section>
        <h2>Latest Projects</h2>
        <div>
          <div>Project Card</div>
          <div>Project Card</div>
          <div>Project Card</div>
          <div>Project Card</div>
        </div>
        <a href="/">See More</a>
      </section>
      <section>
        <h2>Who We Are</h2>
        <p>
          Dans Humains is a female artists' collective that brings to fruition a
          combination of skills in dance, theatre, research, anthropology and
          global activism. We produce work independently and collectively; we
          use art as a medium through which to address a wide range of issues.
        </p>
        <a href="/">MORE</a>
      </section>
      <section>
        <h2>Contact Us</h2>
        <form action="/">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-mail" />
          <textarea
            name="question"
            id="question"
            cols="30"
            rows="10"
          ></textarea>
          <button className="btn btn__PRIMARY-2">SEND</button>
        </form>
      </section>
    </Layout>
  )
}

export default home
