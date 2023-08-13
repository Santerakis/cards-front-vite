import { NewPassword } from '@/components/auth/new-password/new-password.tsx'

export function App() {
  const onSubmit = (data: any) => console.log(data)

  return (
    <div>
      <NewPassword onSubmit={onSubmit} />
      {/*<CheckEmail />*/}
    </div>
  )
}
