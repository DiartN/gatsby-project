import React from 'react'
import Container from '../components/Container'
import JSONData from '../data.json';

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
                                {JSONData.content.map((data, index) => {
                                    return (
                                        <>
                                            <li class={data.className}>
                                                <a href="#services">
                                                    <h4 key={`content_item_${index}`}>{data.item}</h4>
                                                    <p key={`content_item_${index}`}>{data.price}</p>
                                                </a>
                                            </li>
                                        </>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
