import React from "react"
import classes from "../../animations/bounce.module.css"

const chevronDown = () => {
  return (
    <a href="/#first-child-section" className={`inline-block ${classes.Bounce}`}>
      <svg
        class="w-6 h-6 mt-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
        ></path>
      </svg>
    </a>
  )
}

export default chevronDown
