import React from "react"
import classes from "./menu.module.css"

const menu = props => {
  const { open, closeMenu } = props

  let attachedClasses = [classes.Menu, classes.Closed, "mobile-only"]

  if (open) {
    attachedClasses = [classes.Menu, classes.Open, "mobile-only"]
  }

  return (
    <div class={attachedClasses.join(" ")}>
      <h1>Menu</h1>
      <button type="button" aria-label="close menu" onClick={closeMenu}>
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
      <nav>
        <ol>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ol>
      </nav>
    </div>
  )
}

export default menu
