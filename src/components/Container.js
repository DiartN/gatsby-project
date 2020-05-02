import React, { Component } from 'react'
import Layout from '../components/Layout'
import Footer from './Footer'

export default class Container extends Component {
  render() {
    return ( 
      <>
        <Layout />
        <div id="Container">
          { this.props.children } 
          <Footer/>
        </div>
      </>
    )
  }
}