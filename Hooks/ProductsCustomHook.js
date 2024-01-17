import { useState, useEffect } from "react";
import { getProducts } from "../api.js";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  const loadList = async () => {
    const {data} =await getProducts()
    setProducts(data);
  };

  useEffect(() => {
    loadList();
  }, []);

  return {products : products, loadList: loadList};
}