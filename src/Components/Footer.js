import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
   <>
      <footer>
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-3 col-md-6 col-sm-6">
                                  <a data-bs-toggle="collapse" data-bs-target="#collapse_ft_1" aria-expanded="false" aria-controls="collapse_ft_1" className="collapse_bt_mobile">
                                      <h3>Quick Links</h3>
                                      <div className="circle-plus closed">
                                          <div className="horizontal" />
                                          <div className="vertical" />
                                      </div>
                                  </a>
                                  <div className="collapse show" id="collapse_ft_1">
                                      <ul className="links">
                                       
                                          <li><NavLink to="/">Home</NavLink></li>
                                          <li><NavLink to="/aboutus">About us</NavLink></li>
                                          <li><NavLink to="/reviews">Reviews</NavLink></li>
                                          <li><NavLink to="/pricing">Priceing</NavLink></li>
                                          <li><NavLink to="/contactus">Contact us</NavLink></li>
                                       
                                      </ul>
                                  </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-sm-6">
                                  <a data-bs-toggle="collapse" data-bs-target="#collapse_ft_2" aria-expanded="false" aria-controls="collapse_ft_2" className="collapse_bt_mobile">
                                      <h3>Categories</h3>
                                      <div className="circle-plus closed">
                                          <div className="horizontal" />
                                          <div className="vertical" />
                                      </div>
                                  </a>
                                  <div className="collapse show" id="collapse_ft_2">
                                      <ul className="links">
                                          <li><NavLink to="/category/directory/Restaurants">Restaurants</NavLink></li>
                                          <li><NavLink to="/category/directory/Doctors and Clinics">Doctors</NavLink></li>
                                          <li><NavLink to="/category/directory/Shopping Centres">Shopping</NavLink></li>
                                          <li><NavLink to="/category/directory/Real Estate Agents">Real Estate</NavLink></li>
                                         
                                      </ul>
                                  </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-sm-6">
                                  <a data-bs-toggle="collapse" data-bs-target="#collapse_ft_3" aria-expanded="false" aria-controls="collapse_ft_3" className="collapse_bt_mobile">
                                      <h3>Contacts</h3>
                                      <div className="circle-plus closed">
                                          <div className="horizontal" />
                                          <div className="vertical" />
                                      </div>
                                  </a>
                                  <div className="collapse show" id="collapse_ft_3">
                                      <ul className="contacts">
                                          <li><i className="ti-home" />97845 Baker st. 567<br />Los Angeles - US</li>
                                          <li><i className="ti-headphone-alt" />+61 23 8093 3400</li>
                                          <li><i className="ti-email" /><a href="#0">info@domain.com</a></li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-sm-6">
                                  <a data-bs-toggle="collapse" data-bs-target="#collapse_ft_4" aria-expanded="false" aria-controls="collapse_ft_4" className="collapse_bt_mobile">
                                      <div className="circle-plus closed">
                                          <div className="horizontal" />
                                          <div className="vertical" />
                                      </div>
                                      <h3>Keep in touch</h3>
                                  </a>
                                  <div className="collapse show" id="collapse_ft_4">
                                      <div id="newsletter">
                                          <div id="message-newsletter" />
                                         
                                      </div>
                                      <div className="follow_us">
                                          
                                          <ul>
                                              <li><a href="#0"><i className="ti-facebook" /></a></li>
                                              <li><a href="#0"><i className="ti-twitter-alt" /></a></li>
                                              <li><a href="#0"><i className="ti-google" /></a></li>
                                              <li><a href="#0"><i className="ti-pinterest" /></a></li>
                                              <li><a href="#0"><i className="ti-instagram" /></a></li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          {/* /row*/}
                          <hr />
                          <div className="row">
                              <div className="col-lg-6">
                                  <ul id="footer-selector">
                                      <li>
                                           
                                          
                                      </li>
                                  </ul>
                              </div>
                              <div className="col-lg-6">
                                  <ul id="additional_links">
                                      <li><a href="#">Terms and conditions</a></li>
                                      <li><a href="#">Privacy</a></li>
                                      <li><span>© 2023 Directory</span></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </footer>
   </>
  )
}

export default Footer