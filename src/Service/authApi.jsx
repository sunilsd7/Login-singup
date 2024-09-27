
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7094',credentials:'include' }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (user) => ({
        url: 'api/Auth/signup',
        method: 'POST',
        body: user,
      }),
    }),
    login: builder.mutation({
      query: (user) => ({
        url: 'api/Auth/login',
        method: 'POST',
        body: user,
      }),
    }),
    forgotpassword:builder.mutation({
      query: (user) => ({
        url: 'api/Auth/forgotpassword',
        method: 'POST',
        body: user,
      }),
    }),
    resetpassword:builder.mutation({
      query: (user) => ({
        url: 'api/Auth/reset-password',
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation,useForgotpasswordMutation,useResetpasswordMutation } = authApi;
