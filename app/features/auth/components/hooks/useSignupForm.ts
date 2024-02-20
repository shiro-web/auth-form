"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { signupFormSchema } from "../lib/signupFormSchema"
import { z } from "zod"

export const  useSignupForm = () => {
    const form = useForm<z.infer<typeof signupFormSchema>>({
        resolver:zodResolver(signupFormSchema),
        defaultValues:{
            username:"",
            email:"",
            password:"",
        }
      })
      
      const onSubmit:SubmitHandler<z.infer<typeof signupFormSchema>> = (data) => {
        const {username,email,password} = data;
        console.log(data)
      }

      return{form,onSubmit};
}