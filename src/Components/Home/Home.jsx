import React, { Component } from 'react';
import '../Home/Home.css';


import google1 from '../../img/affiliate-marketing-ad-sense.jpg';

import myLap1 from '../../img/myLap1.png';
import myLap2 from '../../img/myLap2.png';
import myLap3 from '../../img/myLap3.png';

import slider1 from '../../img/slider1.png';
import slider2 from '../../img/slider2.png';
import slider3 from '../../img/slider3.png';
import slider4 from '../../img/slider4.png';
import slider5 from '../../img/slider5.png';
import slider6 from '../../img/slider6.png';
import slider7 from '../../img/slider7.png';
import slider8 from '../../img/slider8.png';
import slider9 from '../../img/slider9.png';
import slider10 from '../../img/slider10.png';

import tap1 from '../../img/tap1.png';
import tap2 from '../../img/tap2.png';
import tap3 from '../../img/tap3.png';
import tap4 from '../../img/tap4.png';
import tap5 from '../../img/tap5.png';
import tap6 from '../../img/tap6.png';

import Ap from '../../img/Ap.png';
import Huawei from '../../img/Huawei.png';
import Google from '../../img/Google.png';

import Carousel from 'react-elastic-carousel';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import $ from 'jquery';

class Home extends React.Component {
    state = {}
    // Arro

    componentDidMount = () => {

        let aboutOffsetTop = $("#about").offset().top;

        $(window).scroll(function () {
            let wScroll = $(window).scrollTop();
            if (wScroll > aboutOffsetTop - 50) {
                $("#chevronBtn").fadeIn(500);
            }
            else {
                $("#chevronBtn").fadeOut(500);
            }
        })

        $('#chevronBtn').on('click', function () {
            $("html,body").animate({ scrollTop: 0 }, 2000);
        })
    }

