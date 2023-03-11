import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { NavLink } from 'react-router-dom'
import { baseurl } from '../baseurl/baseurl'
import { useState, useEffect } from 'react'
const Aboutus = () => {
  const [getuserdata, setuserdata] = useState("")
  const [getsectionone, setsectionone] = useState("")
  const [getsectiontwo, setsectiontwo] = useState("")
  const getdataValuesFun = async () => {

    const res = await fetch(baseurl + "/aboutus/getdata", {
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
      const sections1 = data.filter((obj) => obj.section.toLowerCase() === "section 1").map((items) => items)
      setsectionone(sections1)
      const sections2 = data.filter((obj) => obj.section.toLowerCase() === "section 2").map((items) => items)
      setsectiontwo(sections2)

    }

  };
  useEffect(() => {
    getdataValuesFun()
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="hero_single office">
          <div className="wrapper">
            <div className="container">
              <h1>About us</h1>
              <p>Pakistan Business Directory</p>
            </div>
          </div>
        </section>
        {/* /hero_single */}
        <div className="container margin_80">
          {
            getsectionone ? getsectionone.map((element) => {
              return (
                <>
                  <div className="row d-flex align-items-center">

                    <div className="col-lg-6">
                      <img alt src={baseurl+`/uploads/${element.img}`} className="img-fluid rounded" />
                    </div>
                    <div className="col-lg-6 pl-lg-5 pt-4">
                      <h2>{element.heading}</h2>
                      <p className="lead">{element.description}</p>
                      <p className="lead">List your Business.</p>
                      <NavLink to="/pricing">
                        <button className='btn btn-primary rounded-pill px-4'>Register </button>

                      </NavLink>
                    </div>
                  </div>

                </>
              )
            }) : <div><h4>Data Not Found</h4>
            </div>
          }

        </div>
        {/* /container */}
        <div className="bg_color_1">
          <div className="container margin_80">
          {
            getsectiontwo?getsectiontwo.map((element)=>{
              return(
                <>
                 <div className="row d-flex align-items-center">
              <div className="col-lg-6 pl-lg-5 order-lg-last">
                <img alt src={baseurl+`/uploads/${element.img}`} className="img-fluid rounded" />
              </div>
              <div className="col-lg-6 pt-4 order-lg-first">
                <h2>{element.heading}</h2>
                <p className="lead">{element.description}</p>

              </div>
            </div>
                </>
              )
            }):<div><h4>Data Not Found</h4></div>
          }

           
          </div>
          {/* /container */}
        </div>
        {/* /bg_color_1 */}
        <div className="values">
          <div className="wrapper">
            <div className="container">
              <div className="main_title_2">
                <h2>Our Values</h2>
                <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
              </div>
              <div className="row justify-content-center" style={{ minHeight: 210 }}>
                <div className="col-lg-5">
                  <div className="nav flex-column" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active" id="tab-1" data-bs-toggle="tab" href="#tab-1-content" role="tab" aria-controls="tab-1-content" aria-selected="true">Convenience</a>
                    <a className="nav-link" id="tab-2" data-bs-toggle="tab" href="#tab-2-content" role="tab" aria-controls="tab-2-content" aria-selected="false">Comprehensive Information</a>
                    <a className="nav-link" id="tab-3" data-bs-toggle="tab" href="#tab-3-content" role="tab" aria-controls="tab-3-content" aria-selected="false">User-Friendly Interface</a>
                    <a className="nav-link" id="tab-3" data-bs-toggle="tab" href="#tab-4-content" role="tab" aria-controls="tab-4-content" aria-selected="false">Time-saving</a>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="tab-1-content" role="tabpanel" aria-labelledby="tab-1">
                      <p className="lead">The website offers an easy and accessible way to search for businesses and products.</p>
                    </div>
                    <div className="tab-pane fade" id="tab-2-content" role="tabpanel" aria-labelledby="tab-2">
                      <p className="lead"> The website provides detailed information about each business, including their products, services, contact information, and more.</p>
                    </div>
                    <div className="tab-pane fade" id="tab-3-content" role="tabpanel" aria-labelledby="tab-3">
                      <p className="lead">User-Friendly Interface: The website has a user-friendly design and interface, making it easy for users to find what they're looking for.</p>
                    </div>
                    <div className="tab-pane fade" id="tab-4-content" role="tabpanel" aria-labelledby="tab-4">
                      <p className="lead">Time-saving: The website saves users time by allowing them to find businesses and products in one central location, rather than having to search multiple websites.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /values */}

        {/*/container*/}
      </main>


      <Footer />
    </>
  )
}

export default Aboutus