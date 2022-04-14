import React from "react"

import Layout from "../components/layout"

const Contact = () => {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <p>
        I can be best reached at{" "}
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          Twitter
        </a>
      </p>
      <ul>
        <li>Email: 123email@test.com</li>
        <li>Phone: (123) 456-7890</li>
        <li>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export default Contact
