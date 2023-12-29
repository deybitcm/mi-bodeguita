import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Layout from "../components/Layout.js";
import PersonList from "../components/Personlist.js";
import { getPersons } from "../api.js";

const PersonListScreen = () => {
  const [persons, setPersons] = useState([]);

  const loadList = async () => {
    const data = await getPersons();
    console.log(data);

    const test = [
      { nombre: "test", id_persona: 1 },
      { nombre: "test2", id_persona: 2 },
    ];
    setPersons(data);
  };

  useEffect(() => {
    loadList();
  }, []);

  return (
    <Layout>
      <PersonList persons={persons} />
    </Layout>
  );
};

export default PersonListScreen;
