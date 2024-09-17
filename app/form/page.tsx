'use client'
import ButtonSubmit from "@/components/Buttom"
import Label from "@/components/Label"
import InputForm from "@/types/form"
import { SubmitHandler, useForm } from "react-hook-form"

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputForm>()

  const onSubmit: SubmitHandler<InputForm> = (data) => {
    console.log(data)
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="box-border p-8 rounded-lg bg-white border-4 border-gray-300 grid grid-cols-2 gap-8" >
        <div>
          <Label htmlFor="name" className="text-blue-500">Name:</Label>
          <input  className="text-base font-sans p-1 rounded-md bg-white border-2 border-gray-300" id='name' {...register('name', { required: 'The field name is mandatory'})} />
          { errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <Label htmlFor="email" className="text-blue-500">Email:</Label>
          <input className="text-base font-sans p-1 rounded-md bg-white border-2 border-gray-300" id='email' {...register('email', { required: 'The field email is mandatory'})} />
          { errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <Label htmlFor="password" className="text-blue-500">Passowrd:</Label>
          <input className="text-base font-sans p-1 rounded-md bg-white border-2 border-gray-300" id='password' {...register('password', { 
            required: 'The field password is mandatory',
            minLength: {
              value: 8,
              message: "The password must be at least 8 characters long"
            },
            maxLength:{
              value: 30,
              message: "The password must be at most 30 characters long"
            },
            })} />
          { errors.password && <p>{errors.password.message}</p>}
        </div>

        <div className="bg-gray-200 border border-gray-300 rounded-lg p-4 shadow-md max-w-sm mx-auto">
          <ButtonSubmit>Send</ButtonSubmit>
        </div>
      </form>
    )
  }