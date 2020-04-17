import { axiosInstance } from "./axiosInstance";


export const getCategories = () => {
  return axiosInstance.get('categories')
    .then(res => res.data)
}

export const getCollections = (count = 12) => {
  return axiosInstance.get(`collections?city_id=280&count=${ count }`)
    .then(res => res.data)
    .then(res => res.collections)
}

export const getRestaurantDetails = (restaurantId) => {
  return axiosInstance.get(`restaurant?res_id=${ restaurantId }`)
    .then(res => res.data)
}

export const getSearchResult = (searchCity, count = 12) => {
  return axiosInstance.get(`search?entity_type=city&q=${ searchCity }&count=${ count }`)
    .then(res => res.data)
    .then(res => res.restaurants)
}