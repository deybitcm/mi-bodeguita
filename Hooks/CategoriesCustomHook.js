import { useState, useEffect } from "react";
import { getCategories } from "../api.js";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);

  const loadList = async () => {
    const data =await getCategories()
    setCategories(data);
  };

  useEffect(() => {
    loadList();
  }, []);

  return {categories : categories, loadList: loadList};
}