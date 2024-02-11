import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { POST_API_URL } from '../../services/api/libs/constants';
import { Post } from '../../services/post/types';

const postApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: POST_API_URL,
  }),
  tagTypes: [ 'Post' ],
  endpoints: (build) => ({
    // The query accepts a number and returns a Post
    getPost: build.query<Post, number>({
      // note: an optional `queryFn` may be used in place of `query`
      query: (id) => ({ url: `/${id}` }),
      // Pick out data and prevent nested properties in a hook or selector
      // transformResponse: (response: { data: Post }, meta, arg) => response.data,
      // // Pick out errors and prevent nested properties in a hook or selector
      // transformErrorResponse: (
      //   response: { status: string | number },
      //   meta,
      //   arg,
      // ) => response.status,
      // providesTags: (result, error, id) => [ { type: 'Post', id } ],
      // // The 2nd parameter is the destructured `QueryLifecycleApi`
      // onQueryStarted(
      //   arg,
      //   {
      //     dispatch,
      //     getState,
      //     extra,
      //     requestId,
      //     queryFulfilled,
      //     getCacheEntry,
      //     updateCachedData,
      //   },
      // ) {
      //   window.console.log('onQueryStarted');
      // },
      // // The 2nd parameter is the destructured `QueryCacheLifecycleApi`
      // onCacheEntryAdded(
      //   arg,
      //   {
      //     dispatch,
      //     getState,
      //     extra,
      //     requestId,
      //     cacheEntryRemoved,
      //     cacheDataLoaded,
      //     getCacheEntry,
      //     updateCachedData,
      //   },
      // ) {
      //   window.console.log('onCacheEntryAdded');
      // },
    }),
    getPosts: build.query<Post[], void>({
      query: () => '/',
      // transformResponse: (response: { data: Post[] }, meta, arg) => response.data,
      // transformErrorResponse: (
      //   response: { status: string | number },
      //   meta,
      //   arg,
      // ) => response.status,
      providesTags: [ 'Post' ],
    }),
  }),
});

export const { useGetPostQuery, useGetPostsQuery } = postApi;

export default postApi;
