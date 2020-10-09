import React from 'react';
import './menu-item.style.scss';

const MenuItem = ({ title, id, imageUrl, size }) => (
    <div className={`menu-item ${size}`} key="{id}">
        <div className="background-image" style={{ background: `url(${imageUrl})`}}/>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;