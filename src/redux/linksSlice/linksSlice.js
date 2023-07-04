import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  links: []
}

export const linksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    add: (state, action) => {
        state.links.push(action.payload.link)

        localStorage.setItem('links', state.links);
    },
  },
})

// Action creators are generated for each case reducer function
export const { add } = linksSlice.actions

export const linksReducer = linksSlice.reducer