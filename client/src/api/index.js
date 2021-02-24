import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL

const api = axios.create({
    baseURL
})

export const insertItem = payload => api.post(`/item`, payload)
export const getItems = () => api.get(`/items`)
export const updateItemById = (id, payload) => api.put(`/item/${id}`, payload)
export const deleteItemById = id => api.delete(`/item/${id}`)
export const getItemById = id => api.get(`/item/${id}`)

const apis = {
    insertItem,
    getItems,
    updateItemById,
    deleteItemById,
    getItemById,
}

export default apis