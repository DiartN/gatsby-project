import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default class Layout extends Component {
  render() {
    return ( 
      <>
        <div class="DesignHolder">
          <div class="LayoutFrame">
            <Navbar /> 
              { this.props.children }
          </div>
        </div>
      </>
    )
  }
}