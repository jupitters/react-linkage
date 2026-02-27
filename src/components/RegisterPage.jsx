import React from 'react'
import { useForm } from 'react-hook-form'

const RegisterPage = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm(
        {
            defaultValues: {
                username: "",
                email: "",
                password: ""
            },
            mode: "onTouched",
        }
    );

    const registerHandler = async (data) => {
        
    }

  return (
    <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
        <form onSubmit={handleSubmit(registerHandler)} className='sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md'>
        <h1 className='text-center font-serif text-btnColor font-bold lg:text-3xl text-2xl'>Register Here</h1>
        </form>
    </div>
  )
}

export default RegisterPage