import React from "react"
import classes from "./Button.module.css"

const Button = props => {
  // btnStyle defines the CSS styling
  const { type, btnStyle, children } = props

  let attachedClasses = [classes[btnStyle], classes.Button].join(" ")

  let button = (
    <button className={attachedClasses} type={type}>
      {children}
    </button>
  )

  if (type === "link") {
    button = (
      <a className={attachedClasses} href="/">
        {children}
      </a>
    )
  }

  return button
}

export default Button
