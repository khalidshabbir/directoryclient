import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { useState,useEffect } from 'react'
import { baseurl } from '../baseurl/baseurl'
import Rating from '@mui/material/Rating';
const Reviews = () => {
    const [getuserdata, setuserdata] = useState("")
    const [getrating,setrating]=useState("")
    const getdataValuesFun = async () => {

        const res = await fetch(baseurl+ "/reviews/getdata", {
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

  return (
    <>
    <Header/>
    <main>
    <section className="hero_single office">
    <div className="wrapper">
      <div className="container">
        <h1>Reviews</h1>
        <p>Pakistan Business Directory</p>
      </div>
    </div>
  </section>
              <div id="results">
                  <div className="container">
                      <div className="row justify-content-between">
                          <div className="col-lg-3 col-md-4 col-10">
                              <h1><strong></strong> Reviews by Clients</h1>
                          </div>
                          <div className="col-xl-5 col-md-6 col-2">
                              
                          </div>
                      </div>
                      {/* /row */}
                      <div className="search_mob_wp">
                          <div className="custom-search-input-2">
                              <div className="form-group">
                                  <input className="form-control" type="text" placeholder="Search reviews..." />
                                  <i className="icon_search" />
                              </div>
                             
                             
                          </div>
                      </div>
                      {/* /search_mobile */}
                  </div>
                  {/* /container */}
              </div>

              <div className="container margin_60_35">
                  <div className="isotope-wrapper">
                      <div className="row">
                        {
                            getuserdata?getuserdata.map((element)=>{
                                return(
                                    <>
                                    <div className="col-xl-4 col-lg-6 col-md-6 isotope-item latest">
                              <div className="review_listing">
                                  <div className="clearfix add_bottom_15">
                                      <figure><img src={baseurl+`/uploads/${element.img}`}  /></figure>
                                      <Rating name="read-only" value={element.rating} readOnly />
                                    
                                  </div>
                                   <h4>{`"${element.name}"`}</h4>
                                  <p>{element.description}</p>
                                  <ul className="clearfix">
                                     
                                      </ul>
                              </div>
                          </div>
                                    </>
                                )
                            }):<div><p>Data Not Found</p></div>
                        }
                          
                        
                      </div>
                      {/* /row */}
                  </div>
                  {/* /isotope-wrapper */}
                  {/* <p className="text-center"><a href="#0" className="btn_1 rounded add_top_15">Load more</a></p> */}
              </div>

    </main>
    <Footer/>
    </>
  )
}

export default Reviews