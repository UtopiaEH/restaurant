import { axiosInstance } from "./axiosInstance";


export const getCategories = () => {
  return axiosInstance.get('categories')
    .then(response => response)
}