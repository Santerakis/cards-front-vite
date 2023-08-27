import { Button, TextField } from '@/components/ui'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui/table'
import { useGetDecksQuery } from '@/services/decks'
import { decksActions } from '@/services/decks/decks-slice.ts'
import { useAppDispatch, useAppSelector } from '@/services/store.ts'

export const Decks = () => {
  const dispatch = useAppDispatch()

  const itemsPerPage = useAppSelector(state => state.decks.itemsPerPage)
  const currentPage = useAppSelector(state => state.decks.currentPage)
  const searchByName = useAppSelector(state => state.decks.searchByName)

  const setItemsPerPage = (args: number) => dispatch(decksActions.setItemsPerPage(args))
  const setCurrentPage = (args: number) => dispatch(decksActions.setCurrenPage(args))
  const setSearchByName = (args: string) => dispatch(decksActions.setSearchByName(args))

  const { data, isLoading } = useGetDecksQuery({
    itemsPerPage,
    currentPage,
    name: searchByName,
  })

  return (
    <div>
      isLoading: {isLoading.toString()}
      <div>
        <Button onClick={() => setItemsPerPage(10)}>itemsPerPge: 10</Button>
        <Button onClick={() => setItemsPerPage(20)}>itemsPerPge: 20</Button>
        <Button onClick={() => setItemsPerPage(30)}>itemsPerPge: 30</Button>
      </div>
      <div>
        <Button onClick={() => setCurrentPage(1)}>currentPage: I</Button>
        <Button onClick={() => setCurrentPage(2)}>currentPage: II</Button>
        <Button onClick={() => setCurrentPage(3)}>currentPage: III</Button>
      </div>
      <TextField value={searchByName} onChange={e => setSearchByName(e.currentTarget.value)} />
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell>Last Updated</TableHeadCell>
            <TableHeadCell>Created By</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.items.map(deck => {
            return (
              <TableRow key={deck.id}>
                <TableCell>{deck.name}</TableCell>
                <TableCell>{deck.cardsCount}</TableCell>
                <TableCell>{new Date(deck.updated).toLocaleDateString()}</TableCell>
                <TableCell>{deck.author.name}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
