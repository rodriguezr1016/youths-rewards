
import { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;
  
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }
  
   const navigate = useNavigate();
   
    const handleClick = () => {
      let searchInput = document.querySelector('.search').value
      state.products.forEach((product) => {
        if(product.name.toLowerCase().trim()===searchInput.toLowerCase().trim()){
          console.log(product._id)
         
        }
        
       });
    
     navigate('/orderHistory');
    };
   
  const userInput = () => {
    let searchInput = document.querySelector('.search').value
    state.products.forEach((product) => {
      if(product.name.toLowerCase().trim()===searchInput.toLowerCase().trim()){
        console.log(product._id)
       let productID= product._id;
        navigate(`/products/${productID}`)
      }
      
      
     });
    
  };
   

  return (
    <div className="my-2">
        <div className='searchBar'>
          <input className='search'>
          </input>
      
          <button className='searchbtn'onClick={()=> {userInput();}}>
          Search</button>
        </div>
      {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;