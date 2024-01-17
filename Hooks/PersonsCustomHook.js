import { useState, useEffect } from "react";
import { getCustomers } from "../api.js";
import { getSuplliers } from "../api.js";
import { getEmployees } from "../api.js";

export const usePersons = ({option}) => {
  const [persons, setPersons] = useState([]);

  const loadList = async () => {
    const data = option == 1 
      ? await getCustomers() 
      : option == 2 
        ? await getSuplliers() 
        : await getEmployees();
    
    setPersons(data);
  };

  useEffect(() => {
    loadList();
  }, []);

  return {persons : persons, loadList: loadList};
}