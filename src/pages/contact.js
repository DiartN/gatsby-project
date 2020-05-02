import React, { Component } from 'react'
import Container from '../components/Container'
import FacebookImg from '../img/facebook-icn.png';
import TwitterImg from '../img/twitter-icn.png';
import GoogleImg from '../img/google-plus-icn.png';

export default class contact extends Component {
  render() {
    return (
      <>
        <Container>
          <div class="Contact_sec" id="contact">
            <div class="Contactside">
              <div class="Center">
                <h2>contact us</h2>
                <p>Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum<br /> feugiat velit mauris egestas quamut aliquam massa nisl quis neque. Suspendisse in orci enim.</p>
                <div class="Line"></div>
              </div>
            </div>
            <div class="Map">
              <div class="mapouter"><div class="gmap_canvas">
              <iframe width="1100" height="265" id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
              <a href="https://www.embedgooglemap.net/text-tools/random-line-picker/"></a>
              </div>
            <style>
              </style>
            </div>
            </div>
            <div class="Get_sec">
              <div class="Mid">
                <div class="Leftside">
                  <form action="#">
                    <fieldset>
                      <p><input type="text" value="" placeholder="NAME" class="field" /></p>
                      <p><input type="email" value="" placeholder="EMAIL" class="field" /></p>
                      <p><input type="text" value="" placeholder="TITLE" class="field" /></p>
                      <p><textarea cols="2" rows="2" placeholder="MESSAGE"></textarea></p>
                      <p><input type="submit" value="send" class="button" /></p>
                    </fieldset>
                  </form>
                </div>
                <div class="Rightside">
                  <h3>Get in touch !</h3>
                  <address>990 Proin Gravida Street, Aliquet Snean Tate,<br />Lincoln Way, San Francisco, California.</address>
                  <address class="Number">(+001) 001 002 0034, (+002) 009 008 0760<br />(+003) 456 050 0670</address>
                  <address class="Email"><a href="mailto:info@november.com">info@november.com</a></address>
                  <div class="clear"></div>
                  <ul>
                    <li>
                      <a rel="nofollow" href="http://www.facebook.com/templatemo" target="_parent">
                        <img src={FacebookImg} alt="image" />
                      </a>
                    </li>
                    <li><a href="#"><img src={TwitterImg} alt="image" /></a> </li>
                    <li><a href="#"><img src={GoogleImg} alt="image" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </>
    )
  }
}
