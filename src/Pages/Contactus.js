import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Contactus = () => {
  return (
    <>
    <Header/>
          <main>
              <section className="hero_single general">
                  <div className="wrapper">
                      <div className="container">
                          <h1>Get in Touch with Directory</h1>
                          <p>Pakistan Business Directory</p>
                      </div>
                  </div>
              </section>
              {/* /hero_single */}
              <div className="bg_color_1">
                  <div className="container margin_tabs">
                      <div id="tabs" className="tabs">
                          <nav>
                              <ul>
                                  <li><a href="#section-1"><i className="pe-7s-help1" />Support<em>Ask your Question</em></a></li>
                                 
                              </ul>
                          </nav>
                          <div className="content">
                              <section id="">
                                  <div className="row justify-content-center">
                                      <div className="col-lg-8">
                                          <div id="message-contact" />
                                      
                                      </div>
                                  </div>
                                  {/* /row */}
                              </section>
                              {/* /section */}
                              <section id=""> 
                              <form >
                                              <div className="row">
                                                  <div className="col-md-6">
                                                      <div className="form-group required">
                                                          <input className="form-control" type="text" id="name_support" name="name_support" placeholder="Name" />
                                                      </div>
                                                  </div>
                                                  <div className="col-md-6">
                                                      <div className="form-group required">
                                                          <input className="form-control" type="email" id="email_support" name="email_support" placeholder="Email" />
                                                      </div>
                                                  </div>
                                              </div>
                                              {/* /row */}
                                              <div className="form-group required">
                                                  <textarea className="form-control" id="message_support" name="message_support" style={{ height: 150 }} placeholder="Support request" defaultValue={""} />
                                              </div>
                                            
                                              <div className="form-group add_top_30 text-center">
                                                  <input type="submit" defaultValue="Submit"  />
                                              </div>
                                          </form>
                              </section>
                              {/* /section */}
                          </div>
                          {/* /content */}
                      </div>
                      {/* /tabs */}
                  </div>
                  {/* /container */}
              </div>
              <div className='container-fluid bg-white mb-4 py-5'>
              <div className='container bg-white my-5'>
                <form>
                    <input type={"text"} className='form-control shadow-none mt-2' placeholder='Name'/>
                    <input type={"text"} className='form-control shadow-none mt-2' placeholder='Email'/>
                    <input type={"text"} className='form-control shadow-none mt-2' placeholder='Subject'/>
                    <textarea type={"text"} className='form-control shadow-none mt-2 ' rows={10} placeholder='Message'></textarea>
                     <button className='btn btn-primary rounded w-100 mt-3'>Send</button>
                   
                </form>

                </div></div>
          
          </main>

    <Footer/>
    
        </>
  )
}

export default Contactus 