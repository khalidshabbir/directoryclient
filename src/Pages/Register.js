import React from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
  return (
   <>
          <div id="login">
              <aside>
                  <figure>
                      <a href="index.html"><img src="img/logo_sticky.svg" width={140} height={35} alt className="logo_sticky" /></a>
                  </figure>
                  <div className="access_social">
                      <a href="#0" className="social_bt facebook">Register with Facebook</a>
                      <a href="#0" className="social_bt google">Register with Google</a>
                  </div>
                  <div className="divider"><span>Or</span></div>
                  <form autoComplete="off">
                      <div className="form-group">
                          <input className="form-control" type="text" placeholder="Name" />
                          <i className="ti-user" />
                      </div>
                      <div className="form-group">
                          <input className="form-control" type="text" placeholder="Last Name" />
                          <i className="ti-user" />
                      </div>
                      <div className="form-group">
                          <input className="form-control" type="email" placeholder="Email" />
                          <i className="icon_mail_alt" />
                      </div>
                      <div className="form-group">
                          <input className="form-control" type="password" id="password1" placeholder="Password" />
                          <i className="icon_lock_alt" />
                      </div>
                      <div className="form-group">
                          <input className="form-control" type="password" id="password2" placeholder="Confirm Password" />
                          <i className="icon_lock_alt" />
                      </div>
                      <div id="pass-info" className="clearfix" />
                      <a href="#0" className="btn_1 rounded full-width">Register Now!</a>
                      <div className="text-center add_top_10">Already have an acccount? <strong><NavLink to="/login">Sign In</NavLink></strong></div>
                  </form>
                  <div className="copy">© 2023 Vanno</div>
              </aside>
          </div>

   </>
  )
}

export default Register