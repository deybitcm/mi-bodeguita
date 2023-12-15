import { View, StyleSheet } from 'react-native'
import React from 'react'

const Layout = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fef04f',
    padding: 20,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
})

export default Layout