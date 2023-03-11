import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { baseurl } from '../baseurl/baseurl';
import Directorys from '../Components/Directory';
import FilterDirectory from '../Components/FilterDirectory';
import { categorydata } from '../Categorydata'
const Directory = () => {

    const [getdata, setdata] = useState(categorydata)
    const subcat = useParams()
    const locationp = useParams()
   
    const [getsubcat, setsubcat] = useState(subcat.subcategory)
    const [getloc, setloc] = useState(locationp.location)
    const [getuserdata, setuserdata] = useState("")
    const [getcitydata, setcitydata] = useState("")
    const [getdefaultdata, setdefaultdata] = useState("")
    const [visibleloading, setvisibleloading] = useState(true)
    const [visibletest, setvisibletest] = useState(false)
    const [getcomponent,setcomponents]=useState(true)
    const [getalldata, setalldata] = useState("")
    
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
            if (getsubcat) {
                const Filterdatais = data.filter((item) => {
                    if (item.subcategory.toLowerCase() === getsubcat.toLowerCase()) {
                        return item
                    }
                })
              const  objectLength = Object.keys(Filterdatais).length
              if(objectLength==0){
                setvisibletest(true)
              }
                setuserdata(Filterdatais)
                setdefaultdata(Filterdatais)
            } else if (getloc) {
                const Filterdatais = data.filter((item) => {
                    if (item.city.toLowerCase() === getloc.toLowerCase()) {
                        return item
                    }
                })
                setcomponents(false)
                setuserdata(Filterdatais)
                setdefaultdata(Filterdatais)
            }

        }
       
    };
    useEffect(() => {
        getdataValuesFun()
        getsubcategory()
    }, [])
    const onchangefun = (event) => {
        setuserdata(getdefaultdata)
        const Filterdatais = getdefaultdata.filter((item) => {
            if (item.city.toLowerCase().includes(event.toLowerCase())) {
                return item
            } else if (event === "") {
                setuserdata(getdefaultdata)
            }
        })
        
        setuserdata(Filterdatais)
        
    }
   const [getpapular,setpapular]=useState("")
    const getsubcategory=()=>{
        
    const subcategory=subcat.subcategory;
    const locaton=locationp.location;
    if(subcategory){
        const Filterdata=getdata.filter((obj)=>obj.subcategories.toLowerCase()===subcategory.toLowerCase()).slice(0,1).map((items)=>items.name)
        setpapular(Filterdata.toString())
    }else{
       
        const categoryis= getdata.map((elemen)=>elemen.name).slice(0,1)
        setpapular(...new Set(categoryis))
       
    }


    }

    return (
        <>
            <Header />
            <main>
                <section className="hero_single office">
                    <div className="wrapper">
                        <div className="container">
                            <h1>Business Directory</h1>
                            <p>Pakistan Business Directory</p>
                        </div>
                    </div>
                </section>
                {/* /user_summary */}
                <div className="container mt-4 mb-2">
                    <p className='ms-3'><div>
                        Business Directory &gt;&gt; Catogories &gt;&gt; {getsubcat}
                    </div>
                    </p>
                    <div className="row ">
                        <div className='col-lg-3'>
                            <div className="box_general general_info ">
                                
                                <p><b>Filter By Cities</b></p>
                                {
                                    getcomponent? <div>
                                    <li className='citiesname cursor-pointer btndiv ' onClick={(e) => onchangefun("Karachi")}>Karachi</li>
                                    <li className='citiesname cursor-pointer btndiv ' onClick={(e) => onchangefun("Lahore")}>Lahore</li>
                                    <li className='citiesname cursor-pointer btndiv ' onClick={(e) => onchangefun("Faisalabad")}>Faisalabad</li>
                                    <li className='citiesname cursor-pointer btndiv ' onClick={(e) => onchangefun("Rawalpindi")}>Rawalpindi</li>
                                    <li className='citiesname cursor-pointer btndiv ' onClick={(e) => onchangefun("Multan")}>Multan</li>
                                    <li className='citiesname cursor-pointer btndiv ' onClick={(e) => onchangefun("Hyderabad")}>Hyderabad</li>
                                    <li className='citiesname cursor-pointer btndiv ' onClick={(e) => onchangefun("Gujranwala")}>Gujranwala</li>
                                    <li className='citiesname cursor-pointer btndiv ' onClick={(e) => onchangefun("Peshawar")}>Peshawar</li>
                                    <li className='citiesname cursor-pointer  btndiv' onClick={(e) => onchangefun("Quetta")}>Quetta</li>
                                    <li className='citiesname cursor-pointer  btndiv' onClick={(e) => onchangefun("Islamabad")}>Islamabad</li>
                                    <li className='citiesname cursor-pointer mt-3 ' onClick={(e) => onchangefun("")}><b>Clear</b></li>
                                    </div>:<FilterDirectory/>
                                }
                               
                              
                            </div>
                            <div className='box_general general_info mt-3'>
                            <p><b>Popular Catogories</b></p>
                            {
                                  
                                    getdefaultdata ? (getdata.filter((obj)=>obj.name.toLowerCase()===getpapular.toLowerCase()).slice(0, 15).reverse().map((element,index, id) => {
                                        return (
                                            <>
                                            <a href={`/category/directory/${element.subcategories}`}>
                                            <p>{element.subcategories}</p>
                                            </a>
                                           
                                            
                                            </>
                                        )})):<p>No data found</p>

                            }
                            </div>
                        </div>

                        <div className="col-lg-8 px-3">
                            <div className="box_general general_info m-0 p-4">
                                {

                               
                            visibletest? 
                            <h3 className='text-gray text-center'>No Data Available</h3>
                              

                                :
                                <div>
                                {
                                    getdefaultdata ? (getuserdata.map((element, id) => {
                                        return (
                                            <>

                                                <Directorys element={element} key={id} />

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
                        {/* /col */}

                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </main>

            <Footer />
        </>
    )
}

export default Directory