import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Layout from "../components/Layout.js";
import PersonList from "../components/Personlist.js";
import { getClients } from "../api.js";

const PersonListScreen = () => {
  const [clients, setClients] = useState([]);

  const loadList = async () => {
    const data = await getClients();

    const test = [
      { nombre: "test", id_persona: 1 },
      { nombre: "test2", id_persona: 2 },
    ];
    setClients(data);
  };

  useEffect(() => {
    loadList();
  }, []);

  return (
    <Layout>
      <PersonList clients={clients} />
    </Layout>
  );
};

export default PersonListScreen;
