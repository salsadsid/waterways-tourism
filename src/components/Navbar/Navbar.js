import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click);
    }
    return (
        <>
            <nav>
                <div>
                    <Link to='/'>
                        Waterways Tourism
                    </Link>
                </div>
                <div onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faBars : faTimes} />
                </div>
            </nav>
        </>
    );
};

export default Navbar;