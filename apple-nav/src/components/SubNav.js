import React from 'react';
import {useParams} from 'react-router-dom';
import '../App.css';

function SubNav(props) {
    const params = useParams();
    const appleProduct = props.topNav.find(item=>params.productID===`${item.id}`);
    
    return (
        <div className="botNav">
        {
            appleProduct.subtitle.map(item => {
                return <a href='#'>{item}</a>
            })
        }
        </div>
    )
}

export default SubNav;