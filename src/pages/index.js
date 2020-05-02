import React, { Component } from 'react'
import Layout from "../components/Layout"
import About from "../pages/about"
import Services from "../pages/services"
import Pricing from "../pages/pricing"
import Contact from "../pages/contact"
import SliderImage1 from '../img/Slider-img1.jpg'

export default class index extends Component {
  render() {
    return ( 
      <>
        <Layout></Layout>
        <div class="Banner_sec" id="home">
          <div class="bannerside">
            <div class="Center">
              <div class="leftside">
                <h3>Responsive<span>Mobile Friendly</span></h3>
                <p>November is a professional website template that is responsive and mobile friendly for any device. This template is provided by templatemo.com</p>
                <a href="#about">MORE DETAILS</a>
              </div>
              <div class="rightside">
                <ul id="slider">
                  <li>
                    <div class="Slider">
                      <img src={SliderImage1} alt="Slider Image /" />
                      <div class="text">
                        <div class="Icon">
                          <ul><li><a href="www.facebook.com"><i class="fa fa-heart"></i>700</a></li><li><a href="#"><i class="fa fa-commenting"></i>150</a></li></ul>
                        </div>
                        <div class="Lorem"><p>lorem quis bibendum <span>Necagittis Nibel</span></p></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="bgcolor"></div>
        <About />
        <Services />
        <Pricing />
        <Contact />
      </>
    )
  }
}