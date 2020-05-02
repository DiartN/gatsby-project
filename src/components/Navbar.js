import React from "react"
import { Link } from "gatsby"
import links from "../constants/links"
import '../css/theme.css'

const Navbar = () => {
  return (
    <>
      <header>
        <div class="Center">
          <div class="site-logo">
            <h1><a href="www.facebook.com">No<span>vem</span>ber</a></h1>
          </div>
          <div id="mobile_sec">
            <div class="mobile"><i class="fa fa-bars"></i><i class="fa fa-times"></i></div>
            <div class="menumobile">
                <nav class="Navigation">
                <ul>
                  {links.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link to={item.path}>{item.text}</Link>
                        <span class="menu-item-bg"></span>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </header>
    </>
  )
}
export default Navbar