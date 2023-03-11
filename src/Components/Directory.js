import React from 'react'
import {Link } from 'react-router-dom'
    import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { baseurl } from '../baseurl/baseurl';
const Directory = ({ element }) => {
    return (
        <>
        <Link className='text-dark' to={`/company/details/${element._id}`}>

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

                        <img src={baseurl+`/uploads/${element.img}`} width={80} height={80}>
                        </img></div>

                </div>

            </div></Link>
        </>
    )
}

export default Directory