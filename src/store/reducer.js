import { combineReducers } from "redux";
import * as ACT from './actions';

const initialStore = {
  catalogList: [],
  isLoading: false,
  fetchStatus: null,
  categoryList: [],
  colorList: [],
  brandList: [],
  priceRange: [],
  filter: {
    category:'',
    brand: [],
    color: '',
    price: [],
    sort:"Price",
    view:"48",
    viewList:"1",
  },
  productReview: [],
  randomId: [],
  sort:["Price", "Lowest", "Highest"],
  view:[12,24,48],
  cart:{
    items:[],
    amount:[],
    total: ''
  }
};

function rootReducer(store = initialStore, action) {

  switch (action.type) {

    case ACT.UPDATE_LIST: // случилось событие - обновить список фильмов
      return {
        ...store,
        catalogList: action.payload,
      }

    case ACT.UPDATE_LOADING: // случилось событие - обновить индикатор загрузки данных с сервера
      return {
        ...store,
        isLoading: action.payload,
      }

    case ACT.UPDATE_COLOR:
      return {
        ...store,
        colorList: action.payload,
      }
    
    case ACT.UPDATE_BRAND: 
      return{
        ...store,
        brandList: action.payload,
      }
    
    case ACT.UPDATE_CATEGORY:
      return {
        ...store,
        categoryList: action.payload,
      }
    
    case ACT.UPDATE_PRICE:
      return {
        ...store,
        priceRange: action.payload,
      }

    case ACT.UPDATE_REVIEW:
      return {
        ...store,
        productReview: action.payload,
      }

    case ACT.UPDATE_RANDOM_ID:
      return {
        ...store,
        randomId: action.payload,
      }
  

    case ACT.UPDATE_FILTER_CATEGORY:
      return {
        ...store,
        filter: {
          ...store.filter,
          category: action.payload,
        }
      }

    case ACT.UPDATE_FILTER_BRAND:
      return {
        ...store,
        filter: {
          ...store.filter,
          brand: action.payload,
        }
      }

    case ACT.UPDATE_FILTER_COLOR:
      return {
        ...store,
        filter: {
          ...store.filter,
          color: action.payload,
        }
      }
      
    case ACT.UPDATE_FILTER_PRICE:
      return {
        ...store,
        filter: {
          ...store.filter,
          price: action.payload,
        }
      }
    
      case ACT.UPDATE_FILTER_SORT:
        return{
          ...store,
          filter: {
            ...store.filter,
            sort: action.payload
          }
        }

      case ACT.UPDATE_FILTER_VIEW:
        return{
          ...store,
          filter:{
            ...store.filter,
            view: action.payload
          }
        }
      
      case ACT.UPDATE_FILTER_VIEW_LIST:
        return{
          ...store,
          filter:{
            ...store.filter,
            viewList: action.payload
          }
        }
    
    case ACT.ADD_CART_ITEM:
      return {
        ...store,
        cart:{
          ...store.cart,
          item:action.payload,
        }
      }

      case ACT.ADD_CART_QTY:
        return {
          ...store,
          cart:{
            ...store.cart,
            amounts:action.payload,
          }
        }      

    case ACT.UPDATE_CART_TOTAL:
      return {
        ...store,
        cart:{
          ...store.cart,
          total:action.payload,
        }
      }
      

    case ACT.FETCH_SUCCESS: // случилось событие - обновить статус загрузки - УСПЕХ
    case ACT.FETCH_FAILED: // случилось событие - обновить статус загрузки - ПРОВАЛ
      return {
        ...store,
        fetchStatus: action.payload,
      }

  }

  return store;
}

export default () => combineReducers({
  app: rootReducer,
})
