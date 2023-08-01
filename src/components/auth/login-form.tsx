import { useController, useForm } from 'react-hook-form'

import { Button, TextField } from '@/components/ui'
import { ControlledTextField } from '@/components/ui/controlled'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { control, handleSubmit, register } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  // const {
  //   field: { value, onChange },
  // } = useController({
  //   name: 'email',
  //   control,
  //   defaultValue: '111',
  // })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/*<TextField {...register('email')} label={'email'} />*/}
      <ControlledTextField name={'email'} control={control} label={'email'} />
      <ControlledTextField name={'password'} control={control} label={'password'} />
      {/*<Checkbox onCheckedChange={onChange} checked={value} label={'remember me'} />*/}
      <Button type="submit">Submit</Button>
    </form>
  )
}
