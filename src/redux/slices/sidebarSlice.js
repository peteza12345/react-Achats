import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   isSideberOpen: false
};

const sidebarSlice = createSlice({
   name: "sidebar",
   initialState,
   reducers: {
      toggleSidebar(state) {
         state.isSideberOpen = !state.isSideberOpen
      }
   }
});

export const selectIsSidebarOpen = (state) => 
   state.sidebar.isSideberOpen;

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;