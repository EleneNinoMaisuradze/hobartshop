import './App.css';
import ProductGrid from './ProductGrid';

function App() {
  return (
    <div className="container">
      <header>
        <div className="logo">HobArt</div>
        <nav>
          <ul>
            <li><a href="#">მთავარი</a></li>
            <li><a href="#">ჩვენს შესახებ</a></li>
            <li><a href="#">პროდუქცია</a></li>
            <li><a href="#">კონტაქტი</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>მოგესალმებით HobArt-ში</h1>
          <p>ხელნაკეთი სანთლები, აქსესუარები და ემოცია თითოეულ ნივთში.</p>
        </section>
        <ProductGrid />
      </main>
      <footer>
        <p>&copy; 2025 HobArt. ყველა უფლება დაცულია.</p>
      </footer>
    </div>
  );
}

export default App;
