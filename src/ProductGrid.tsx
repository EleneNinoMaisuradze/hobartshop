import React, { useState } from 'react';
import ProductGrid from '../src/ProductGrid ;

const productsData = [
  {
    id: 1,
    name: 'სოიოს სანთლები',
    description: 'ბუნებრივი, ეკო-მეგობრული და არომატული სანთლები.',
    price: 18,
    imageUrl: '/images/candle.jpg',
    altText: 'სოიოს სანთლები',
  },
  {
    id: 2,
    name: 'სამკაულები',
    description: 'ხელით დამზადებული სამკაულები ებოქსიდით.',
    price: 25,
    imageUrl: '/images/jewelry.jpg',
    altText: 'სამკაულები',
  },
  {
    id: 3,
    name: 'ტექსტილის სათამაშოები',
    description: 'სითბოთი ნაკერი ტექსტილის სათამაშოები.',
    price: 30,
    imageUrl: '/images/toy.jpg',
    altText: 'ტექსტილის სათამაშოები',
  },
];

const App: React.FC = () => {
  const [cart, setCart] = useState<number[]>([]);

  const handleAddToCart = (productId: number) => {
    setCart(prevCart => [...prevCart, productId]);
    alert(`პროდუქტი დამატებულია კალათაში (ID: ${productId})`);
  };

  return <ProductGrid products={productsData} onAddToCart={handleAddToCart} />;
};

export default App;
