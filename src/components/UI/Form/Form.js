import React from "react"
import Button from "../Button/Button"
import classes from "./Form.module.css"

const Form = () => {
  return (
    <form action="/" className={classes.Form}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" placeholder="Name" />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="E-mail" />
      <label htmlFor="question">Question</label>
      <textarea
        name="question"
        placeholder="Your Question"
        id="question"
        cols="30"
        rows="5"
        maxLength="100"
      ></textarea>
      <Button type="button" btnStyle="FORM">
        SEND
      </Button>
    </form>
  )
}

export default Form
