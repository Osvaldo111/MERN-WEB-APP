import { GET_ITEMS, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, GET_SINGLE_ITEM, ITEMS_LOADING } from './types';
import { returnErrors } from './errorActions';
import api from '../api'

export const getItems = () => (dispatch) => {
    dispatch(setItemsLoading());

    api.getItems().then(res => {
        dispatch({
            type: GET_ITEMS,
            payload: res.data
          })
    })
    .catch(err =>
     dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getItemById = (id) => (dispatch) => {
    dispatch(setItemsLoading());

    api.getItemById(id).then(res => {
        dispatch({
            type: GET_SINGLE_ITEM,
            payload: res.data
          })
    })
    .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addItem = (payload) => (dispatch) => {
    dispatch(setItemsLoading());

    api.insertItem(payload).then(res => {
        dispatch({
            type: ADD_ITEM,
            payload: res
          })
    })
    .catch(err =>
        console.log('Err =>', err)
    );
};

export const updateItem = (id, payload) => (dispatch) => {
    dispatch(setItemsLoading());

    api.updateItemById(id, payload).then(res => {
        dispatch({
            type: UPDATE_ITEM,
            payload: res.data
          })
    })
    .catch(err =>
     dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteItem = (id) => (dispatch) => {
    dispatch(setItemsLoading());

    api.deleteItemById(id).then(res => {
        dispatch({
            type: DELETE_ITEM,
            payload: res.data
          })
    })
    .catch(err =>
     dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
      };
};