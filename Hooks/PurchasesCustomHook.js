import { useState, useEffect } from "react";
import { getPurchases } from "../api.js";

export const usePurchases = () => {
  const [purchases, setPurchases] = useState([]);

  const loadList = async () => {
    const {data}= await getPurchases()
    setPurchases(data);
  };

  useEffect(() => {
    loadList();
  }, []);

  return {purchases : purchases, loadList: loadList};
}