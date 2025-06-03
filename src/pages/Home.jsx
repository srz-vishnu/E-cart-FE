import { useState } from 'react';
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Product from '../components/Products'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div>
            <Nav />
            <Hero />
            <Product />
            <Footer />
        </div>
    )
}