import { Link } from 'react-router-dom'

import { Button, Card, ControlledCheckbox, ControlledTextField, Typography } from '../../ui'

import s from './sign-in.module.scss'
import { Form, useSignIn } from './use-sign-in.ts'

type Props = {
  onSubmit: (data: Form) => void
}

export const SignIn = (props: Props) => {
  const { handleSubmit, control, formState } = useSignIn(props.onSubmit)

  console.error('form error: ', formState.errors)

  return (
    <Card className={s.card}>
      <Typography variant="large" className={s.title}>
        Sign in
      </Typography>

      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.inputs}>
          <ControlledTextField label="Email" name={'email'} control={control} />
          <ControlledTextField
            label="Password"
            name={'password'}
            control={control}
            type={'password'}
          />
        </div>

        <ControlledCheckbox
          label={'Remember me'}
          name={'rememberMe'}
          control={control}
          className={s.checkbox}
          position={'left'}
        />
        <Typography
          variant="body2"
          as={Link}
          to="/recover-password"
          className={s.recoverPasswordLink}
        >
          Forgot Password?
        </Typography>

        <Button className={s.button} type={'submit'} fullWidth>
          Submit
        </Button>
      </form>
      <Typography variant="body2" className={s.noAccount}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Don't have an account?
      </Typography>

      <Typography variant="link1" as={Link} to="/sign-up" className={s.signUpLink}>
        Sign Up
      </Typography>
    </Card>
  )
}
