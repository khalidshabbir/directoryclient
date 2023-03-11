import React from 'react'
import "./Testimonial.css"
import Slider from "react-slick";
import { useState, useEffect } from 'react';
import { baseurl } from '../baseurl/baseurl';
import HashLoader from "react-spinners/BeatLoader";

const Testimonial = () => {
    const [getuserdata, setuserdata] = useState("")
    const getdataValuesFun = async () => {

        const res = await fetch(baseurl + "/testimonial/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",

            },
        });
        const data = await res.json();

        if (res.status === 422 || !data) {
            console.log("error ");
        } else {

            setuserdata(data)


        }

    };
    useEffect(() => {
        getdataValuesFun()
    }, [])

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className=''>
                <div className='container mb-5 py-3 text-center '>
                    <h3 className='my-5'>What do Company Owners Say?</h3>
                    <section style={{ color: "#000" }}>
                        <Slider {...settings}>
                            {
                               getuserdata? getuserdata.map((element) => {
                                    return (
                                        <>
                                            <div class="col mb-0 mx-2">
                                                <div class="card">
                                                    <div class="card-body py-4 mt-2">
                                                        <div class="d-flex justify-content-center mb-4">
                                                            <img src={baseurl+`/uploads/${element.img}`}
                                                                class="rounded-circle shadow-1-strong" width="100" height="100" />
                                                        </div>
                                                        <h5 class="font-weight-bold">{element.name}</h5>
                                                        <p class="mb-2">
                                                            <i class="fas fa-quote-left pe-2"></i>{element.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }):
                                <div className="loading-style " >  <HashLoader className="" color={"#0AA5FF"}  aria-label="Loading Spinner" data-testid="loader"
                        /></div>


                            }

                        </Slider>
                    </section>

                </div>
            </div>


        </>
    )
}

export default Testimonial