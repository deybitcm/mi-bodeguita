import { useState, useEffect } from "react";
import { getStoreTypes } from "../api.js";

export const useStoreTypes = () => {
  const [storeTypes, setStoreTypes] = useState([]);

  const loadList = async () => {
    const {data} = await getStoreTypes()
    setStoreTypes(data);
  };

  useEffect(() => {
    loadList();
  }, []);

  return {storeTypes : storeTypes, loadList: loadList};
}