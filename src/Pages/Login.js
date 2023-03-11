import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <>
          <div id="login">
              <aside>
                  <figure>
                      <a href="index.html"><img src="img/logo_sticky.svg" width={140} height={35} alt className="logo_sticky" /></a>
                  </figure>
                  <form>
                      <div className="access_social">
                          <a href="#0" className="social_bt facebook">Login with Facebook</a>
                          <a href="#0" className="social_bt google">Login with Google</a>
                      </div>
                      <div className="divider"><span>Or</span></div>
                      <div className="form-group">
                          <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                          <i className="icon_mail_alt" />
                      </div>
                      <div className="form-group">
                          <input type="password" className="form-control" name="password" id="password" defaultValue placeholder="Password" />
                          <i className="icon_lock_alt" />
                      </div>
                      <div className="clearfix add_bottom_30">
                          <div className="checkboxes float-start">
                              <label className="container_check">Remember me
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                              </label>
                          </div>
                          <div className="float-end mt-1"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
                      </div>
                      <a href="#0" className="btn_1 rounded full-width">Login to Vanno</a>
                      <div className="text-center add_top_10">New to Vanno? <strong><NavLink to="/register">Sign up!</NavLink></strong></div>
                  </form>
                  <div className="copy">© 2023 Vanno</div>
              </aside>
          </div>

    </>
  )
}

export default Login