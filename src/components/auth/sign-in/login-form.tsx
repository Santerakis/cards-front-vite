import { Button, Card, Typography } from '../../ui'

import s from './login-form.module.scss'
import { useLoginForm } from './use-login-form.ts'

import { ControlledCheckbox, ControlledTextField } from '@/components/ui/controlled'

export const LoginForm = ({ onSubmit }: any) => {
  const { handleSubmit, control } = useLoginForm(onSubmit)

  return (
    <Card className={s.card}>
      <Typography variant="large" as={'h1'}>
        Sign in
      </Typography>

      <form onSubmit={handleSubmit}>
        <ControlledTextField
          label="email"
          name="email"
          control={control}
          containerProps={{ className: s.textField }}
        />
        <ControlledTextField
          type="password"
          label="password"
          name="password"
          control={control}
          containerProps={{ className: s.textField }}
        />
        <ControlledCheckbox
          label="Remember me"
          name="rememberMe"
          control={control}
          className={s.checkbox}
          position="left"
        />

        <Typography variant="body2" as="a" className={s.forgotPassword}>
          Forgot password?
        </Typography>

        <Button type={'submit'} fullWidth>
          Submit
        </Button>
      </form>
      <Typography variant="body2" className={s.noAccount}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Don't have an account?
      </Typography>

      <Typography as={'a'} href={'/sing-up'} className={s.signUpLink}>
        Sign Up
      </Typography>
    </Card>
  )
}
