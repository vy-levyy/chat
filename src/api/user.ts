import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from 'models';
import { ORIGIN } from 'src/consts';

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: ORIGIN }),
  endpoints: (builder) => ({
    login: builder.mutation<IUser, { name: string }>({
      query: (body) => ({
        url: 'users/create',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const LOGIN_CACHE_KEY = 'login/key';
export const { useLoginMutation } = userApi;
export { userApi };
