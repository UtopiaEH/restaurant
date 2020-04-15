import { axiosInstance } from "./axiosInstance";


export const getCategories = () => {
  return axiosInstance.get('categories')
    .then(response => response)
    .then(res => console.log(res))
}

export const getCollections = () => {
  return axiosInstance.get('collections?city_id=280&count=10')
    .then(res => res.data)
    .then(res => res.collections)
}