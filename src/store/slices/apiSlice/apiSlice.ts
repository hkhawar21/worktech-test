import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
    prepareHeaders: async (headers, _) => {
      return headers;
    },
    async responseHandler(response) {
      const data = await response.json();
      if (response.ok) {
        return data;
      }
      return Promise.reject(data);
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});

export default apiSlice;
