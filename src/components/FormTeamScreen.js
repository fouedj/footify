import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import COLORS from '../commun/color'
import { Styles } from '../commun/Styles'

export default function FormTeamScreen() {
    return (
        <View style={styles.container}>
            <Text>Team Pages!!</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
      backgroundColor:COLORS.backgroundColorContainer,
     ...Styles.flexCenter
    },
   
  })