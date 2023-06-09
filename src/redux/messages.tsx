import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { IMessage } from '../components/Message/Message';
import { getMessagesApi } from '../api/messages';

interface IMessageState {
  list: Array<IMessage>;
}

const initialState: IMessageState = {
  list: [],
};

export const getMessages = createAsyncThunk('getMessages', async () => {
  const messagesResponce = await getMessagesApi();
  return await messagesResponce.json();
});

const counterSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.list.push({
        id: state.list.length,
        date: new Date(),
        text: action.payload.text,
        authorId: action.payload.authorId,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMessages.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const { sendMessage } = counterSlice.actions;
export default counterSlice.reducer;
