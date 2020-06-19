import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import FormTeamScreen from './FormTeamScreen'
import FormMatchScreen from './FormMatchScreen'
import FormMessageScreen from './FormMessageScreen'
const FormHomeNavigation = () => {
    const Tab= createBottomTabNavigator()
    

    return (
   
          <Tab.Navigator tabBarOptions={{
          inactiveBackgroundColor:'#455a64',
          activeBackgroundColor:'#1c313a',
          activeTintColor:'white',
          inactiveTintColor:'black',
          labelPosition:"beside-icon",
          labelStyle:styles.tabs

          }} >
            <Tab.Screen name="Team" component={FormTeamScreen} />
            <Tab.Screen name="Message" component={FormMatchScreen}/>
            <Tab.Screen name="Match" component={FormMessageScreen}/>
        </Tab.Navigator>
     
    )
}
const styles=StyleSheet.create({
  tabs:{
  alignItems:'center',
  fontSize:14,
  fontWeight:'bold',
  marginHorizontal:15
}
})

export default FormHomeNavigation
