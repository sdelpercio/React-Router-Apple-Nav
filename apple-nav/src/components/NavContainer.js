import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function NavContainer(props) {
    return (
        <div className="topNav">
            <Link to='/'>🍎</Link>
        {
            props.topNav.map(item => {
                return <Link to={`/products/${item.id}`}>{item.title}</Link>
            })
        }
        </div>
    )
}

export default NavContainer;