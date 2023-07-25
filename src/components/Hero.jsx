import React from 'react'

function Hero(){
    return(
        <div id="hero">
        <div class="container position-relative my-5">
            <div class="row">
                <div class="col-md-7">
                    <h1>Kickstart your Ideas Through Digital Product Development</h1>
                    <p>Our Software Development team is ready to build your Ideas within weeks ⚡️</p>
                    <div class="row justify-content-start">
                        <div class="col-2 d-grid gap-2 px-2">
                            <button type="button" class="hero-btn1 btn-block justify-content-center align-items-center">Try Now</button>
                        </div>
                        <div class="col-3 d-grid gap-2 px-2">
                            <button type="button" class="hero-btn2 btn-block justify-content-center align-items-center">See our portfolio</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <img src=".../nanostackweb/src/assets/images/hero.png" class="img-fluid p-4" alt=""/>
                </div>
            </div>
        </div>
    </div>
    )
}
export default  Hero