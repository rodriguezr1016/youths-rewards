import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import CategoryMenu from "../components/CategoryMenu";

const Home = () => {
  return (
    <div>
      {/* <img className='coolWebsite'src='images/nothing_2796305478.png'></img> */}

    <div className="container">
      <Cart />
      <CategoryMenu />
      <ProductList />
    </div>
    </div>
  );
};

export default Home;