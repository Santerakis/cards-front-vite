import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'decks',
  initialState: {
    itemsPerPage: 10,
    currentPage: 1,
    searchByName: '',
    orderBy: '',
    deckName: '',
  },
  reducers: {
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload
    },
    setCurrenPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setSearchByName: (state, action: PayloadAction<string>) => {
      state.searchByName = action.payload
    },
    createDeck: (state, action: PayloadAction<string>) => {
      state.deckName = action.payload
    },
  },
})

export const decksActions = slice.actions
export const decksReducer = slice.reducer
