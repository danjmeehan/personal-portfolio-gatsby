import React from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import "../styles/index.css"
import "./layout.css"

const Layout = props => {
  return (
    <div class="container">
      <div class="content">
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
