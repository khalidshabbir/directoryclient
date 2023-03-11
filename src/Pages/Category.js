import React, { useState } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { categorydata } from '../Categorydata'
import { NavLink } from 'react-router-dom'
const Category = () => {
    const [getdata, setdata] = useState(categorydata)
    const test = getdata.map((obj) => obj.name)
    const [getname, setname] = useState([...new Set(test)])
 

    return (
        <>
            <Header />
            <section className="hero_single general">
                <div className="wrapper">
                    <div className="container">
                        <h1>Catogories</h1>

                    </div>
                </div>
            </section>
            <section className='container'>
                <h2 className='mt-5 color-gray'>Find a Business by Category</h2>
                <p className='my-3'>Pakistan Business Directory integrates all the best companies in Pakistan
                    into an easy-to-use, searchable database with a user-friendly and stylish interface. Not just any boring business directory, BusinessList.pk helps you look into the Pakistan business world with confidence and style including 1117 categories for better browsing.</p>

                <div>

                    {
                        getname.map((element, id) => {
                            return (
                                <>
                                    <h3 className='mt-5 mb-5' >{element}</h3>
                                    <div className='row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 px-3 d-flex justify-content-start '>
                                        {
                                            getdata.filter((obj)=>obj.name.toLowerCase().includes(element.toLowerCase())).map((element, id) => {
                                                return (
                                                    <>
                                                        <div className='col  mb-3 text-start ' key={element._id}><NavLink className="navlinkhover " to={`/category/directory/${element.subcategories}`}>{element.subcategories}</NavLink></div>
                                                    </>
                                                )
                                            })}



                                    </div>
                                </>
                            )
                        })}

                </div>




            </section>

            <Footer />

        </>
    )
}

export default Category