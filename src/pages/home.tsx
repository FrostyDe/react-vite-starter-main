import { useState } from 'react';
import { Container, Heading, Text, Button } from "@chakra-ui/react";
import Product from 'components/Product';
import { useNavigate } from "react-router-dom";
import ProductList from "../products.json";
import "./style.css";
import Cart from 'components/Cart';

const HomePage = () => {
  const productID = 0;
  const [cartAmount, setCartAmount] = useState(0);
  const [cart, setCart] = useState(false);
  const navigate = useNavigate();
  const [listProduct, setListProduct] = useState([]);

  function addCart(productID: number) {
    console.log("addToCard");
    console.log(ProductList[productID].name);
    if (cartAmount === 0) setCart(false);
    if (cartAmount < ProductList[productID].quantity) {
      setCart(true)
      setCartAmount(cartAmount + 1)
      console.log(cartAmount)
    }
    else {
      setCart(true)
      console.log("cart is full")
    }
  }

  return (
    <div className='home'>
      <div>
        <h1>Product</h1>
        <div className="container">
          {ProductList.map((product, index) => {
            return
            <>
              <Product img={product.imageUrl} name={product.name} price={product.price} action={() => addCart(index)} />
            </>
          })}
        </div>
      </div>
      <div>
        {cart && <Cart name={ProductList[productID].name} price={ProductList[productID].price} />}
      </div>
    </div>
  );
};

export default HomePage;
