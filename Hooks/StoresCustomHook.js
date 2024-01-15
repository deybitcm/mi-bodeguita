import { useState, useEffect } from "react";
import { getStores } from "../api.js";

export const useStores = () => {
  const [stores, setStores] = useState([]);

  const loadList = async () => {
    const data =await getStores()
    setStores(data);
  };

  useEffect(() => {
    loadList();
  }, []);

  return {stores : stores, loadList: loadList};
}