// Set data to localStorage
export const setDataLocalStorage = (values, request) => {
  let existingRequest = JSON.parse(localStorage.getItem(request)) || []
  existingRequest = [ ...existingRequest, values ]
  localStorage.setItem(request, JSON.stringify(existingRequest))
}

// Remove data from localStorage
export const removeDataLocalStorage = (request, index) => {
  let existingRequest = JSON.parse(localStorage.getItem(request)) || []
  existingRequest.splice(index, 1)
  localStorage.setItem(request, JSON.stringify(existingRequest))
}

//Get data from localStorage
export const getDataLocalStorage = (request) => {
  const data = localStorage.getItem(request) || []

  if (data.length === 0) {
    return data
  } else {
    return JSON.parse(data)
  }
}