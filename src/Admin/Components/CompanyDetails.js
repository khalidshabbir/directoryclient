import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { baseurl } from '../../baseurl/baseurl'
import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HashLoader from "react-spinners/BeatLoader";
import swal from 'sweetalert';
const CompanyDetails = () => {
    const [getdata, setdata] = useState()
    const [visibleloading, setvisibleloading] = useState(true)
    const getdataValuesFun = async () => {
        const res = await fetch(baseurl + "/company/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();

        if (res.status === 422 || !data) {
            console.log("error ");
        } else {
            setdata(data)
            setvisibleloading(false)
        }

    };

    useEffect(() => {
        getdataValuesFun()

    }, [])
    // ===================================================
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

        const res2 = await fetch(baseurl + `/companiesdetails/delete/${id}`, {
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

    return (
        <>
            <div>
                <div className="content-wrapper mt-5">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 text-dark">Companies</h1>
                                </div>{/* /.col */}
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><NavLink to="/admin">Home</NavLink></li>
                                        <li className="breadcrumb-item active">Companies</li>
                                    </ol>
                                </div>{/* /.col */}
                            </div>{/* /.row */}
                        </div>{/* /.container-fluid */}
                    </div>
                    {
                        visibleloading ?
                            <div className="loading-style " >  <HashLoader className="" color={"#0AA5FF"} loading={visibleloading} aria-label="Loading Spinner" data-testid="loader"
                            /></div>
                            :
                            <div className='container'>
                                {
                                    getdata ? (getdata.map((element, id) => {
                                        return (
                                            <>
                                                <div className='border border-start-0 p-3 mb-3' key={element._id}>
                                                    <div className='row d-flex align-items-center'>
                                                        <div className='col-lg-10 px-3'>
                                                            <h6 className='cursor-pointer' style={{ fontSize: "20px" }}>{element?.name}</h6>
                                                            <p className='cursor-pointer' style={{ fontSize: "16px" }}>{element.address} <b>{element.city}</b></p>
                                                            <p className='cursor-pointer linewrap' style={{ fontSize: "16px" }}>{element.description}</p>
                                                            <div className='inline-flex align-items-center cursor-pointer '>
                                                                <VerifiedSharpIcon fontSize='small' className='me-2 badgecolor' />
                                                                Verified
                                                            </div>

                                                            <div className='  d-flex flex-wrap  flex align-items-center maindivicons wrap'>
                                                                <div className=' mt-3 iconsdiv px-3 py-2 me-2 text-center cursor-pointer' >
                                                                    <LocalPhoneSharpIcon />
                                                                    <p className='pt-1 m-0' style={{ fontSize: "10px" }}>Phone</p>
                                                                </div>
                                                                <div className=' mt-3 iconsdiv px-3 py-2 me-2 text-center cursor-pointer' >
                                                                    <LocationOnSharpIcon />
                                                                    <p className='pt-1 m-0' style={{ fontSize: "10px" }}>Map</p>
                                                                </div>
                                                                <div className=' mt-3 iconsdiv px-3 py-2 me-2 text-center cursor-pointer' >
                                                                    <LanguageSharpIcon />
                                                                    <p className='pt-1 m-0' style={{ fontSize: "10px" }}>Website</p>
                                                                </div>
                                                                <div className=' mt-3 iconsdiv px-3 py-2 me-2 text-center cursor-pointer' >
                                                                    <InsertPhotoOutlinedIcon />
                                                                    <p className='pt-1 m-0' style={{ fontSize: "10px" }}>Photos</p>
                                                                </div>
                                                                <div className=' mt-3 iconsdiv px-3 py-2 me-2 text-center cursor-pointer' >
                                                                    <AutoAwesomeOutlinedIcon />
                                                                    <p className='pt-1 m-0' style={{ fontSize: "10px" }}>Products</p>
                                                                </div>

                                                            </div>




                                                        </div>
                                                        <div className='col-lg-2 mt-3 mt-lg-0'>

                                                            <img src={baseurl + `/uploads/${element.img}`} width={80} height={80}>
                                                            </img></div>

                                                    </div>

                                                    <div className='mt-3 d-flex align-items-center justify-content-end border-top py-3'>
                                                        <button className='btn btn-warning  mx-2 text-white' onClick={() => asktoconfirm(element._id)}><DeleteIcon /></button>
                                                        <NavLink to={`/companyEdit/${element._id}`}>
                                                            <button className='btn btn-primary  mx-2 text-white'><EditIcon /></button>

                                                        </NavLink>
                                                    </div>

                                                </div>


                                            </>
                                        )

                                    }).reverse()) : (
                                        <p>No items found</p>
                                    )
                                }
                            </div>
                    }
                </div>


            </div>

        </>
    )
}

export default CompanyDetails