import { useGetDecksQuery } from '@/services/base-api.ts'

export const Decks = () => {
  const { data, isLoading } = useGetDecksQuery()

  if (isLoading) return <div>Loading...</div>
  console.log(data)

  return <div>{JSON.stringify(data)}</div>
}
