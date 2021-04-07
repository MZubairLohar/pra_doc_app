import React from 'react';
import './Navbar.css';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import HomeIcon from '@material-ui/icons/Home';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='nav_left'>
                <ImportContactsIcon /> 
            </div>
            <div className='nav_right'>
            <Link to='/' >
                <div className='icon_one'>
                    {HomeIcon }
                </div>
            </Link>
            
            <Link to='/search' >
                <div className='icon_two'>
                    {ImageSearchIcon} 
                </div>
            </Link>    
            </div>
            
        </div>
    )
}

export default Navbar
