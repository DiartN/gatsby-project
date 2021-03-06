import React from 'react'
import Container from '../components/Container'

export default function pricing() {
    return (
    <>
        <Container>
            <div class="Pricing_sec" id="pricing">
                <div class="Center">
                    <h2>Pricing</h2>
                    <p>All plans come with unlimited disk space. Our support can be as quick as 15 minutes to get a response. Sed non<br/> mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu.</p>
                    <div class="Line"></div>
                    <div class="Pricingside">
                        <ul>
                            <li>
                                <div class="Basic">
                                    <h5>basic</h5>
                                </div>
                                <div class="Dollar">
                                    <h2>$27.50</h2>
                                </div>
                                <div class="Band">
                                    <p>2,000 GB <span>Band width</span></p>
                                </div>
                                <div class="Band">
                                    <p>32 GB<span>memory</span></p>
                                </div>
                                <div class="Band">
                                    <p>Support<span>24 Hours</span></p>
                                </div>
                                <div class="Band last">
                                    <p>Update<span>$20</span></p>
                                </div>
                                <div class="Order">
                                    <a href="#">order now</a>
                                </div>
                            </li>
                            <li>
                                <div class="Basic">
                                    <h5>Biz</h5>
                                </div>
                                <div class="Dollar">
                                    <h2>$44.50</h2>
                                </div>
                                <div class="Band">
                                    <p>5,500 GB <span>Band width</span></p>
                                </div>
                                <div class="Band">
                                    <p>64 GB<span>memory</span></p>
                                </div>
                                <div class="Band">
                                    <p>Support<span>1 Hour</span></p>
                                </div>
                                <div class="Band last">
                                    <p>Update<span>$10</span></p>
                                </div>
                                <div class="Order">
                                    <a href="#">order now</a>
                                </div>
                            </li>
                            <li>
                                <div class="Basic">
                                    <h5>Pro</h5>
                                </div>
                                <div class="Dollar">
                                    <h2>$72.50</h2>
                                </div>
                                <div class="Band">
                                    <p>12,000 GB <span>Band width</span></p>
                                </div>
                                <div class="Band">
                                    <p>128 GB<span>memory</span></p>
                                </div>
                                <div class="Band">
                                    <p>Support<span>15 Mins</span></p>
                                </div>
                                <div class="Band last">
                                    <p>Update<span>Free</span></p>
                                </div>
                                <div class="Order">
                                    <a href="#">order now</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    </>
    )
}
