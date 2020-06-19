import ApolloClient from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {createHttpLink} from 'apollo-link-http'
import {setContext}from 'apollo-link-context'
import AsyncStorage from '@react-native-community/async-storage'

import { ApolloLink, split } from "apollo-link";


const httpLink=createHttpLink({
    uri:'http://192.168.1.17:5000'
})
const authLink=setContext(()=>{
    const token=AsyncStorage.getItem('jwtToken')
    return {
        headers:{
            Authorization: token ? `Bearer ${token}` :''
        }
    }
    
    })
const client = new ApolloClient({
    link:  ApolloLink.from([authLink,httpLink]),
    cache:new InMemoryCache()
})

export default client