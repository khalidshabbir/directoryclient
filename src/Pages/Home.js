import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import GavelIcon from '@mui/icons-material/Gavel';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Testimonial from '../Components/Testimonial';
import { NavLink } from 'react-router-dom';
const Home = () => {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.offsetTop,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <div>
                <div id="page">
                    <Header />
                    {/* /header */}
                    <main>
                        <section className="hero_single version_3">
                            <div className="wrapper">
                                <div className="container">
                                    <h3>WELCOM TO PAKISTAN</h3>
                                    <p className='mt-3'>Business Directory</p>
                                    <div className="row justify-content-center">
                                        <div className="col-lg-9">
                                            {/* <form  >
                                                <div className="row g-0 custom-search-input-2">
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <input className="form-control" type="text" placeholder="Search for a company..." />
                                                            <i className="icon_search" />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-2">
                                                        <input type="submit" defaultValue="Search" />
                                                    </div>
                                                </div>
                                                {/* /row 
                                            </form> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* /hero_single */}
                        <div className="container margin_60_35">
                            <div className="main_title_2">
                                <h1>Top Categories</h1>

                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-2 col-6">
                                    <NavLink to="/category/directory/Restaurants" className="box_cat_home">
                                        <RestaurantOutlinedIcon className='fontsizeicons' />
                                        <h3>Restaurants</h3>

                                    </NavLink>
                                </div>
                                <div className="col-lg-2 col-6">
                                    <NavLink to="/category/directory/Vehicle Services" className="box_cat_home">
                                        <DirectionsCarOutlinedIcon className='fontsizeicons' />
                                        <h3>Automotive</h3>

                                    </NavLink>
                                </div>
                                <div className="col-lg-2 col-6">
                                    <NavLink to="/category/directory/Doctors and Clinics" className="box_cat_home">
                                        <MedicalServicesOutlinedIcon className='fontsizeicons' />
                                        <h3>Doctors</h3>

                                    </NavLink>
                                </div>

                                <div className="col-lg-2 col-6">
                                    <NavLink to="/category/directory/Shopping Centres" className="box_cat_home">
                                        <ShoppingCartRoundedIcon className='fontsizeicons' />
                                        <h3>Shopping</h3>

                                    </NavLink>
                                </div>
                                <div className="col-lg-2 col-6">
                                    <NavLink to="/category/directory/Lawyers" className="box_cat_home">
                                        <GavelIcon className='fontsizeicons' />
                                        <h3>Legal</h3>

                                    </NavLink>
                                </div>
                                <div className="col-lg-2 col-6">
                                    <NavLink to="/category/directory/Real Estate Agents" className="box_cat_home">
                                        <HomeIcon className='fontsizeicons' />
                                        <h3>Real Estate</h3>

                                    </NavLink>
                                </div>
                                <div className="col-lg-2 col-6">
                                    <NavLink to="/category/directory/Construction Services" className="box_cat_home">
                                        < BuildIcon className='fontsizeicons' />
                                        <h3>Contractors</h3>

                                    </NavLink>
                                </div>
                                <div className="col-lg-2 col-6">
                                    <NavLink to="/category/directory/Human Resources" className="box_cat_home">
                                        <BusinessCenterIcon className='fontsizeicons' />
                                        <h3>Employment</h3>

                                    </NavLink>
                                </div>
                                <div className="col-lg-2 col-6">
                                    <NavLink to="/category/directory/Schools" className="box_cat_home">
                                        <SchoolIcon className='fontsizeicons' />
                                        <h3>Schools</h3>

                                    </NavLink>
                                </div>
                                <div className="col-lg-2 col-6">
                                    <NavLink to="/category/directory/Computer Services" className="box_cat_home">
                                        <ComputerIcon className='fontsizeicons' />
                                        <h3>Computer</h3>

                                    </NavLink>
                                </div>
                                <div className="col-lg-2 col-6">
                                    <NavLink to="/category/directory/Event Services" className="box_cat_home">
                                        <EmojiEventsIcon className='fontsizeicons' />
                                        <h3>Events</h3>

                                    </NavLink>
                                </div>
                                <div className="col-lg-2 col-6">
                                    <NavLink to="/category" className="box_cat_home">
                                        <DashboardIcon className='fontsizeicons' />
                                        <h3>All</h3>

                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        {/* /container */}
                        <div className="bg_color_1">
                            <div className="container margin_60_35">
                                <div className="main_title_3 text-center">
                                    <h2>Browse Locations</h2>
                                   
                                </div>
                                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 justify-content-center">
                                    <div className="col-xl-10 col-lg-12">
                                        <div className="all_categories clearfix add_bottom_30">
                                            <ul>
                                                <li><NavLink to="/category/directory/locaiton/Lahore">Lahore</NavLink></li>
                                                <li><NavLink to="/category/directory/locaiton/Karachi">Karachi</NavLink></li>
                                                <li><NavLink to="/category/directory/locaiton/Faisalabad">Faisalabad</NavLink></li>
                                                <li><NavLink to="/category/directory/locaiton/Rawalpindi">Rawalpindi</NavLink></li>
                                                <li><NavLink to="/category/directory/locaiton/Multan">Multan</NavLink></li>
                                                <li><NavLink to="/category/directory/locaiton/Hyderabad">Hyderabad</NavLink></li>
                                                <li><NavLink to="/category/directory/locaiton/Gujranwala">Gujranwala</NavLink></li>
                                                <li><NavLink to="/category/directory/locaiton/Peshawar">Peshawar</NavLink></li>
                                                <li><NavLink to="/category/directory/locaiton/Quetta">Quetta</NavLink></li>
                                                <li><NavLink to="/category/directory/locaiton/Islamabad">Islamabad</NavLink></li>
                                       
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /container */}
                        </div>
                        {/* /bg_color_1 */}
                       <Testimonial/>
                        <div className="call_section_2">
                            <div className="wrapper">
                                <div className="container">
                                    <h3>Get started to List your Business.</h3>
                                    {/* <a className="btn_1 medium">Join Vanno Now!</a> */}
                                </div>
                            </div>
                        </div>
                        {/* /call_section_2 */}
                    </main>
                    {/* /main */}
                    <Footer />
                    {/*/footer*/}
                </div>

                <div id="toTop" onClick={scrollToBottom} />{/* Back to top button */}
            </div>

        </>
    )
}

export default Home