    render() {
        {/* section 1 */ }
        const breakPoints = [
            { width: 400, itemsToShow: 1 },
            // { width: 450, itemsToShow: 2, },
            { width: 450, itemsToShow: 2 },
            { width: 600, itemsToShow: 3 },
            { width: 800, itemsToShow: 4 },
            { width: 940, itemsToShow: 5 },
            { width: 1100, itemsToShow: 6 },
        ];

        {/* section 2 */ }

        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 11,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1250,
                    settings: {
                        slidesToShow: 8,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1050,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 950,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        return <>
            {/* google adsense */}
            <div className="container-container">
                <div className="google1">
                    <div className="lear">
                        {/* <img src={google1} alt="" /> */}

                    </div>
                </div>
            </div>


            {/* section 1 */}
            <section id="about" className=" mt-5">
                <div className="container-container">
                    <Carousel breakPoints={breakPoints} >
                        <div class="cds mx-1">
                            <div className="imgCard">
                                <img src={myLap2} class="img-fluid" alt="..." />
                            </div>
                            <div class="cards">
                                <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                <p className="ch5">329.99 SAR</p>
                            </div>
                            <div>
                                <div className="ch6"></div>
                                <div className="boxShare d-flex justify-content-around align-items-center">
                                    <a href="/">
                                        <i class=" ml-3 far fa-heart"></i>
                                    </a>
                                    <span className="py-3 borderR "></span>
                                    <a href="/">
                                        <i class="fas fa-share-alt"></i>
                                    </a>
                                    <span className="py-3 borderR "></span>
                                    <a href="/">
                                        <i class="mr-3 fas fa-eye"></i>
                                    </a>
                                </div>
                            </div>
                            <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                        </div>
                        <div class="cds mx-1">
                            <div className="imgCard">
                                <img src={myLap3} class="img-fluid" alt="..." />
                            </div>
                            <div class="cards">
                                <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                <p className="ch5">329.99 SAR</p>
                            </div>
                            <div>
                                <div className="ch6"></div>
                                <div className="boxShare d-flex justify-content-around align-items-center">
                                    <a href="/">
                                        <i class=" ml-3 far fa-heart"></i>
                                    </a>
                                    <span className="py-3 borderR "></span>
                                    <a href="/">
                                        <i class="fas fa-share-alt"></i>
                                    </a>
                                    <span className="py-3 borderR "></span>
                                    <a href="/">
                                        <i class="mr-3 fas fa-eye"></i>
                                    </a>
                                </div>
                            </div>

                            <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                        </div>
                        <div class="cds mx-1">
                            <div className="imgCard">
                                <img src={myLap1} class="img-fluid" alt="..." />
                            </div>
                            <div class="cards">
                                <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                <p className="ch5">329.99 SAR</p>
                            </div>
                            <div>
                                <div className="ch6"></div>
                                <div className="boxShare d-flex justify-content-around align-items-center">
                                    <a href="/">
                                        <i class=" ml-3 far fa-heart"></i>
                                    </a>
                                    <span className="py-3 borderR "></span>
                                    <a href="/">
                                        <i class="fas fa-share-alt"></i>
                                    </a>
                                    <span className="py-3 borderR "></span>
                                    <a href="/">
                                        <i class="mr-3 fas fa-eye"></i>
                                    </a>
                                </div>
                            </div>

                            <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                        </div>
                        <div class="cds mx-1">
                            <div className="imgCard">
                                <img src={myLap3} class="img-fluid" alt="..." />
                            </div>
                            <div class="cards">
                                <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                <p className="ch5">329.99 SAR</p>
                            </div>
                            <div>
                                <div className="ch6"></div>
                                <div className="boxShare d-flex justify-content-around align-items-center">
                                    <a href="/">
                                        <i class=" ml-3 far fa-heart"></i>
                                    </a>
                                    <span className="py-3 borderR "></span>
                                    <a href="/">
                                        <i class="fas fa-share-alt"></i>
                                    </a>
                                    <span className="py-3 borderR "></span>
                                    <a href="/">
                                        <i class="mr-3 fas fa-eye"></i>
                                    </a>
                                </div>
                            </div>

                            <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                        </div>
                        <div class="cds mx-1">
                            <div className="imgCard">
                                <img src={myLap2} class="img-fluid" alt="..." />
                            </div>
                            <div class="cards">
                                <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                <p className="ch5">329.99 SAR</p>
                            </div>
                            <div>
                                <div className="ch6"></div>
                                <div className="boxShare d-flex justify-content-around align-items-center">
                                    <a href="/">
                                        <i class=" ml-3 far fa-heart"></i>
                                    </a>
                                    <span className="py-3 borderR "></span>
                                    <a href="/">
                                        <i class="fas fa-share-alt"></i>
                                    </a>
                                    <span className="py-3 borderR "></span>
                                    <a href="/">
                                        <i class="mr-3 fas fa-eye"></i>
                                    </a>
                                </div>
                            </div>
                            <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                        </div>
                        <div class="cds mx-1">
                            <div className="imgCard">
                                <img src={myLap1} class="img-fluid" alt="..." />
                            </div>
                            <div class="cards">
                                <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                <p className="ch5">329.99 SAR</p>
                            </div>
                            <div>
                                <div className="ch6"></div>
                                <div className="boxShare d-flex justify-content-around align-items-center">
                                    <a href="/">
                                        <i class=" ml-3 far fa-heart"></i>
                                    </a>
                                    <span className="py-3 borderR "></span>
                                    <a href="/">
                                        <i class="fas fa-share-alt"></i>
                                    </a>
                                    <span className="py-3 borderR "></span>
                                    <a href="/">
                                        <i class="mr-3 fas fa-eye"></i>
                                    </a>
                                </div>
                            </div>

                            <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                        </div>
                    </Carousel>
                </div>
            </section>

            {/* section 2 */}
            <section className=" mt-4">
                <div className="container-container">
                    <div className="Sliders ">
                        <span className="left"><i class="fas fa-chevron-left"></i></span>
                        <span className="right"> <i class="fas fa-chevron-right"></i></span>

                        <Slider {...settings}>

                            <div>
                                <div>
                                    <div className="box-slidr">
                                        <img className="img-fluid" src={slider1} alt="" />
                                    </div>
                                    <div className="titel ">
                                        <h6 className="mt-3 ">ELECTONICS</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" coBox ">
                                    <div>

                                    </div>
                                    <div className="box-slidr">
                                        <img className="img-fluid" src={slider2} alt="" />
                                    </div>
                                    <div className="titel">
                                        <div>
                                            <h6 className="mt-3 ">MOBILES</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" coBox ">
                                    <div>

                                    </div>
                                    <div className="box-slidr">
                                        <img className="img-fluid" src={slider3} alt="" />
                                    </div>
                                    <div className="titel">
                                        <div>
                                            <h6 className="mt-3 ">BEAUTY</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" coBox ">
                                    <div>

                                    </div>
                                    <div className="box-slidr">
                                        <img className="img-fluid" src={slider4} alt="" />
                                    </div>
                                    <div className="titel">
                                        <div>
                                            <h6 className="mt-3 ">BABY ESSENTIALS</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" coBox ">
                                    <div>

                                    </div>
                                    <div className="box-slidr">
                                        <img className="img-fluid" src={slider5} alt="" />
                                    </div>
                                    <div className="titel">
                                        <div>
                                            <h6 className="mt-3 ">GROCERIES</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" coBox ">
                                    <div>

                                    </div>
                                    <div className="box-slidr">
                                        <img className="img-fluid" src={slider6} alt="" />
                                    </div>
                                    <div className="titel">
                                        <div>
                                            <h6 className="mt-3 ">HOME & KITCHEN</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" coBox ">
                                    <div>

                                    </div>
                                    <div className="box-slidr">
                                        <img className="img-fluid" src={slider7} alt="" />
                                    </div>
                                    <div className="titel">
                                        <div>
                                            <h6 className="mt-3 ">TOYS & GAMES</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" coBox ">
                                    <div>

                                    </div>
                                    <div className="box-slidr">
                                        <img className="img-fluid" src={slider8} alt="" />
                                    </div>
                                    <div className="titel">
                                        <div>
                                            <h6 className="mt-3 ">GAMING</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" coBox ">
                                    <div>

                                    </div>
                                    <div className="box-slidr">
                                        <img className="img-fluid" src={slider9} alt="" />
                                    </div>
                                    <div className="titel">
                                        <div>
                                            <h6 className="mt-3 ">MOBILES</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" coBox ">
                                    <div>

                                    </div>
                                    <div className="box-slidr">
                                        <img className="img-fluid" src={slider10} alt="" />
                                    </div>
                                    <div className="titel">
                                        <div>
                                            <h6 className="mt-3 ">SPORTS & OUTDOORS</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" coBox ">
                                    <div>

                                    </div>
                                    <div className="box-slidr">
                                        <img className="img-fluid" src={slider1} alt="" />
                                    </div>
                                    <div className="titel">
                                        <div>
                                            <h6 className="mt-3 ">APPLIANCES</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" coBox ">
                                    <div>

                                    </div>
                                    <div className="box-slidr">
                                        <img className="img-fluid" src={slider2} alt="" />
                                    </div>
                                    <div className="titel">
                                        <div>
                                            <h6 className="mt-3 ">ELECTONICS</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" coBox ">
                                    <div>

                                    </div>
                                    <div className="box-slidr">
                                        <img className="img-fluid" src={slider3} alt="" />
                                    </div>
                                    <div className="titel">
                                        <div>
                                            <h6 className="mt-3 ">MOBILES</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" coBox ">
                                    <div>

                                    </div>
                                    <div className="box-slidr">
                                        <img className="img-fluid" src={slider4} alt="" />
                                    </div>
                                    <div className="titel">
                                        <div>
                                            <h6 className="mt-3 ">BEAUTY</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" coBox ">
                                    <div>

                                    </div>
                                    <div className="box-slidr">
                                        <img className="img-fluid" src={slider5} alt="" />
                                    </div>
                                    <div className="titel">
                                        <div>
                                            <h6 className="mt-3 ">BABY ESSENTIALS</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" coBox ">
                                    <div>

                                    </div>
                                    <div className="box-slidr">
                                        <img className="img-fluid" src={slider6} alt="" />
                                    </div>
                                    <div className="titel">
                                        <div>
                                            <h6 className="mt-3 ">GROCERIES</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" coBox ">
                                    <div>

                                    </div>
                                    <div className="box-slidr">
                                        <img className="img-fluid" src={slider7} alt="" />
                                    </div>
                                    <div className="titel">
                                        <div>
                                            <h6 className="mt-3 ">HOME & KITCHEN</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" coBox ">
                                    <div>

                                    </div>
                                    <div className="box-slidr">
                                        <img className="img-fluid" src={slider8} alt="" />
                                    </div>
                                    <div className="titel">
                                        <div>
                                            <h6 className="mt-3 ">TOYS & GAMES</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" coBox ">
                                    <div>

                                    </div>
                                    <div className="box-slidr">
                                        <img className="img-fluid" src={slider9} alt="" />
                                    </div>
                                    <div className="titel">
                                        <div>
                                            <h6 className="mt-3 ">GAMING</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" coBox ">
                                    <div>

                                    </div>
                                    <div className="box-slidr">
                                        <img className="img-fluid" src={slider10} alt="" />
                                    </div>
                                    <div className="titel">
                                        <div>
                                            <h6 className="mt-3 ">MOBILES</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" coBox ">
                                    <div>

                                    </div>
                                    <div className="box-slidr">
                                        <img className="img-fluid" src={slider1} alt="" />
                                    </div>
                                    <div className="titel">
                                        <div>
                                            <h6 className="mt-3 ">SPORTS & OUTDOORS</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" coBox ">
                                    <div>

                                    </div>
                                    <div className="box-slidr">
                                        <img className="img-fluid" src={slider2} alt="" />
                                    </div>
                                    <div className="titel">
                                        <div>
                                            <h6 className="mt-3 ">APPLIANCES</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>

                </div>
            </section>

            {/* section 3 */}
            <section className="section3 py-4">
                <div className="container-container">
                    <div>
                        <h2 className="mb-3">FEATURED ADS</h2>
                        <div className="items ">
                            <div className="item">
                                <div class="cds">
                                <div className="imgCard">
                                            <img src={myLap1} class="img-fluid" alt="..." />
                                        </div>
                                    <div class="cards">
                                        <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                        <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                        <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                        <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                        <p className="ch5">329.99 SAR</p>
                                    </div>
                                    <div>
                                        <div className="ch6"></div>
                                        <div className="boxShare d-flex justify-content-around align-items-center">
                                            <a href="/">
                                                <i class=" ml-3 far fa-heart"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="fas fa-share-alt"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="mr-3 fas fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                </div>
                            </div>

                            <div className="item">
                                <div class="cds">
                                <div className="imgCard">
                                            <img src={myLap2} class="img-fluid" alt="..." />
                                        </div>
                                    <div class="cards">
                                        <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                        <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                        <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                        <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                        <p className="ch5">329.99 SAR</p>
                                    </div>
                                    <div>
                                        <div className="ch6"></div>
                                        <div className="boxShare d-flex justify-content-around align-items-center">
                                            <a href="/">
                                                <i class=" ml-3 far fa-heart"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="fas fa-share-alt"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="mr-3 fas fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                </div>
                            </div>

                            <div className="item">
                                <div class="cds">
                                <div className="imgCard">
                                            <img src={myLap1} class="img-fluid" alt="..." />
                                        </div>
                                    <div class="cards">
                                        <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                        <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                        <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                        <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                        <p className="ch5">329.99 SAR</p>
                                    </div>
                                    <div>
                                        <div className="ch6"></div>
                                        <div className="boxShare d-flex justify-content-around align-items-center">
                                            <a href="/">
                                                <i class=" ml-3 far fa-heart"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="fas fa-share-alt"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="mr-3 fas fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                </div>
                            </div>

                            <div className="item">
                                <div class="cds">
                                <div className="imgCard">
                                            <img src={myLap3} class="img-fluid" alt="..." />
                                        </div>
                                    <div class="cards">
                                        <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                        <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                        <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                        <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                        <p className="ch5">329.99 SAR</p>
                                    </div>
                                    <div>
                                        <div className="ch6"></div>
                                        <div className="boxShare d-flex justify-content-around align-items-center">
                                            <a href="/">
                                                <i class=" ml-3 far fa-heart"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="fas fa-share-alt"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="mr-3 fas fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                </div>
                            </div>

                            <div className="item">
                                <div class="cds">
                                <div className="imgCard">
                                            <img src={myLap1} class="img-fluid" alt="..." />
                                        </div>
                                    <div class="cards">
                                        <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                        <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                        <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                        <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                        <p className="ch5">329.99 SAR</p>
                                    </div>
                                    <div>
                                        <div className="ch6"></div>
                                        <div className="boxShare d-flex justify-content-around align-items-center">
                                            <a href="/">
                                                <i class=" ml-3 far fa-heart"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="fas fa-share-alt"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="mr-3 fas fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                </div>
                            </div>

                            <div className="item">
                                <div class="cds">
                                <div className="imgCard">
                                            <img src={myLap2} class="img-fluid" alt="..." />
                                        </div>
                                    <div class="cards">
                                        <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                        <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                        <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                        <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                        <p className="ch5">329.99 SAR</p>
                                    </div>
                                    <div>
                                        <div className="ch6"></div>
                                        <div className="boxShare d-flex justify-content-around align-items-center">
                                            <a href="/">
                                                <i class=" ml-3 far fa-heart"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="fas fa-share-alt"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="mr-3 fas fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                </div>
                            </div>
                            <div className="item">
                                <div class="cds">
                                <div className="imgCard">
                                            <img src={myLap3} class="img-fluid" alt="..." />
                                        </div>
                                    <div class="cards">
                                        <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                        <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                        <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                        <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                        <p className="ch5">329.99 SAR</p>
                                    </div>
                                    <div>
                                        <div className="ch6"></div>
                                        <div className="boxShare d-flex justify-content-around align-items-center">
                                            <a href="/">
                                                <i class=" ml-3 far fa-heart"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="fas fa-share-alt"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="mr-3 fas fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                </div>
                            </div>
                            <div className="item">
                                <div class="cds">
                                <div className="imgCard">
                                            <img src={myLap1} class="img-fluid" alt="..." />
                                        </div>
                                    <div class="cards">
                                        <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                        <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                        <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                        <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                        <p className="ch5">329.99 SAR</p>
                                    </div>
                                    <div>
                                        <div className="ch6"></div>
                                        <div className="boxShare d-flex justify-content-around align-items-center">
                                            <a href="/">
                                                <i class=" ml-3 far fa-heart"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="fas fa-share-alt"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="mr-3 fas fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                </div>
                            </div>
                            <div className="item">
                                <div class="cds">
                                <div className="imgCard">
                                            <img src={myLap3} class="img-fluid" alt="..." />
                                        </div>
                                    <div class="cards">
                                        <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                        <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                        <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                        <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                        <p className="ch5">329.99 SAR</p>
                                    </div>
                                    <div>
                                        <div className="ch6"></div>
                                        <div className="boxShare d-flex justify-content-around align-items-center">
                                            <a href="/">
                                                <i class=" ml-3 far fa-heart"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="fas fa-share-alt"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="mr-3 fas fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                </div>
                            </div>
                            <div className="item">
                                <div class="cds">
                                <div className="imgCard">
                                            <img src={myLap2} class="img-fluid" alt="..." />
                                        </div>
                                    <div class="cards">
                                        <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                        <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                        <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                        <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                        <p className="ch5">329.99 SAR</p>
                                    </div>
                                    <div>
                                        <div className="ch6"></div>
                                        <div className="boxShare d-flex justify-content-around align-items-center">
                                            <a href="/">
                                                <i class=" ml-3 far fa-heart"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="fas fa-share-alt"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="mr-3 fas fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                </div>
                            </div>
                            <div className="item">
                                <div class="cds">
                                <div className="imgCard">
                                            <img src={myLap1} class="img-fluid" alt="..." />
                                        </div>
                                    <div class="cards">
                                        <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                        <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                        <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                        <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                        <p className="ch5">329.99 SAR</p>
                                    </div>
                                    <div>
                                        <div className="ch6"></div>
                                        <div className="boxShare d-flex justify-content-around align-items-center">
                                            <a href="/">
                                                <i class=" ml-3 far fa-heart"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="fas fa-share-alt"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="mr-3 fas fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                </div>
                            </div>
                            <div className="item">
                                <div class="cds">
                                <div className="imgCard">
                                            <img src={myLap2} class="img-fluid" alt="..." />
                                        </div>
                                    <div class="cards">
                                        <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                        <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                        <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                        <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                        <p className="ch5">329.99 SAR</p>
                                    </div>
                                    <div>
                                        <div className="ch6"></div>
                                        <div className="boxShare d-flex justify-content-around align-items-center">
                                            <a href="/">
                                                <i class=" ml-3 far fa-heart"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="fas fa-share-alt"></i>
                                            </a>
                                            <span className="py-3 borderR "></span>
                                            <a href="/">
                                                <i class="mr-3 fas fa-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                </div>
                            </div>

                            <div class="clr"></div>
                        </div>
                        <div className="pt-3">
                            <button class="btnShow w-100 p-3"> <i class="fas fa-spinner "></i> Show More</button>
                        </div>
                    </div>



                </div>
            </section>

            {/* google adsense */}
            <div className="container-container">
                <div className="google2">
                    <div className="lear">
                        {/* <img src={google1} alt="" /> */}

                    </div>
                </div>
            </div>
            {/* ========================================================== */}
            {/* section 4 */}
            <section className="section4 mt-4">
                <div className="container-cr">
                    <h2 className="">LATEST ADS <span>Discover the latest ads published by our advertisers</span> </h2>

                    <div className="row">
                        <div className=" col-xl-10 col-lg-9 col-md-8 col-sm-6">
                            <div className="items2 ">
                                <div className="item2">
                                    <div class="cds">
                                        <div className="imgCard">
                                            <img src={tap5} class="img-fluid" alt="..." />
                                        </div>
                                        <div class="cards">
                                            <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                            <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                            <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                            <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                            <p className="ch5">329.99 SAR</p>
                                        </div>
                                        <div>
                                            <div className="ch6"></div>
                                            <div className="boxShare d-flex justify-content-around align-items-center">
                                                <a href="/">
                                                    <i class=" ml-3 far fa-heart"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="fas fa-share-alt"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="mr-3 fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                    </div>
                                </div>
                                <div className="item2">
                                    <div class="cds">
                                        <div className="imgCard">
                                            <img src={tap5} class="img-fluid" alt="..." />
                                        </div>
                                        <div class="cards">
                                            <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                            <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                            <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                            <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                            <p className="ch5">329.99 SAR</p>
                                        </div>
                                        <div>
                                            <div className="ch6"></div>
                                            <div className="boxShare d-flex justify-content-around align-items-center">
                                                <a href="/">
                                                    <i class=" ml-3 far fa-heart"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="fas fa-share-alt"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="mr-3 fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                    </div>
                                </div>
                                <div className="item2">
                                    <div class="cds">
                                        <div className="imgCard">
                                            <img src={tap5} class="img-fluid" alt="..." />
                                        </div>
                                        <div class="cards">
                                            <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                            <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                            <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                            <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                            <p className="ch5">329.99 SAR</p>
                                        </div>
                                        <div>
                                            <div className="ch6"></div>
                                            <div className="boxShare d-flex justify-content-around align-items-center">
                                                <a href="/">
                                                    <i class=" ml-3 far fa-heart"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="fas fa-share-alt"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="mr-3 fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                    </div>
                                </div>
                                <div className="item2">
                                    <div class="cds">
                                        <div className="imgCard">
                                            <img src={tap5} class="img-fluid" alt="..." />
                                        </div>
                                        <div class="cards">
                                            <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                            <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                            <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                            <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                            <p className="ch5">329.99 SAR</p>
                                        </div>
                                        <div>
                                            <div className="ch6"></div>
                                            <div className="boxShare d-flex justify-content-around align-items-center">
                                                <a href="/">
                                                    <i class=" ml-3 far fa-heart"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="fas fa-share-alt"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="mr-3 fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                    </div>
                                </div>
                                <div className="item2">
                                    <div class="cds">
                                        <div className="imgCard">
                                            <img src={tap5} class="img-fluid" alt="..." />
                                        </div>
                                        <div class="cards">
                                            <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                            <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                            <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                            <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                            <p className="ch5">329.99 SAR</p>
                                        </div>
                                        <div>
                                            <div className="ch6"></div>
                                            <div className="boxShare d-flex justify-content-around align-items-center">
                                                <a href="/">
                                                    <i class=" ml-3 far fa-heart"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="fas fa-share-alt"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="mr-3 fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                    </div>
                                </div>
                                <div className="item2">
                                    <div class="cds">
                                        <div className="imgCard">
                                            <img src={tap5} class="img-fluid" alt="..." />
                                        </div>
                                        <div class="cards">
                                            <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                            <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                            <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                            <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                            <p className="ch5">329.99 SAR</p>
                                        </div>
                                        <div>
                                            <div className="ch6"></div>
                                            <div className="boxShare d-flex justify-content-around align-items-center">
                                                <a href="/">
                                                    <i class=" ml-3 far fa-heart"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="fas fa-share-alt"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="mr-3 fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                    </div>
                                </div>
                                <div className="item2">
                                    <div class="cds">
                                        <div className="imgCard">
                                            <img src={tap5} class="img-fluid" alt="..." />
                                        </div>
                                        <div class="cards">
                                            <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                            <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                            <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                            <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                            <p className="ch5">329.99 SAR</p>
                                        </div>
                                        <div>
                                            <div className="ch6"></div>
                                            <div className="boxShare d-flex justify-content-around align-items-center">
                                                <a href="/">
                                                    <i class=" ml-3 far fa-heart"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="fas fa-share-alt"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="mr-3 fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                    </div>
                                </div>

                                <div className="item2">
                                    <div className="go-googel">

                                        <img src={google1} class="img-fluid" alt="..." />

                                    </div>

                                </div>
                                <div className="item2">
                                    <div class="cds">
                                        <div className="imgCard">
                                            <img src={tap5} class="img-fluid" alt="..." />
                                        </div>
                                        <div class="cards">
                                            <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                            <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                            <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                            <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                            <p className="ch5">329.99 SAR</p>
                                        </div>
                                        <div>
                                            <div className="ch6"></div>
                                            <div className="boxShare d-flex justify-content-around align-items-center">
                                                <a href="/">
                                                    <i class=" ml-3 far fa-heart"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="fas fa-share-alt"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="mr-3 fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                    </div>
                                </div>
                                <div className="item2">
                                    <div class="cds">
                                        <div className="imgCard">
                                            <img src={tap5} class="img-fluid" alt="..." />
                                        </div>
                                        <div class="cards">
                                            <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                            <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                            <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                            <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                            <p className="ch5">329.99 SAR</p>
                                        </div>
                                        <div>
                                            <div className="ch6"></div>
                                            <div className="boxShare d-flex justify-content-around align-items-center">
                                                <a href="/">
                                                    <i class=" ml-3 far fa-heart"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="fas fa-share-alt"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="mr-3 fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                    </div>
                                </div>
                                <div className="item2">
                                    <div class="cds">
                                        <div className="imgCard">
                                            <img src={tap5} class="img-fluid" alt="..." />
                                        </div>
                                        <div class="cards">
                                            <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                            <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                            <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                            <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                            <p className="ch5">329.99 SAR</p>
                                        </div>
                                        <div>
                                            <div className="ch6"></div>
                                            <div className="boxShare d-flex justify-content-around align-items-center">
                                                <a href="/">
                                                    <i class=" ml-3 far fa-heart"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="fas fa-share-alt"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="mr-3 fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                    </div>
                                </div>
                                <div className="item2">
                                    <div class="cds">
                                        <div className="imgCard">
                                            <img src={tap5} class="img-fluid" alt="..." />
                                        </div>
                                        <div class="cards">
                                            <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                            <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                            <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                            <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                            <p className="ch5">329.99 SAR</p>
                                        </div>
                                        <div>
                                            <div className="ch6"></div>
                                            <div className="boxShare d-flex justify-content-around align-items-center">
                                                <a href="/">
                                                    <i class=" ml-3 far fa-heart"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="fas fa-share-alt"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="mr-3 fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                    </div>
                                </div>
                                <div className="item2">
                                    <div class="cds">
                                        <div className="imgCard">
                                            <img src={tap5} class="img-fluid" alt="..." />
                                        </div>
                                        <div class="cards">
                                            <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                            <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                            <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                            <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                            <p className="ch5">329.99 SAR</p>
                                        </div>
                                        <div>
                                            <div className="ch6"></div>
                                            <div className="boxShare d-flex justify-content-around align-items-center">
                                                <a href="/">
                                                    <i class=" ml-3 far fa-heart"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="fas fa-share-alt"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="mr-3 fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                    </div>
                                </div>
                                <div className="item2">
                                    <div class="cds">
                                        <div className="imgCard">
                                            <img src={tap5} class="img-fluid" alt="..." />
                                        </div>
                                        <div class="cards">
                                            <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                            <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                            <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                            <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                            <p className="ch5">329.99 SAR</p>
                                        </div>
                                        <div>
                                            <div className="ch6"></div>
                                            <div className="boxShare d-flex justify-content-around align-items-center">
                                                <a href="/">
                                                    <i class=" ml-3 far fa-heart"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="fas fa-share-alt"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="mr-3 fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                    </div>
                                </div>
                                <div className="item2">
                                    <div class="cds">
                                        <div className="imgCard">
                                            <img src={tap5} class="img-fluid" alt="..." />
                                        </div>
                                        <div class="cards">
                                            <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                            <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                            <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                            <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                            <p className="ch5">329.99 SAR</p>
                                        </div>
                                        <div>
                                            <div className="ch6"></div>
                                            <div className="boxShare d-flex justify-content-around align-items-center">
                                                <a href="/">
                                                    <i class=" ml-3 far fa-heart"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="fas fa-share-alt"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="mr-3 fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                    </div>
                                </div>
                                <div className="item2">
                                    <div class="cds">
                                        <div className="imgCard">
                                            <img src={tap5} class="img-fluid" alt="..." />
                                        </div>
                                        <div class="cards">
                                            <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                            <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                            <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                            <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                            <p className="ch5">329.99 SAR</p>
                                        </div>
                                        <div>
                                            <div className="ch6"></div>
                                            <div className="boxShare d-flex justify-content-around align-items-center">
                                                <a href="/">
                                                    <i class=" ml-3 far fa-heart"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="fas fa-share-alt"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="mr-3 fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                    </div>
                                </div>
                                <div className="item2">
                                    <div class="cds">
                                        <div className="imgCard">
                                            <img src={tap5} class="img-fluid" alt="..." />
                                        </div>
                                        <div class="cards">
                                            <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                            <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                            <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                            <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                            <p className="ch5">329.99 SAR</p>
                                        </div>
                                        <div>
                                            <div className="ch6"></div>
                                            <div className="boxShare d-flex justify-content-around align-items-center">
                                                <a href="/">
                                                    <i class=" ml-3 far fa-heart"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="fas fa-share-alt"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="mr-3 fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                    </div>
                                </div>
                                <div className="item2">
                                    <div class="cds">
                                        <div className="imgCard">
                                            <img src={tap5} class="img-fluid" alt="..." />
                                        </div>
                                        <div class="cards">
                                            <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                            <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                            <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                            <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                            <p className="ch5">329.99 SAR</p>
                                        </div>
                                        <div>
                                            <div className="ch6"></div>
                                            <div className="boxShare d-flex justify-content-around align-items-center">
                                                <a href="/">
                                                    <i class=" ml-3 far fa-heart"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="fas fa-share-alt"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="mr-3 fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                    </div>
                                </div>
                                <div className="item2">
                                    <div class="cds">
                                        <div className="imgCard">
                                            <img src={tap5} class="img-fluid" alt="..." />
                                        </div>
                                        <div class="cards">
                                            <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                            <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                            <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                            <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                            <p className="ch5">329.99 SAR</p>
                                        </div>
                                        <div>
                                            <div className="ch6"></div>
                                            <div className="boxShare d-flex justify-content-around align-items-center">
                                                <a href="/">
                                                    <i class=" ml-3 far fa-heart"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="fas fa-share-alt"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="mr-3 fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                    </div>
                                </div>
                                <div className="item2">
                                    <div class="cds">
                                        <div className="imgCard">
                                            <img src={tap5} class="img-fluid" alt="..." />
                                        </div>
                                        <div class="cards">
                                            <p className="ch1">8.0 Inch CHUWI Hi8 Air</p>
                                            <p className="ch2"> <i class="fas fa-clock mr-2"></i> 06/09/2021 05:23 PM</p>
                                            <p className="ch3"> <i class="fas fa-map-marker-alt mr-2"></i> Riyadh, Saudi Arabia</p>
                                            <p className="ch4"> <i class="fas fa-shopping-cart mr-1"></i> For Sale</p>
                                            <p className="ch5">329.99 SAR</p>
                                        </div>
                                        <div>
                                            <div className="ch6"></div>
                                            <div className="boxShare d-flex justify-content-around align-items-center">
                                                <a href="/">
                                                    <i class=" ml-3 far fa-heart"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="fas fa-share-alt"></i>
                                                </a>
                                                <span className="py-3 borderR "></span>
                                                <a href="/">
                                                    <i class="mr-3 fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className=" Featured"> <i class="fas fa-star"></i> Featured</div>
                                    </div>
                                </div>
    
                   
                
    
  
                                <div class="clr"></div>
                            </div>
                            <div className="pt-3">
                                <button class="btnShow w-100 p-3"> <i class="fas fa-spinner "></i> Show More</button>
                            </div>
                        </div>

                        <div className=" col-xl-2  col-lg-3 col-md-4 col-sm-6">
                            <div className="cdsgoogle ">
                                <img src={google1} alt="" />
                            </div>
                            <div className="cdsgoogle mt-3">
                                <img src={google1} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ========================================================== */}
            {/* section 5 */}
            <section className="section5 mt-4 pt-3">
                <div className="container-cr">
                    <h2>Most Search Keywords</h2>

                    <p><span>Laptops: </span> Appleo Laptop | Acero Laptop | Samsing Laptop | Lenov Laptop | Sonyo Laptop | Delli Laptop | Asuso Laptop | Toshibao Laptop | LGG Laptop | HPO Laptop</p>
                    <p><span>Tablet: </span> FUKIO Watches | Titan Watches | Casioo Watches | Fastrack Watches | Timexi Watches | Fossili Watches | Dieselo Watches | Toshibao Watches | Luxury Watches</p>
                    <p className="mb-3"><span>Mobile phone: </span> Shoes | Casual Shoes | Sports Shoes | Adidasi Shoes | Gas Shoes | Pumai Shoes | Reeboki Shoes | Woodlandi Shoes | Red Tape Shoes | Nikeo Shoes</p>
                </div>
            </section>


            {/* ========================================================== */}
            {/* section 6 */}
            <section className="section6 ">
                <div className="layer py-4">
                    <div className="container-container">
                        <div className="items-fotr">
                            <div className="item-cil mt-3 cila1">
                                <h5>Contact us</h5>
                                <div className="mt-3"> <i class="fas fa-phone-alt"></i>  (+966) 123 456 7890</div>
                                <div> <i class="far fa-envelope"></i> Info@web.com</div>
                                <div> <i class="fas fa-map-marker-alt mr-2"></i>Riyadh, Saudi Arabia</div>
                            </div>
                            <div className="item-cil mt-3 cila2">
                                <h5>Download</h5>
                                <div><img src={Ap} alt="" /></div>
                                <div><img src={Huawei} alt="" /></div>
                                <div><img src={Google} alt="" /></div>
                            </div>
                            <div className="item-cil mt-3 cila3">
                                <h5>Quick Links</h5>
                                <div>Login</div>
                                <div>Sign up </div>
                                <div>Change Country</div>
                                <div>Setting</div>
                                <div>About us</div>
                            </div>
                            <div className="item-cil mt-3 cila4">
                                <h5>My account</h5>
                                <div>Post an AD    </div>
                                <div>My ADS </div>
                                <div>Favorite ADS</div>
                                <div>Vouchers</div>
                                <div>Profile Setting</div>
                            </div>
                            <div className="item-cil  mt-3 cila5">
                                <h5>Subscribe now</h5>
                                <div>Contrary to popular belief of lorem Ipsm <br /> Latin amet ltin from.</div>
                                <div>
                                    <div class="input-group groupEmail">
                                        <input type="text" placeholder=" Your E-mail address..." className="formEmail form-control " />
                                        <button class="btnMail" type="submit"><i class="far fa-paper-plane"></i></button>
                                    </div>
                                </div>
                                <div className="icons ">
                                    <span className="mr-4"><i class="fab fa-twitter"></i></span>
                                    <span className="mr-4"><i class="fab fa-instagram"></i></span>
                                    <span><i class="fab fa-whatsapp"></i></span>
                                </div>

                            </div>
                            <div class="clr"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================== */}
            {/* section 7 */}
            <section className="section7">
                <div className="container">
                    <div className=" text-center Copyright">
                        <div className="py-2">
                            <div className="div1">Terms Conditions <span className=" ml-2">Privacy and policy</span></div>
                            <div className="div2">Copyright © 2021 web.com , UX UI by : Ahmed Shami</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Arro --> */}
            <div>
                <div id="chevronBtn" className="circle">
                    <i class="fas fa-chevron-up"></i>
                </div>
            </div>
        </>;
    }
}

export default Home;