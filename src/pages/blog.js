import React, { Component } from 'react'
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default class blog extends Component {
  render() {
    return (
      <>
        <Layout>
          <h2>Blog Page</h2>
          <Link to="/">Back to Home</Link>
        </Layout>
      </>
    )
  }
}
