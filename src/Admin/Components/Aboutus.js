import React from 'react'
import { NavLink } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { baseurl } from '../../baseurl/baseurl';
import axios from 'axios';
import swal from 'sweetalert';
import EditIcon from '@mui/icons-material/Edit';
import Rating from '@mui/material/Rating';
import { useState,useEffect } from 'react';
import HashLoader from "react-spinners/BeatLoader";
const Aboutus = () => {
    const[getaddbtnv,setaddbtnv]=useState(true)
    const [visibleloading, setvisibleloading] = useState(true)
    const [getheading, setheading] = useState("")
    const [getsection, setsection] = useState("section 1")
    const [getdescription, setdescription] = useState("")
    const [getrating, setrating] = useState("1")
    const [getimg, setimg] = useState("")
    const onChangimage = (events) => {
        setimg(events.target.files[0]);

    };
    
    const changeOnClick = (e) => {
        const formData = new FormData();
        formData.append("heading", getheading);
        formData.append("section", getsection);
        formData.append("description", getdescription)
        formData.append("image", getimg);
        axios
            .post(baseurl + "/register/aboutus", formData)
            .then((res) => {

                swal("Your Record save successfully!", {
                    icon: "success",
                    buttons: false,
                    timer: 800,
                    margin: "300px"
                });

            })
            .catch((err) => {
                console.log(err);
            });
    };
    // =======================================================
    const [getuserdata, setuserdata] = useState("")
    const getdataValuesFun = async () => {

        const res = await fetch(baseurl + "/aboutus/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",

            },
        });
        const data = await res.json();
        if(data.length>=2){
            setaddbtnv(false)
        }
          
        if (res.status === 422 || !data) {
            console.log("error ");
        } else {

            setuserdata(data)
            setvisibleloading(false)
        }

    };
    useEffect(() => {
        getdataValuesFun()
    }, [])

    // ====================================================================
    const asktoconfirm = (id) => {
        const ids = id

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this record!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Your Record save successfully!", {
                        icon: "success",
                        buttons: false,
                        timer: 800,
                        margin: "300px"
                    });
                    deleteuser(ids)
                } else {
                    swal("Your Record is safe!");
                }
            });
    }
    const deleteuser = async (id) => {

        const res2 = await fetch(baseurl + `/aboutus/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const deletedata = await res2.json();

        if (res2.status === 422 || !deletedata) {

            swal("Your can't delete the last user");
        } else {

            window.location.reload(true)
        }
    };
    // ==========================================
  
    const [getupdateheading, setupdateheading] = useState('')
    const [getupdatedes, setupdatedes] = useState("")
    const[getupdatesection,setupdatesection]=useState("")
    const [getupdateimg, setupdetimg] = useState("")
    const [getupdateid, setupdateid] = useState("")
    const[getimgurls,setimgurls]=useState("")
    const onChangimageupdate = (events) => {
        setupdetimg(events.target.files[0]);
      
      };
    const update = (heading, section,description,img,id) => {
        setupdateheading(heading)
        setupdatedes(description)
        setupdatesection(section)
        setimgurls(img)
        setupdateid(id)
    }
// ===========================================================
const changeOnClickupdate = (e) => {

    e.preventDefault();
     const formData = new FormData();
     formData.append("heading", getupdateheading);
     formData.append("description", getupdatedes);
     formData.append("section", getupdatesection); 
     formData.append("image", getupdateimg);
     formData.append("imageurl", getimgurls)
     formData.append("id", getupdateid)

     axios
         .post(baseurl + "/update/aboutus", formData)
         .then((res) => {

           

         })
         .catch((err) => {
             swal(err.response.data.message, {
                 icon: "error",
                 buttons: false,
                 timer: 800,
                 margin: "300px"
             });
         });
         swal("Your Record Update successfully!", {
            icon: "success",
            buttons: false,
            timer: 800,
            margin: "300px"
        }).then((res)=>{
         window.location.reload(true)
        });
        
 };

    //   ==========================================
    return (
        <>
            <div className="content-wrapper mt-5">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">About us</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><NavLink to="/admin">Home</NavLink></li>
                                    <li className="breadcrumb-item active">About us</li>
                                </ol>
                            </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                <div className='d-flex align-items-center justify-content-end pe-3 mb-3'>
                    <button style={{display: getaddbtnv ? 'block' : 'none' }} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <AddBoxIcon />
                    </button>
                </div>
                {
                    visibleloading ?
                        <div className="loading-style " >  <HashLoader className="" color={"#0AA5FF"} loading={visibleloading} aria-label="Loading Spinner" data-testid="loader"
                        /></div>
                        :
                <div className='container px-3'>

                    {
                        getuserdata ? getuserdata.map((element, id) => {
                            return (
                                <>
                                    <div className='border p-2 px-3' key={element._id}>

                                        <div className='d-flex flex-md-row flex-column align-items-center justify-content-between'>
                                            <div>
                                                <p><b>Name : </b>{element.heading}</p>
                                                <p><b>Descripiton: </b>{element.description}  </p>
                                                 <p><b>Section: </b>{element.section}</p>
                                            </div>
                                            <div>
                                                <img className='rounded' src={baseurl+`/uploads/${element.img}`} width={60} height={60} />
                                            </div>

                                        </div>
                                        <div className='border-top mt-2 d-flex align-items-center justify-content-end p-2'>
                                            <button className='btn btn-warning text-white mx-2' onClick={() => asktoconfirm(element._id)}><DeleteIcon /></button>
                                            <button className='btn btn-primary text-white' onClick={() => update(element.heading,element.section, element.description,element.img,element._id)} data-bs-toggle="modal" data-bs-target="#staticBackdrop1"><EditIcon /></button>

                                        </div>

                                    </div>
                                </>
                            )
                        })
                            :
                            <div></div>
                    }





                </div>
}
                {/* =================Modal Add====================== */}
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Add Section</h5>
                                <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label" >Heading</label>
                                        <input type="text" class="form-control shadow-none" required id="recipient-name" placeholder='Jhon' onChange={(e) => setheading(e.target.value)} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label" >Section</label>
                                        <select className='form-control shadow-nonw' onChange={(e)=>setsection(e.target.value)} required>
                                            <option disabled>Select Selection</option>
                                            <option value={"section 1"}>Section 1</option>
                                            <option value={"section 2"}>Section 2</option>
                                        </select>
                                         </div>
                                    <div class="mb-3">
                                        <label for="message-text" class="col-form-label">Description</label>
                                        <textarea class="form-control shadow-none" required id="message-text " onChange={(e) => setdescription(e.target.value)}></textarea>
                                    </div>
                                 
                                    <div class="mb-3">
                                        <label for="message-text" class="col-form-label">Image</label>
                                        <input className='border border-1 mb-3 ' onChange={onChangimage} required accept="image/*" single type="file" />
                                    </div>
                                    <div class="mb-3 text-end">
                                        <button className='btn btn-success shadow-none' onClick={changeOnClick}>Save</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                {/* ======================================================== */}
                {/* =================Modal Update====================== */}
                <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Update Testimonial</h5>
                                <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label">Heading</label>
                                        <input type="text"   class="form-control shadow-none" required id="recipient-name" value={getupdateheading} onChange={(e)=>setupdateheading(e.target.value)} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label" >Section</label>
                                        <select value={getupdatesection} className='form-control shadow-nonw' onChange={(e)=>setupdatesection(e.target.value)} required>
                                            <option disabled>Select Selection</option>
                                            <option value={"section 1"}>Section 1</option>
                                            <option value={"section 2"}>Section 2</option>
                                        </select>
                                         </div>
                                    <div class="mb-3">
                                        <label for="message-text" class="col-form-label">Description</label>
                                        <textarea  class="form-control shadow-none" required id="message-text " value={getupdatedes} onChange={(e)=>setupdatedes(e.target.value)}></textarea>
                                    </div>

                                    <div class="mb-3">
                                        <label for="message-text" class="col-form-label">Image</label>
                                        <input className='border border-1 mb-3 'onChange={onChangimageupdate} required accept="image/*" single type="file" />
                                    </div>
                                    <div class="mb-3 text-end">
                                        <button className='btn btn-success shadow-none'onClick={changeOnClickupdate}>Update</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Aboutus