import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';


const initialState = {

  categories: [],
}
   
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
});

export const {selectCategories} = state => state.category.categories;
export default categorySlice.reducer;
