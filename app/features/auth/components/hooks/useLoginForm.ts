"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { loginFormSchema } from "../lib/formSchema"
import { z } from "zod"

export const  useLoginForm = () => {
    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver:zodResolver(loginFormSchema),
        defaultValues:{
            email:"",
            password:"",
        }
      })
      
      const onSubmit:SubmitHandler<z.infer<typeof loginFormSchema>> = (data) => {
        const {email,password} = data;
        console.log(data)
      }

      return{form,onSubmit};
}