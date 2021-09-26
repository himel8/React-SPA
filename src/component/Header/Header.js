import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className ="header">
          <h1>Military Equipment Shop</h1>
          <h4><span className = 'header-bg'>Your Total Buget: $180 Billion</span></h4>
          <p>Buy latest military items for your country. We have tank, aircraft, missail, drone.</p>  
        </div>
    );
};

export default Header;