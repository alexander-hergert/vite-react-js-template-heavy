import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/products",
      staleTime: 1000 * 60 * 5,
    }),
    // Mutation endpoint to create a new post
    createPost: builder.mutation({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
      invalidates: [{ type: "Post", id: "list" }], // Invalidate the 'Post' type with ID 'list' after creating a new post
    }),
    // Mutation endpoint to update a post by ID
    updatePost: builder.mutation({
      query: ({ id, updatedPost }) => ({
        url: `posts/${id}`,
        method: "PUT",
        body: updatedPost,
      }),
      invalidates: [{ type: "Post", id: "list" }], // Invalidate the 'Post' type with ID 'list' after creating a new post
    }),
    // Mutation endpoint to delete a post by ID
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
      invalidates: [{ type: "Post", id: "list" }], // Invalidate the 'Post' type with ID 'list' after creating a new post
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = apiSlice;
