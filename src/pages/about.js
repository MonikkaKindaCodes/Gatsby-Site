import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>Here are some random facts about me.</p>
      <ol>
        <li>Front-End Engineer</li>
        <li>Works with HTML, CSS, and JavaScript</li>
        <li>Learning: Advanced JS, React, and TypeScript</li>
        <li>Reading</li>
        <li>Music</li>
        <li>Documentaries</li>
      </ol>
      <p>
        Have any further questions? Feel free to{" "}
        <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
