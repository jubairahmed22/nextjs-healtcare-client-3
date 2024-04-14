import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"

const specialtiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpecialty: build.mutation({
      query: (data) => ({
        url: "/specialties",
        method: "POST",
        contentType: "multiple/form-data",
        data, 
      }),
    invalidatesTags:[tagTypes.specialties]
    }),
    getAllSpecialties: build.query({
        query: (data) => ({
          url: "/specialties",
          method: "GET"
        }),
        providesTags:[tagTypes.specialties],
    }),
    deleteSpecialty: build.mutation({
        query: (id) => ({
          url: `/specialties/${id}`,
          method: "DELETE", 
        }),
      invalidatesTags: [tagTypes.specialties]
      }),
  }),
})

export const { useCreateSpecialtyMutation, useGetAllSpecialtiesQuery, 
useDeleteSpecialtyMutation } = specialtiesApi;