import {
    GET_ITEMS,
    ADD_ITEM,
    DELETE_ITEM,
    UPDATE_ITEM,
    GET_SINGLE_ITEM,
    ITEMS_LOADING
  } from '../actions/types';
  
  const initialState = {
    items: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_ITEMS:
        return {
          ...state,
          items: action.payload,
          loading: false
        };
      case DELETE_ITEM:
        return {
          ...state,
          items: action.payload
        };
      case ADD_ITEM:
        return {
          ...state,
          items: action.payload,
          loading: false
        };
      case UPDATE_ITEM:
        return {
          ...state,
          item_update: action.payload,
          loading: false
        };
      case GET_SINGLE_ITEM:
        return {
          ...state,
          item: action.payload,
          loading: false
        };
      case ITEMS_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }