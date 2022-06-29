import { createAsyncThunk } from '@reduxjs/toolkit';
import { WS } from 'services';

type SendMessagePayloadAction = {
  userId: string;
  message: string;
};

export const sendMessage = createAsyncThunk(
  'messages/send_message',
  (payload: SendMessagePayloadAction) => {
    WS.send(JSON.stringify(payload));
  },
);
