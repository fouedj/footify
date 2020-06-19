import { useState } from "react"
export const useForm=(initialState={})=>{
    //const[errors,setErrors]=useState(null)
    const[values,setValues]=useState(initialState)
    
    const onChange=(e,name)=>{
        setValues({...values,[name]:e})
            }
    const onSubmit=()=>{
      
          
        }
        return{
            onChange,
            onSubmit,
            values
        }
}