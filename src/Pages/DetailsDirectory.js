import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { NavLink, useParams } from 'react-router-dom'
import { baseurl } from '../baseurl/baseurl'
import { useState, useEffect } from 'react'
import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GoogleMapReact from 'google-map-react';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const DetailsDirectory = () => {
    const { id } = useParams();
    const [getdata, setdata] = useState([])
    const getdataValuesFun = async () => {

        const res = await fetch(baseurl + `/company/details/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        setdata(data)


    };
    useEffect(() => {
        getdataValuesFun()
    }, [])
    // ====================================
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    // ==============================

    return (
        <>
            <Header />
            <main>

                <section className="hero_single office">
                    <div className="wrapper">
                        <div className="container">
                            <h1>Pakistan Business Directory</h1>
                            <p></p>
                        </div>
                    </div>
                </section>
                <div className="container margin_60_35 mt-2 pt-4">
                    <div>
                       <NavLink to={"/category"}><KeyboardDoubleArrowLeftIcon/>Back</NavLink> 
                       <p className='pt-3 pb-2'>{"Pakistan Business Directory"}&gt;&gt;{getdata.category} &gt;&gt; {getdata.subcategory} &gt;&gt;{getdata.city}&gt;&gt;{getdata.name}</p>

                    </div>
                    <div className="row  ">
                        <div className="col-lg-12 px-3">
                            <div className="box_general general_info m-0 p-4 bg-white">
                                <div className='d-flex align-items-center justify-content-between'>
                                  
                                  
                                    <div>
                                        <p className='mt-2 mb-2 text-gray'>COMPANY NAME</p>
                                        <div className='d-flex align-items-center'>
                                            <h6 className=''>{getdata.name}</h6>
                                            <VerifiedSharpIcon fontSize='small' className='mx-3 p-0 badgecolor' />
                                        </div>
                                    </div>
                                    <div>
                                        <img className='rounded' src={baseurl+`/uploads/${getdata.img}`} width={150} height={150}></img>
                                    </div>
                                </div>



                             
                                <p className='m-0 p-0 text-gray'>CITY</p>
                                <h6 className='m-0 mb-3 p-0'>{getdata.city}</h6>
                                <p className='m-0 p-0 text-gray'>ADDRESS</p>
                                <p className='m-0 mb-3 p-0'>{getdata.address}</p>
                                <p className='m-0 p-0 text-gray'>PHONE NUMBER</p>
                                <h6 className='mt-1 mb-3 p-0'>{getdata.mobile}</h6>
                                <p className='m-0 p-0 text-gray'>PHONE NUMBER</p>
                                <h6 className='mt-1 mb-3 p-0'>{getdata.phone}</h6>
                                <p className='m-0 p-0 text-gray'>WEBSITE</p>
                                <a href={getdata.website} target={"_blank"}>{getdata.website}</a><br />
                                <div className=' border d-inline-block p-2 mt-3 w-50 ' style={{ background: "#F9F9F9" }}>
                                    <div className='d-flex align-items-center'>
                                        <AccessTimeIcon className='m-0 p-0' />
                                        <p className='m-0 p-0 mx-2'>WORKING HOURS</p>
                                    </div>
                                    <h6 className='mt-3 mb-3 p-0 '>{getdata.timing}</h6>
                                </div>
                                <p className='m-0 p-0 text-gray'>CONTACT PERSON</p>
                                <h6 className='mt-1 mb-3 p-0'>{getdata.contractPerson}</h6>
                                <p className='m-0 p-0 text-gray'>ESTABLISHMENT YEAR</p>
                                <h6 className='mt-1 mb-3 p-0'>{getdata.establish}</h6>
                                <p className='m-0 p-0 text-gray'>EMPLOYEES</p>
                                <h6 className='mt-1 mb-3 p-0'>{getdata.employees}</h6>
                                <p className='m-0 p-0 text-gray'>DESCRIPTION</p>
                                <p className='me-2 mb-3 p-0'>{getdata.description}</p>



                            </div>

                            {/* <div className='box_general general_info mt-3 p-4'>
                                <p>MAP</p>
                                <div className=''>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: "" }}
                                        defaultCenter={defaultProps.center}
                                        defaultZoom={defaultProps.zoom}
                                    >

                                    </GoogleMapReact>
                                </div>
                            </div> */}
                        </div>
                        <div className='col-lg-3'>
                         
                        </div>



                        {/* /col */}

                    </div>
                    {/* /row */}
                </div>
            </main>




            <Footer />
        </>
    )
}

export default DetailsDirectory