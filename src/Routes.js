import React from 'react'

import { Router, Scene, Stack } from 'react-native-router-flux'
import Login from './pages/Login'
import Register from './pages/register'
import HomeScreenNavigation from './pages/HomeScreenNavigation'
import HomeScreen from './pages/HomeScreen'

function Routes(){
    return(
    <Router>
      <Stack key = "root" hideNavBar={true}>
         <Scene key = "homeScreen" component = {HomeScreen} title = "HomeScreen" initial = {true}/>
         <Scene key = "login" component = {Login} title = "Login" />
         <Scene key = "register" component = {Register} title = "Register"  />
         <Scene key = "HomeScreenNavigation" component = {HomeScreenNavigation} title = "HomeScreenNavigation"  />
      </Stack>
      
   </Router>)
}


export default Routes
