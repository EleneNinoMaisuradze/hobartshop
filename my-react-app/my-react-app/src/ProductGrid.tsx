import './ProductGrid.css';

const products = [
  {
    img: 'images/candle.jpg',
    name: 'სოიოს სანთლები',
    desc: 'ბუნებრივი, ეკო-მეგობრული და არომატული სანთლები.',
    price: '₾18'
  },
  {
    img: 'images/jewelry.jpg',
    name: 'სამკაულები',
    desc: 'ხელით დამზადებული სამკაულები ებოქსიდით.',
    price: '₾25'
  },
  {
    img: 'images/toy.jpg',
    name: 'სათამაშოები',
    desc: 'სითბოთი ნაკერი ტექსტილის სათამაშოები.',
    price: '₾30'
  }
];

function ProductGrid() {
  return (
    <section className="products">
      <h2>პროდუქცია</h2>
      <div className="product-grid">
        {products.map((p, i) => (
          <div className="product-card" key={i}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <div className="price">{p.price}</div>
            <button type="button">დამატება კალათაში</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;