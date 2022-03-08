import React from 'react'
import {Link} from 'react-router-dom'
import './Style.css'

function Header() {
    return (
        <div className='headerListbox'>
            <ul type="none" className='headerList'>
                <li>    <Link to="/home" className='headerHeading'>Home</Link>    </li>
                <li>    <Link to="/student" className='headerHeading'>Student</Link>    </li>
                <li>    <Link to="/contact" className='headerHeading'>Contact Us</Link>    </li>
            </ul>
        </div>
    )
}

export default Header