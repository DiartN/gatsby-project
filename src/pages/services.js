import React from 'react'
import Container from '../components/Container'

export default function services() {
    return (
        <>
            <Container>
                <div class="Services_sec" id="services">
                    <div class="Center">
                        <h2>our Services</h2>
                        <p> Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent<br /> taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        <div class="Line"></div>
                        <div class="Serviceside">
                            <ul>
                                <li class="Development">
                                    <a href="#services">
                                        <h4>DEVELOPMENT</h4>
                                    </a>
                                </li>
                                <li class="Desdin">
                                    <a href="#services">
                                        <h4>DESIGN</h4>
                                    </a>
                                </li>
                                <li class="Concept">
                                    <a href="#services">
                                        <h4>CONCEPT</h4>
                                    </a>
                                </li>
                                <li class="System">
                                    <a href="#services">
                                        <h4>SYSTEM</h4>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
