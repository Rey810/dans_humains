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
        <div className="mx-auto lg:w-4/5 xl:w-2/3">
          <blockquote>
            <p>
              <strong>Humane</strong> - marked by compassion, sympathy and
              consideration for others.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default Landing
