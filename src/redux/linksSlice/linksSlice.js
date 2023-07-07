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
    updateLinks: (state, action) => {
      state.links = action.payload.links
    },
    deleteLink: (state, action) => {
      const index = action.payload
      state.links.splice(index, 1);
    }
  },
})


export const { addLink, updateLinks, deleteLink } = linksSlice.actions

export const linksReducer = linksSlice.reducer