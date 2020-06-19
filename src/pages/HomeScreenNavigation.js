import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import FormHomeNavigation from '../components/FormHomeNavigation'
const HomeScreenNavigation = () => {
    return (
    <NavigationContainer>
    <FormHomeNavigation/>
    </NavigationContainer>
    )
}

export default HomeScreenNavigation
