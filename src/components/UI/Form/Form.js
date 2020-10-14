import React from "react"
import Button from "../Button/Button"

const Form = () => {
  return (
    <form action="/" className="contact-form" autoComplete="new-one">
      <div className="input-animated">
        <input
          type="text"
          id="name"
          required
          pattern="\S+.*"
          placeholder="the placeholder"
          autoComplete="off"
        />
        <label htmlFor="name" className="label-name">
          <span className="content-name">Name</span>
        </label>
      </div>
      <div className="input-animated">
        <input
          type="email"
          id="email"
          required
          placeholder="the placeholder"
          autoComplete="na"
        />
        <label htmlFor="email" className="label-email">
          <span className="content-email">Email</span>
        </label>
      </div>
      <div>
        <textarea
          name="question"
          placeholder="Your Question"
          id="question"
          cols="30"
          rows="5"
          minLength="10"
          maxLength="100"
          required
        ></textarea>
      </div>
      <Button type="button" btnStyle="FORM">
        SEND
      </Button>
    </form>
  )
}

export default Form
