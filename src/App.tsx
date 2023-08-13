import { RecoverPassword } from '@/components/auth/recover-password/recover-password.tsx'

export function App() {
  const onSubmit = (data: any) => console.log(data)

  return (
    <div>
      <RecoverPassword onSubmit={onSubmit} />
      {/*<CheckEmail />*/}
    </div>
  )
}
