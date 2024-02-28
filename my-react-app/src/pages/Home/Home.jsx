import React from 'react';
import Hero from './Hero';
import FeaturedProducts from './FeaturedProducts';
import Categories from './Categories';
import ProductList from './ProductList';

const Home = () => {
    return (
        <div>
            <Hero />
            <FeaturedProducts />
            <Categories />
            <ProductList />
        </div>
    );
};

export default Home;