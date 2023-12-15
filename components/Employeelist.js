import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Employeelist = ({employees}) => {
  return (
    <FlatList
        data={employees}
        renderItem={({ item }) => <Text>{item.nombre}</Text>}
        keyExtractor={(item) => item.id_empleado.toString()}
    />
  )
}

export default Employeelist