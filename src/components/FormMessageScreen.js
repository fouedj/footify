import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import COLORS from '../commun/color'
import { Styles } from '../commun/Styles'

export default function FormMessageScreen() {
    return (
        <View style={styles.container}>
            <Text>Message Page</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
      backgroundColor:COLORS.backgroundColorContainer,
     ...Styles.flexCenter
    },
   
  })