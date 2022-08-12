import {createSlice} from "@reduxjs/toolkit"

const bidsSlice = createSlice({
  name: "mybids",
  initialState:{
    bids:[],
    quntity:0
  },
  reducers:{
    addbid: (state, action) => {
      state.bids.push(action.payload),
      state.quntity += 1
    },
    reset:(state) => {
      state = initialState
    }
  }
})

export const {addbid, reset} = bidsSlice.actions
export default bidsSlice.reducer