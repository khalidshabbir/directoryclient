import React from 'react'
import { NavLink } from 'react-router-dom'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { ImProfile } from 'react-icons/im'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { BsJournalBookmarkFill } from 'react-icons/bs'
import { AiOutlineFileProtect } from 'react-icons/ai'
import { SiGoogleclassroom } from 'react-icons/si'
import { MdOutlineSchool } from 'react-icons/md'
import { VscSignIn } from 'react-icons/vsc'

const Header = () => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className='  mt-5'>
                <div className='mt-5 pt-3'>
                <ul>
                        <li className='mb-3'><span><NavLink to="/">Home</NavLink></span> </li>
                        <li className='mb-3'><span><NavLink to="/aboutus">About us</NavLink></span></li>
                        <li className='mb-3'><span><NavLink to="/reviews">Reviews</NavLink></span> </li>
                        <li className='mb-3'><span><NavLink to="/pricing">Pricing</NavLink></span></li>
                        <li className='mb-3'><span><NavLink to="/contactus">Contact us</NavLink></span></li>


                    </ul>
                </div>
           

            </div>
           


        </Box>
    );
    return (
        <>
            <header className="header menu_fixed">
           
                <div id="logo">
                    <NavLink to="/">
                        <img src="/img/logo.png" width={140} height={35} alt className="logo_normal" />
                        <img src="/img/logo1.png" width={140} height={35} alt className="logo_sticky" />
                    </NavLink>
                </div>

              
              
                <nav id="menu" className="main-menu">
                    <ul>
                        <li><span><NavLink to="/">Home</NavLink></span>

                        </li>
                        <li><span><NavLink to="/aboutus">About us</NavLink></span>
                        </li>
                        <li><span><NavLink to="/reviews">Reviews</NavLink></span>
                        </li>

                        <li><span><NavLink to="/pricing">Pricing</NavLink></span></li>

                        <li><span><NavLink to="/contactus">Contact us</NavLink></span>
                        </li>


                    </ul>
                </nav>
                <div>
                    {['left',].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button className="navbar-toggler m-0 p-0 d-lg-none d-block"
                                type="button"

                                onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}
                </div>

            </header>
        </>
    )
}

export default Header