import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    changeName(state) {
      state.name = 'park';
    },
    changeAge(state) {
      console.log(state);
      state.age = state.age + 1;
    },
  },
});

export let { changeName, changeAge } = user.actions;

let stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12],
});

let item = createSlice({
  name: 'item',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    changeCount(state, i) {
      state[i.payload].count = state[i.payload].count + 1;
    },
    purchase(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
  },
});

export let { changeCount, purchase } = item.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    item: item.reducer,
  },
});
