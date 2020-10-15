import React from "react"
import classes from "./Card.module.css"
// import Img from "gatsby-image"

const Card = props => {
  const { title, body, link } = props
  return (
    <div className={classes.Card}>
      <div className={classes.ImgContainer}>
        <img src="/test.jpg" alt="Project Image here" />
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default Card
