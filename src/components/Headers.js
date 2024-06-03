import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Headers = () => {
    const cartItems = useSelector(state => state.cart.items);
    
  return (
    <div className='sticky-top'>
        <nav class="navbar bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand text-light fs-2" href="/">Ecommerce</a>
                <div className='text-light' id='ex4'>
                    <span className='p1 fa-stack fa-2x has-badge' data-count={cartItems.length}>
                        <Link to="/cart" className='text-light'><i class="fa fa-cart-shopping"></i></Link>
                    </span>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Headers