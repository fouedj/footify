import React,{createContext,useReducer} from 'react'
import jwtDecode from 'jwt-decode'
import AsyncStorage from '@react-native-community/async-storage'
const initalState={
    user:null
}
if(AsyncStorage.getItem('jwtToken')){
const decodedtoken= jwtDecode(AsyncStorage.getItem('jwtToken'))
if (decodedtoken.exp*1000<Date.now()){
    AsyncStorage.removeItem('jwtToken')

}else{
initalState.user=decodedtoken;
}

}

const AuthContext=createContext({
    user:null,
    login:(userData)=>{},
    logout:()=>{}
})
function authReducer(state,action){
    switch(action.type){
case 'LOGIN':
    return{
        ...state,
        user:action.payload
    }
    case'LOGOUT':
    return{
        ...state,
        user:null
    }


        default:
        return state
    }
}
function AuthProvider(props){
    const[state,dispatch]=useReducer(authReducer,initalState
    
    )
    const login=(userData)=>{
        AsyncStorage.setItem("jwtToken",userData.token)
        dispatch({
        type:'LOGIN',
        payload:userData}
)
    }
    function logout(){
        AsyncStorage.removeItem('jwtToken')
        dispatch({
            type:'LOGOUT'
        })
    }
    return(
        <AuthContext.Provider
        value={{login,logout,user:state.user}}
        {...props}
        />
    )
}
export {AuthContext,AuthProvider}