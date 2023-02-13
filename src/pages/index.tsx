import { Cart, Footer, FooterBanner, HeroBanner, Layout, NavBar, Product } from '../components';

export default function index() {
  const dummyProducts = ['Products 1 ', 'Products 2 ', 'Products 3 ', 'Product 4 '];

  return (
    <>
      Hero Banner

      <div className="products-heading">
        <h1>Best Selling Products</h1>
        <p>Speakers of many variations</p>
      </div>

      <div>
        {dummyProducts.map((Product) => (Product))}
      </div>

    </>
  );
}
