import { createEntityAdapter, EntityState } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMessage, IMessageSource, Message } from 'models';
import { WS } from 'services';
import { ORIGIN } from 'src/consts';

const messagesAdapter = createEntityAdapter<IMessage>();

const initialState = messagesAdapter.getInitialState();

const messagesSelectors = messagesAdapter.getSelectors();

const messageApi = createApi({
  reducerPath: 'messagesApi',
  baseQuery: fetchBaseQuery({ baseUrl: ORIGIN }),
  endpoints: (builder) => ({
    getMessages: builder.query<EntityState<IMessage>, string>({
      query: () => `messages/`,
      transformResponse: (sourceMessages: IMessageSource[]) => {
        const messages: IMessage[] = Message.fromSourceArray(sourceMessages);

        return messagesAdapter.addMany(initialState, messages);
      },
      async onCacheEntryAdded(_, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
        await WS.connect();

        try {
          await cacheDataLoaded;

          const listener = (event: MessageEvent) => {
            const sourceMessage = JSON.parse(event.data) as IMessageSource;

            const message: IMessage = Message.fromSource(sourceMessage);

            updateCachedData((draft) => {
              messagesAdapter.upsertOne(draft, message);
            });
          };

          WS.addMessageListener(listener);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log((error as Error).message);
        }

        await cacheEntryRemoved;
        WS.close();
      },
    }),
  }),
});

export const { useGetMessagesQuery } = messageApi;
export { messageApi, messagesAdapter, messagesSelectors, initialState as messagesInitialState };
