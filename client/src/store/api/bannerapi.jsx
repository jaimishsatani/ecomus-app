import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const bannerApi = createApi({
  reducerPath: 'bannerApi',
  baseQuery: fetchBaseQuery({ baseUrl: "https://ecomus-api-sepia.vercel.app/api/" }),
  endpoints: (builder) => ({
    getBanner: builder.query({
      query: () => ({
        url: `banner`,
        method:'GET'
      })
    }),
    getNewArrival: builder.query({
      query: () => ({
        url: `list/newarrival`,
        method:'GET'
      })
    }),
    getBestSeller: builder.query({
      query: () => ({
        url: `list/bestseller`,
        method:'GET'
      })
    }),
    getFeatureItem: builder.query({
      query: () => ({
        url: `list/featureitem`,
        method:'GET'
      })
    }),
  }),
})

export const { useGetBannerQuery,useGetNewArrivalQuery,useGetBestSellerQuery,useGetFeatureItemQuery } = bannerApi