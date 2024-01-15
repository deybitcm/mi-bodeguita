import { useState, useEffect } from "react";
import { getSales } from "../api.js";

export const useSales = () => {
  const [sales, setSales] = useState([]);

  const loadList = async () => {
    const data =await getSales()
    setSales(data);
  };

  useEffect(() => {
    loadList();
  }, []);

  return {sales : sales, loadList: loadList};
}