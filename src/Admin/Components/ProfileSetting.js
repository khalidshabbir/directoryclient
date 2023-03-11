import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import { baseurl } from '../../baseurl/baseurl';
import axios from "axios";
import swal from 'sweetalert';
import HashLoader from "react-spinners/BeatLoader";

const ProfileSetting = () => {
    const userid = localStorage.getItem("directoryuserid");
    const [getname, setname] = useState("")
    const [getlastname, setlastname] = useState("")
    const [getemail, setemail] = useState("")
    const [getimage, setimage] = useState(null)
    const [getnumber, setnumber] = useState("")
    const [getdepartment, setdepartment] = useState("")
    const [getposition, setposition] = useState("")
    const [getpassword, setpassword] = useState("")
    const [getconfirm, setconfirm] = useState("")
    const [File, setFile] = useState("")
    const [imageurl, setimgurl] = useState("")
    const [visibleloading, setvisibleloading] = useState(false)
    const onChangimage = (events) => {

        if (events.target.files.length > 0) {
            const file = URL.createObjectURL(events.target.files[0]);
            setFile(file);
            setimage(events.target.files[0]);

        }
    };

    const getdataValuesFun = async () => {
        const id = userid;
      
        const res = await fetch(baseurl + `/login/usersdata/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();

        if (res.status === 422 || !data) {
            console.log("error ");
        } else {

            setname(data.name)
            setlastname(data.lastname)
            setemail(data.email)
            setnumber(data.number)
            setdepartment(data.department)
        
            setFile(baseurl+`/uploads/${data.image}`)
            
            setposition(data.position)
            setpassword(data.password)
            setimgurl(data.image)
          
        }

    };
    useEffect(() => {
        getdataValuesFun()
    }, [])
    // =======================================================
    const changeOnClick = (e) => {
       e.preventDefault();
        const formData = new FormData();
        formData.append("name", getname);
        formData.append("lastname", getlastname);
        formData.append("email", getemail);
        formData.append("number", getnumber);
        formData.append("password", getpassword);
        formData.append("imageurl", imageurl)
        formData.append("image", getimage);
        formData.append("id", userid);

        axios
            .post(baseurl + "/update/adminprofile", formData)
            .then((res) => {

                swal("Your Record Update successfully!", {
                    icon: "success",
                    buttons: false,
                    timer: 800,
                    margin: "300px"
                });

            })
            .catch((err) => {
                swal(err.response.data.message, {
                    icon: "error",
                    buttons: false,
                    timer: 800,
                    margin: "300px"
                });
            });
    };

    return (

        <div className="content-wrapper"  >
            {
                visibleloading ?
                    <div className="loading-style " >  <HashLoader className="" color={"#0AA5FF"} loading={visibleloading} aria-label="Loading Spinner" data-testid="loader"
                    /></div>
                    :
                    <div className='container mt-5 p-4 p-lg-5 d-felx align-items-start justify-content-center'>
                        <h3 classname="mb-4">My profile &gt; Edit profile</h3>

                        <div className='bg-white border-secondary p-4 p-lg-5 text-center'>
                            <div className=' d-flex flex-column align-items-center justify-content-center'> <Avatar  src={File} sx={{ width: 150, height: 150, fontSize: 100 }} /> </div>
                            <div className='text-start mt-5'>
                                <form>
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
                                        <input type="email" className="form-control" value={getemail} onChange={(e) => setemail(e.target.value)} required id="exampleFormControlInput1" placeholder="name@example.com" />
                                    </div>
                                    <div className="mb-3">
                                        <p htmlFor="exampleFormControlInput1" className="form-label">Phone Number</p>
                                        <input type="tel" className="form-control" value={getnumber} onChange={(e) => setnumber(e.target.value)} required id="exampleFormControlInput1" placeholder="+92312345678" />
                                    </div>
                                    <input className='border border-1 mb-3 ' onChange={onChangimage} accept="image/*" single type="file" />
                                    <button type="submit" className="btn btn-primary w-100" onClick={changeOnClick}>Update</button>
                                </form>

                            </div>


                        </div>
                    </div>
            }
        </div>
    )
}

export default ProfileSetting