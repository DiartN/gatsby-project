import React, { Component } from 'react'
import Layout from '../components/Layout'

export default class Container extends Component {
  render() {
    return ( 
      <>
        <Layout />
        <div id="Container">
          { this.props.children } 
        </div>
      </>
    )
  }
}