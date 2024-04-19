import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"

const specialtiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation({
      query: (data) => ({
        url: "/user/create-doctor",
        method: "POST",
        contentType: "multiple/form-data",
        data 
      }),
    invalidatesTags:[tagTypes.doctor]
    }),
    getAllDoctors: build.query({
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

export const { useCreateDoctorMutation, useGetAllDoctorsQuery, useDeleteSpecialtyMutation } = specialtiesApi;