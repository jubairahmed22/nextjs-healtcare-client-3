import { IMeta } from "@/types";
import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"
import { IDoctor } from "@/types/doctor";

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
        query: (arg:Record<string, any>) => ({
          url: "/doctor",
          method: "GET",
          params: arg
        }),
        transformResponse: (response: IDoctor[], meta: IMeta) => {
            return {
                doctors: response,
                meta
            };
        },
        providesTags:[tagTypes.doctor],
    }),
    deleteDoctor: build.mutation({
        query: (id) => ({
          url: `/doctor/soft/${id}`,
          method: "DELETE", 
        }),
      invalidatesTags: [tagTypes.doctor]
      }),
  }),
})

export const { useCreateDoctorMutation, useGetAllDoctorsQuery, useDeleteDoctorMutation } = specialtiesApi;