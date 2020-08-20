import React from "react"
import classes from "./Landing.module.css"

const Landing = () => {
  return (
    <main className={classes.Landing}>
      <h1 classesName={classes.LandingHeader}>Dans Humains</h1>
      <p>
        We believe in the healing power of arts because art is about sharing who
        we are. We find strength in pain - in other words, we use pain as the
        engine for the creative process and activism. These processes become our
        healing. Through them, we feel empowered and complete.
      </p>
      <nav>
        <div>Bouncing arrow</div>
      </nav>
    </main>
  )
}

export default Landing
