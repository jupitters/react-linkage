import React from 'react'
import { useForm } from 'react-hook-form'

const RegisterPage = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

  return (
    <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
        <form>

        </form>
    </div>
  )
}

export default RegisterPage