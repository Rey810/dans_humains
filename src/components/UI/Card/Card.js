import React from "react"
import classes from "./Card.module.css"
import Img from "gatsby-image"

const Card = props => {
  const { title, body, link, headerImage } = props
  return (
    <div className={classes.Card}>
      <div className={classes.ImgContainer}>
        <Img
          fluid={headerImage.childImageSharp.fluid}
          className="top-0 left-0 right-0 bottom-0"
          alt="Project Image here"
        />
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default Card
