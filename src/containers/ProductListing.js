import React, { useEffect } from "react";
import axios from "axios";
import { setProducts } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "./SingleProduct";

function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products`);

      dispatch(setProducts(res.data));
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <div>
      <SingleProduct />;
    </div>
  );
}

export default ProductListing;
