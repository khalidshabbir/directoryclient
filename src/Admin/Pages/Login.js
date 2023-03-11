import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import "./Login.css";
import axios from "axios";
import LoadingButton from '@mui/lab/LoadingButton';
import { baseurl } from "../../baseurl/baseurl";
const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const [visible, setvisible] = useState(false)

  const loginUser = async (e) => {

    e.preventDefault();
    setvisible(true)

    try {
      const url = baseurl + "/login/users";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("directorytoken", res.data);
      const userlogin = res.user;
      const userimage = userlogin.image;
      const userid = userlogin._id;
      localStorage.setItem("directoryuserimage", userimage);
      localStorage.setItem("directoryuserid", userid);
      window.location = "/admin";
      setvisible(false)
    } catch (error) {
      setvisible(false)
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <section className="login pt-5">

        <div className="">
          <div className="wrapperslogin bg-white ">
            <div className='text-center mt-3'>
              <img src="../img/logo1.png" width={280} height={70} alt className="logo_sticky " />
            </div>
            <form className=" pt-3" onSubmit={loginUser}>
              <h4 className="text-center" style={{ color: "#400485" }}>Login</h4>
              <div className="h6 text-muted text-center pt-2">
                Welcome to Directory Admin
              </div>
              <div className="form-group py-2 mt-5">
                <div className="input-field">
                  {" "}
                  <span className="far fa-user p-2"></span>{" "}
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                    required
                  />{" "}
                </div>
              </div>
              <div className="form-group py-1 pb-2">
                <div className="input-field mt-3">
                  {" "}
                  <span className="fas fa-lock p-2"></span>{" "}
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={data.password}
                    required
                    className=""
                  />{" "}

                </div>
              </div>
              <div className="d-flex align-items-start">
                <div className="ml-auto mt-2">
                  {" "}
                  {/* <a className="text-dark" href="#" id="forgot">
                 Forgot Password?
               </a>{" "} */}
                </div>
              </div>{" "}
              {error && <div className="text-danger">{error}</div>}

              <LoadingButton type={"submit"} loading={visible} className="w-100 mt-3 mb-3 " variant="contained" sx={{ color: "white" }}>
                Submit
              </LoadingButton>
            </form>

          </div>
        </div>

      </section>
    </>
  );
};

export default Login;
