import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const Priceing = () => {
  return (
    <>
    <Header/>
          <main className="bg_color_1">
              <section className="hero_single general">
                  <div className="wrapper">
                      <div className="container">
                          <h1>Pakistan Business Directory</h1>
                          <p>List your Business</p>
                      </div>
                  </div>
              </section>
              {/* /hero_single */}
              <div className="container margin_tabs">
                  <div id="tabs" className="tabs">
                      <nav>
                          <ul>
                              <li><a href="#section-1"><i className="pe-7s-paper-plane" />Standard<em>Get Discover Online</em></a></li>
                              <li><a href="#section-2"><i className="pe-7s-plane" />Extended<em>Mobile Friendly Profiles</em></a></li>
                              <li><a href="#section-3"><i className="pe-7s-rocket" />Premium<em>Become a part of Pakistan business directory</em></a></li>
                          </ul>
                      </nav>
                      <section id="section-1 " className='mt-5'>
                              <div className="row">
                                  <div className="col-lg-4">
                                      <div className="box_pricing">
                                          <h4 className='text-center'>Basic</h4>
                                          <div className="price">
                                              <sup></sup>24<em>USD</em>
                                          </div>
                                          <div className='text-center'>
                                          <p className='bg-purple rounded d-inline-flex p-1'>One time free</p>
                                          <p>Never pay again</p>
                                          </div>
                                          <hr className='text-dark'/>
                                          <ul>
                                            <li className='mt-2'><CheckBoxIcon className='mx-1 text-success'/> Standart listing</li>
                                            <li className='mt-2'><CheckBoxIcon className='mx-1 text-success'/> Listing placement on</li>
                                            <ul>
                                            <li className='mt-2'><CheckCircleIcon className='mx-1 text-success'/> Search results</li>
                                            <li className='mt-2'><CheckCircleIcon className='mx-1 text-success'/> Selected categories</li>
                                            <li className='mt-2'><CheckCircleIcon className='mx-1 text-success'/> Added keywords</li>

                                              
                                            </ul>
                                            <li className='mt-2'><CheckBoxIcon className='mx-1 text-success'/> Photos</li>
                                            <li className='mt-2'><CheckBoxIcon className='mx-1 text-success'/> Keywords</li>
                                            <li className='mt-2'><CheckBoxIcon className='mx-1 text-success'/> Categories</li>
                                            <li className='mt-2'><CheckBoxIcon className='mx-1 text-success'/> SubCategories</li>

                                          </ul>
                                         
                                          <hr />
                                         
                                          <a href="register.html">GET LISTING</a>
                                      </div>
                                  </div>
                                  <div className="col-lg-4">
                                      <div className="box_pricing">
                                          <h4 className='text-center'>PREMIUM</h4>
                                          <div className="price">
                                              <sup></sup>129<em>USD</em>
                                          </div>
                                          <div className='text-center'>
                                          <p className='bg-purple rounded d-inline-flex p-1'>per year</p>
                                          <p>subscripiton</p>
                                          </div>
                                          <hr className='text-dark'/>
                                          <ul>
                                            <li className='mt-2'><CheckBoxIcon className='mx-1 text-success'/> Highlighted listing</li>
                                            <li className='mt-2'><CheckBoxIcon className='mx-1 text-success'/> Top listing placement on:</li>
                                            <ul>
                                            <li className='mt-2'><CheckCircleIcon className='mx-1 text-success'/> Search results</li>
                                            <li className='mt-2'><CheckCircleIcon className='mx-1 text-success'/> Selected categories</li>
                                            <li className='mt-2'><CheckCircleIcon className='mx-1 text-success'/> Added keywords</li>

                                              
                                            </ul>
                                            <li className='mt-2'><CheckBoxIcon className='mx-1 text-success'/>5 Photos</li>
                                            <li className='mt-2'><CheckBoxIcon className='mx-1 text-success'/>3 Products</li>
                                            <li className='mt-2'><CheckBoxIcon className='mx-1 text-success'/>10 Keywords</li>
                                            <li className='mt-2'><CheckBoxIcon className='mx-1 text-success'/> Categories</li>
                                            <li className='mt-2'><CheckBoxIcon className='mx-1 text-success'/> SubCategories</li>

                                          </ul>
                                         
                                          <hr />
                                         
                                          <a href="register.html">GET LISTING</a>
                                      </div>
                                  </div>
                                  <div className="col-lg-4">
                                      <div className="box_pricing">
                                          <h4 className='text-center'>LIFETIME</h4>
                                          <div className="price">
                                              <sup>$</sup>299<em>USD</em>
                                          </div>
                                          <div className='text-center'>
                                          <p className='bg-purple rounded d-inline-flex p-1'>One time free</p>
                                          <p>Never pay again</p>
                                          </div>
                                          <hr className='text-dark'/>
                                          <ul>
                                            <li className='mt-2'><CheckBoxIcon className='mx-1 text-success'/> Highlighted listing</li>
                                            <li className='mt-2'><CheckBoxIcon className='mx-1 text-success'/> Listing placement on</li>
                                            <ul>
                                            <li className='mt-2'><CheckCircleIcon className='mx-1 text-success'/> Search results</li>
                                            <li className='mt-2'><CheckCircleIcon className='mx-1 text-success'/> Selected categories</li>
                                            <li className='mt-2'><CheckCircleIcon className='mx-1 text-success'/> Added keywords</li>

                                              
                                            </ul>
                                            <li className='mt-2'><CheckBoxIcon className='mx-1 text-success'/>10 Photos</li>
                                            <li className='mt-2'><CheckBoxIcon className='mx-1 text-success'/>5 Products</li>
                                            <li className='mt-2'><CheckBoxIcon className='mx-1 text-success'/>20 Keywords</li>
                                            <li className='mt-2'><CheckBoxIcon className='mx-1 text-success'/> Categories</li>
                                            <li className='mt-2'><CheckBoxIcon className='mx-1 text-success'/> SubCategories</li>

                                          </ul>
                                         
                                          <hr />
                                         
                                          <a href="register.html">GET LISTING</a>
                                      </div>
                                  </div>
                                 
                              </div>
                              {/* /row */}
                          </section>
                        
                      <div className="content">
                          
                      </div>
                      {/* /content */}
                  </div>
                  {/* /tabs */}
              </div>
              {/* /container */}
          </main>

          <Footer/>

    </>
  )
}

export default Priceing