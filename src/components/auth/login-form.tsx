import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui'
import { ControlledCheckbox, ControlledTextField } from '@/components/ui/controlled'

// type FormValues = {
//   email: string
//   password: string
//   rememberMe: boolean
// }

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(3, 'Password  must be least 8 characters'),
  rememberMe: z.boolean().default(false),
})

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/*<TextField {...register('email')} label={'email'} />*/}
      <ControlledTextField name={'email'} control={control} label={'email'} />
      <ControlledTextField name={'password'} control={control} label={'password'} type="password" />
      <ControlledCheckbox name={'rememberMe'} control={control} label={'remember me'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
