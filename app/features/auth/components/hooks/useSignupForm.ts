"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { signupFormSchema } from "../lib/formSchema"
import { z } from "zod"
import { useRouter } from "next/router"
import { supabase } from "../lib/supabaseClient"

export const  useSignupForm = () => {
  const router = useRouter();
    const form = useForm<z.infer<typeof signupFormSchema>>({
        resolver:zodResolver(signupFormSchema),
        defaultValues:{
            username:"",
            email:"",
            password:"",
        }
      })
      
      const onSubmit:SubmitHandler<z.infer<typeof signupFormSchema>> = async(data) => {
        const {username,email,password} = data;
        console.log(data)

        try{
          const { data, error:signUpError } = await supabase.auth.signUp({
            email,
            password,
          })
          if(signUpError){
            console.log(signUpError)
            throw signUpError;
          }

          router.push("/auth/login")
        }catch(error){
          if(error instanceof Error){
            console.log(error.message);
          }
        }
      }

      return{form,onSubmit};
}