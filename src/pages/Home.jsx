import { useState } from 'react'; // React hook to manage state
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Product from '../components/Products';
import Footer from '../components/Footer';

export default function Home() {
  // We create state to track the selected category
  const [category, setCategory] = useState('all');

  return (
    <div>
      <Nav />
      {/* Pass the selected category to Hero */}
      <Hero category={category} />
      
      {/* Pass the selected category and the setter to Products */}
      <Product category={category} setCategory={setCategory} />

      <Footer />
    </div>
  );
}