import React from "react"
import classes from "./Landing.module.css"

import ChevronDown from "../../assets/icons/ChevronDown"

const Landing = () => {
  return (
    <div className={`landing-container ${classes.Landing}`}>
      <div className="grid grid-cols-2 mx-auto lg:-mt-20 xl:-mt-40">
        <div className="w-2/5 mx-auto">
          <h1 className={classes.LandingHeader}>Dans Humains</h1>
          <p>
            Dans Humains is a female artist-based collective that works towards
            inspired by dance, movement, and research.
          </p>
          <nav>
            <ChevronDown />
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Landing
