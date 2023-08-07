import React, { useEffect, useState } from 'react';
import styles from './FeaturedProducts.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const FeaturedProducts = () => {

    const [products, setproducts] = useState([])
    async function getProducts() {
        let { data } = await axios.get('https://route-ecommerce.onrender.com/api/v1/products')
        setproducts(data.data)
    }


    useEffect(() => {
        getProducts()
    }, []);
    return (

        <div className='row m-0 '>
            {products.map((product) =>
                <>
                    <div className='col-md-2 py-3 cursor-pointer' key={product._id}>
                        <Link to={`/productDetails/${product._id}`}>
                            <div className='product ' >
                                <img className='w-100 ' alt='img' src={product.imageCover}></img>
                                <div className='px-2 py-2'>
                                    <span className='text-main fw-bold font-sm'>{product.category.name}</span>
                                    <h3 className='h6 fw-bolder'>{product.title.split(' ').slice(0, 2).join(' ')}</h3>
                                    <div className='d-flex justify-content-between '>
                                        <span className='text-muted'>{product.price}</span>
                                        <span className='text-muted'>
                                            <i className='fas fa-star rating-color'></i>
                                            {product.ratingsAverage}
                                        </span>
                                    </div>
                                </div>

                                <button className='btn bg-main text-white w-100 px-0'>
                                    + Add
                                </button>


                            </div>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}

export default FeaturedProducts;
