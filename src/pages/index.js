import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h2>Hello.</h2>
      <h3>I lead a data science enterprise software product organization.</h3>
      <p>
        <Link to="/energy">Energy</Link>
      </p>
      <p>
        <Link to="/tickets">Tickets</Link>
      </p>
      <p>
        <Link to="/austin">Austin</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
