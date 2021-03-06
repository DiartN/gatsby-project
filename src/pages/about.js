import React from 'react'
import Container from '../components/Container'
import AboutImage1 from '../img/about-img1.jpg'
import AboutImage2 from '../img/about-img2.jpg'

export default function about() {
    return ( 
    <>
        <Container>
            <div className="About_sec" id="about">
            <div className="Center">
                <h2>about us</h2>
                    <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit<br /> amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                    auctor a ornare odio.</p>
                    <div className="Line"></div>
                    <div className="Tabside">
                    <ul>
                        <li><a className="tabLink activeLink" id="cont-1">Mision</a></li>
                        <li><a className="tabLink" id="cont-2">vision</a></li>
                        <li><a className="tabLink" id="cont-3">Sponsors</a></li>
                    </ul>
                    <div className="clear"></div>
                    <div className="tabcontent" id="cont-1-1">
                        <div className="TabImage">
                            <div className="img1">
                                <figure><img src={AboutImage2} alt="image" /></figure>
                            </div>
                            <div className="img2">
                                <figure><img src={AboutImage1} alt="image" /></figure>
                            </div>
                        </div>
                        <div className="Description">
                            <h3>Sed ac urna sit amet lorem<span>taciti sociosqu ad litora torquent per conubia</span></h3>
                            <p>November is free HTML CSS website template from <span className="cyan">templatemo</span> and you can download and use it for any purpose. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elit nunc, porta
                                commodo euismod eu, fermentum a neque. Fusce scelerisque tincidunt auctor. Integer varius ullamcorper interdum.</p>
                            <p>Phasellus pretium elementum rhoncus. Aenean sit amet odio eu ante volutpat rutrum. Vestibulum ullamcorper faucibus orci, in blandit massa fringilla at. Nulla in fermentum eros. Suspendisse vitae aliquam metus.</p>
                        </div>
                    </div>
                    <div className="tabcontent hide" id="cont-2-1">
                        <div className="TabImage">
                            <div className="img1">
                                <figure><img src={AboutImage2} alt="image" /></figure>
                            </div>
                            <div className="img2">
                                <figure><img src={AboutImage1} alt="image" /></figure>
                            </div>
                        </div>
                        <div className="Description">
                            <h3>Smauris vitae consequat<span>Vestibulum ullamcorper faucibus orci</span></h3>
                            <p>Consequat ipsum, nec sagittis sem nibh id elit. Dui sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Namslo nec tellus a odio tincidunt auctor a ornare odio. Smauris vitae erat
                                consequat sitsrl amet soi mauris auctor eu in elit. </p>
                            <p>ClassName aptent taciti sociosqu ad litora torquent per conubia nostraper inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus.</p>
                        </div>
                    </div>
                    <div className="tabcontent hide" id="cont-3-1">
                        <div className="TabImage">
                            <div className="img1">
                                <figure><img src={AboutImage2} alt="image" /></figure>
                            </div>
                            <div className="img2">
                                <figure><img src={AboutImage1} alt="image" /></figure>
                            </div>
                        </div>
                        <div className="Description">
                            <h3>Donec molestie malesuada nisl <span>Aenean eget consequat diam</span></h3>
                            <p>Nullam at sem non enim aliquam ultrices non quis magna. In interdum interdum magna vitae accumsan. Etiam turpis tortor, malesuada vitae metus non, pharetra auctor mi. Pellentesque tincidunt enim vitae tincidunt euismod.
                                Integer id ex enim. Nullam euismod efficitur libero quis interdum.</p>
                            <p>Phasellus porttitor tempus nibh, id luctus nibh porta ac. Nunc sed metus est. Proin ut nisi metus. Duis consectetur purus iaculis ornare suscipit.</p>
                        </div>
                    </div>
                    <div className="clear"></div>
                    </div>
            </div>
        </div>
        </Container>
    </>
    )
}