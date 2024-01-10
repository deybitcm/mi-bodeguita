import { useState, useEffect } from "react";
import { getPurchases } from "../api.js";

export const usePurchases = () => {
  const [sales, setSales] = useState([]);

  const loadList = async () => {
    const data =await getPurchases()
    setSales(data);
  };

  useEffect(() => {
    loadList();
  }, []);

  return {sales : sales, loadList: loadList};
}