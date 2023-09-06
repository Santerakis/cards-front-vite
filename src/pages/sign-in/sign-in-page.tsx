import { Navigate, useNavigate } from 'react-router-dom'

import { SignIn } from '@/components/auth'
import { Loader } from '@/components/ui/loader/Loader.tsx'
import { useLoginMutation, useMeQuery } from '@/services/auth/auth-api.ts'

export const SignInPage = () => {
  const { data, isLoading, isError, refetch } = useMeQuery()
  const [signIn, { data: mutData }] = useLoginMutation()
  const navigate = useNavigate()

  console.log('render login page me', data)
  console.log('render login page mut', mutData)

  if (isLoading) return Loader()
  if (data) return <Navigate to={'/'} />

  const handleSignIn = (data: any) => {
    signIn(data)
      .unwrap()
      .then(() => navigate('/'))
  }

  return <SignIn onSubmit={handleSignIn} />
}
