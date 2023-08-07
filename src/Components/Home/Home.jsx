import React from 'react';
import styles from './Home.module.css';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import CategorySlider from '../CategorySlider/CategorySlider';

const Home = () => {
    return (
        <>
            <CategorySlider />
            <FeaturedProducts />
        </>

    );
}

export default Home;
