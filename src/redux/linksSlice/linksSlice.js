import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  links: []
}

export const linksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    addLink: (state, action) => {
      state.links.push({
        title: action.payload.link.title,
        btnUrl: action.payload.link.btnUrl
      })
    },
  },
})


export const { addLink } = linksSlice.actions

export const linksReducer = linksSlice.reducer