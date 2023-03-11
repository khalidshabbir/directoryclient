import React from 'react'
import { NavLink } from 'react-router-dom'
import { baseurl } from '../../baseurl/baseurl';
import { useState, useEffect } from 'react';
const Category = () => {
    const [getdata, setdata] = useState([])

    const getdataValuesFun = async () => {

        const res = await fetch(baseurl + "/category/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",

            },
        });
        const data = await res.json();

        if (res.status === 422 || !data) {
            console.log("error ");
        } else {

            setdata(data.stringify())
            console.log("Here is data")
            console.log(data)
            //    setvisibleloading(false)

        }

    };
    useEffect(() => {
        getdataValuesFun()
    }, [])


    return (
        <div>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header mt-5 ">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Categories</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><NavLink to="/admin">Home</NavLink></li>
                                    <li className="breadcrumb-item active">Categories</li>
                                </ol>
                            </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* <div className='container'>
                    {Object.entries(getdata).map(([key, subject], i) => (
                        <li className="travelcompany-input" key={i}>
                            <span className="input-label"> {subject.name}</span>
                        </li>
                    ))}
                </div> */}

                <div className='container'>
                    {Object.entries(getdata).map(([key, subject], i) => (
                        <li className="travelcompany-input" key={i}>
                            <span className="input-label"> {subject.name}</span>
                        </li>
                    ))}
                </div>






            </div>
        </div>
    )
}

export default Category