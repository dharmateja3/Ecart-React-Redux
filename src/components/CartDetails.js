import React from 'react';
import './cartstyle.css';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeFromCart, increaseQuantity, decreaseQuantity  } from '../redux/actions/cartActions';
import { Link } from 'react-router-dom';

const CartDetails = () => {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
  
    const handleRemoveFromCart = (itemId) => {
      dispatch(removeFromCart(itemId));
    };
    const handleIncreaseQuantity = (itemId) => {
        dispatch(increaseQuantity(itemId));
      };
    
      const handleDecreaseQuantity = (itemId) => {
        dispatch(decreaseQuantity(itemId));
      };
  
      const getTotalAmount = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
      };
    const resetCart = () => {
        dispatch(clearCart());
    };

  return (
    <div>
        <div className='row justify-content-center'>
            <div className='col-md-8 my-5'>
                <div className='card'>
                    <div className='card-header bg-dark p-3'>
                        <div className='card-header-flex'> 
                            <h4 className='text-light m-0'>Your Cart &nbsp;<i class="fa-solid fa-cart-shopping"></i></h4>
                            {
                                items.length>0 ? <button className='btn btn-outline-danger mt-1 btn-sm' onClick={resetCart}><i className='fa fa-trash-alt mr-2'></i><span>Empty Cart</span></button> : ""
                            }
                        </div>
                    </div>
                    <div className='card-body p-0'>
                        {
                            items.length === 0 ? <table className='table cart-table mb-0'>
                                <tbody>
                                    <tr>
                                        <td colSpan={6}>
                                            <div className='cart-empty'>
                                                <i className='fa fa-shopping-cart'></i>
                                                <p>Your Cart is Empty</p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table> : 
                            <table className='table cart-table mb-0 table-responsive-sm'>
                                <thead className='text-center'>
                                    <tr>
                                        <th>Product</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total Price</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        items.map((item,index)=>{
                                            return(
                                                <>
                                                    <tr className='text-center'>
                                                        <td>
                                                            <div className='product-img'><img src={item.image} alt={item.title}/></div>
                                                        </td>
                                                        <td>
                                                            <div className='product-name'><p>{item.title}</p></div>
                                                        </td>
                                                        <td>
                                                            <div className='product-name'><p>$ {item.price}</p></div>
                                                        </td>
                                                        <td>
                                                            <div className="prdct-qty-container">
                                                                <button className='prdct-qty-btn' type='button' onClick={() => handleDecreaseQuantity(item.id)}>
                                                                    <i className='fa fa-minus'></i>
                                                                </button>
                                                                <input type="text" className='qty-input-box' value={item.quantity}/>
                                                                <button className='prdct-qty-btn' type='button' onClick={() => handleIncreaseQuantity(item.id)}>
                                                                    <i className='fa fa-plus'></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>$ {item.quantity * item.price}</td>
                                                        <td className='d-flex justify-content-center mb-0'>
                                                            <button className='prdct-delete' onClick={() => handleRemoveFromCart(item.id)}><i className='fa fa-trash-alt'></i></button>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                                <tfoot className='text-center'>
                                    <tr>
                                        <th colSpan={3}>&nbsp;</th>
                                        <th>Items In Cart <span className='mx-2'>:</span><span className='text-danger'>{items.length}</span></th>
                                        <th className='text-danger fs-5'>Total : $ {getTotalAmount().toFixed(2)}</th>
                                    </tr>
                                </tfoot>
                            </table>
                        }
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <div>
                        <Link to="/" class="btn btn-primary">Continue Shopping</Link>
                    </div>
                    <div>
                        <Link to="" class="btn btn-dark">Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartDetails