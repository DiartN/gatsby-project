import React from 'react'
import Container from '../components/Container'
import Services from '../api/data.json';

export default function services() {
    return (
        <>
            <Container>
                <div className="Services_sec" id="services">
                    <div className="Center">
                        <h2>{Services.title}</h2>
                        <p> {Services.description}</p>
                        <div className="Line"></div>
                        <div className="Serviceside">
                            <ul>
                                {Services.content.map((data, index) => {
                                    return (
                                        <>
                                            <li className={data.className}>
                                                <a href="#services">
                                                    <h4 key={`${index}`}>{data.item}</h4>
                                                    <p  key={`${index}`}>{data.price}</p>
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
