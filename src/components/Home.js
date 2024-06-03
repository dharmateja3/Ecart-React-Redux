import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import CardsData from './CardData';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const Home = () => {
    const [cardData, setcardData] = useState(CardsData);
    const dispatch = useDispatch();
      
    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };
  return (
    <div>
        <div className=' mt-2'>  
            <h2 className='px-4 fw-bold'>Latest Collections</h2>
            <hr></hr>
            <div className='row mt-2 d-flex align-items-start justify-content-around'>
                {
                    cardData.map((item,index)=>{
                        return(
                            <div class="card hove mb-2" style={{"width": 300,"height":420}}>
                                <img src={item.image} class="card-img-top mt-2" alt={item.title}/>
                                <div class="card-body">
                                    <h5 class="card-title">{item.title}</h5>
                                    <h4>$ {item.price}</h4>
                                    <Link to="" class="btn btn-outline-dark" onClick={() => handleAddToCart(item)}>Add to Cart</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Home