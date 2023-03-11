import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import { baseurl } from '../../baseurl/baseurl';
import axios from "axios";
import swal from 'sweetalert';

const AdminRegisterUser = () => {
  const [inputRef, setInputRef] = useState(null);
  const [file, setFile] = useState(null);
  const [image, setimage] = useState("");
  const [getname, setname] = useState("")
  const [getlastname, setlastname] = useState("")
  const [getemail, setemail] = useState("")
  const [getnumber, setnumber] = useState("")
  const [getpassword, setpassword] = useState("")
  const [getconfirm, setconfirm] = useState("")

  // ============================================
  const handleClick = () => {
    inputRef.click();
  };
  // ========================================
  const onChangimage = (events) => {
    setimage(events.target.files[0]);
    if (events.target.files.length > 0) {
      const file = URL.createObjectURL(events.target.files[0]);
      setFile(file);

    }
  };
  const changeOnClick = (e) => {
   
    if (file === null||getname===""||getlastname===""||getemail===""|| getnumber===""|| getpassword=="" ||getconfirm==="") {
     swal("Something is missing!")
    } else {

      if(getpassword===getconfirm){
        const formData = new FormData();
        formData.append("name", getname);
        formData.append("lastname", getlastname);
        formData.append("email", getemail);
        formData.append("number", getnumber);
        if (getconfirm === getpassword) {
          formData.append("password", getpassword);
        } else {
          setpassword("")
          setconfirm("")
        }
  
        formData.append("image", image);
  
        axios
          .post(baseurl + "/register/signupusers", formData)
          .then((res) => {
  
            if(res.status==402){
              alert("this is error")
              const response=res.json()
              swal(response)
            }
            swal("Your Record save successfully!", {
              icon: "success",
              buttons: false,
              timer: 800,
              margin: "300px"
            }).then((value)=>{
              window.location.reload(true)
            
            });
          })
          .catch((error) => {
            if (
              error.response &&
              error.response.status >= 400 &&
              error.response.status <= 500
            ){
              swal(error.response.data.message)
            }
          });
      
      }else{
        swal("Password not mactch!!")
      }
    }
  };
  return (
    <>
      <div className='content-wrapper'>
        <div className='container mt-5 p-4 p-lg-5 d-felx align-items-start justify-content-center'>
          <h3 classname="mb-5">Admin Users &gt; New profile</h3>

          <div className='bg-white border-secondary p-4 p-lg-5 mt-3 text-center'>

            <div className='text-start '>
            
                <div className=' d-flex flex-column align-items-center justify-content-center'>
                  {/* <Avatar className='cursorPointer'   alt="Remy Sharp" src={file} sx={{ width: 150, height: 150 , fontSize:100}} />
          */}
                  {/* =================================================== */}

                  <input
                    ref={(ref) => setInputRef(ref)}
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="input-file"
                    type="file"
                    required
                    onChange={onChangimage}
                  />
                  <Avatar className='cursorPointer mb-5' onClick={handleClick} src={file} sx={{ width: 150, height: 150, fontSize: 100 }} />





                  {/* ============================================= */}


                </div>
                <div className="mb-3 d-flex align-items-center ">
                  <div className='me-3 w-100'>
                    <p htmlFor="exampleInputEmail1" className="form-label w-100">First Name</p>
                    <input type="text" required className="form-control shadow-none" value={getname} onChange={(e) => setname(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />

                  </div>
                  <div className='ms-3 w-100'>
                    <p htmlFor="exampleInputEmail1" className="form-label">Last Name</p>
                    <input type="text" required className="form-control shadow-none " value={getlastname} onChange={(e) => setlastname(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />

                  </div>

                </div>
                <div className="mb-3">
                  <p htmlFor="exampleFormControlInput1" className="form-label">Email address</p>
                  <input type="email" className="form-control shadow-none" required id="exampleFormControlInput1" value={getemail} onChange={(e) => setemail(e.target.value)} placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <p htmlFor="exampleFormControlInput1" className="form-label">Phone Number</p>
                  <input type="tel" className="form-control shadow-none" required id="exampleFormControlInput1" value={getnumber} onChange={(e) => setnumber(e.target.value)} placeholder="+92312345678" />
                </div>
                <div className="mb-3">
                  <p htmlFor="exampleInputPassword1" className="form-label">Password</p>
                  <input type="password" required className="form-control shadow-none" value={getpassword} onChange={(e) => setpassword(e.target.value)} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                  <p htmlFor="exampleInputPassword1" className="form-label">Confirm Password</p>
                  <input type="password" required className="form-control shadow-none" value={getconfirm} onChange={(e) => setconfirm(e.target.value)} id="exampleInputPassword1" />
                </div>

               
                <button  className="btn btn-primary w-100 mt-3" onClick={changeOnClick}>Register</button>
             

            </div>


          </div>
        </div>
      </div>
    </>
  )
}
export default AdminRegisterUser