import React from "react"
import Card from "../../components/UI/Card/Card"

const Projects = props => {
  const { testImage } = props
  return (
    <div className="projects-container">
      <Card
        headerImage={testImage}
        title="A Title"
        body="Some interesting text goes here! Some interesting text goes here! Some interesting text goes here! Some interesting text goes here!"
      />
      <Card
        headerImage={testImage}
        title="A Title"
        body="Some interesting text goes here!"
      />
      <Card
        headerImage={testImage}
        title="A Title"
        body="Some interesting text goes here! Some interesting text goes here! Some interesting text goes here! Some interesting text goes here!"
      />
      <Card
        headerImage={testImage}
        title="A Title"
        body="Some interesting text goes here!"
      />
    </div>
  )
}

export default Projects

// GraphQL query here to get project data
