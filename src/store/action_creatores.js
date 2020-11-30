// тут записываем так называемые экшн криэйторы - т.е. JS функции, которые должны сгенерировать
// и вернуть JS объект, который в свою очередь будет описывать ACTION - событие в экосистеме Redux
import * as ACT from './actions';

export function updateCatalogList(payload) {
  return { // это JS объект - и есть тот самый реальный Redux action
    type: ACT.UPDATE_LIST,
    payload,
  };
}

export function fetchFailed() {
  return {
    type: ACT.FETCH_FAILED,
  }
}

export function fetchSuccess() {
  return {
    type: ACT.FETCH_SUCCESS,
  }
}

export function updateLoading(payload) {
  return {
    type: ACT.UPDATE_LOADING,
    payload,
  }
}

export function updateColor(payload) {
  return {
    type: ACT.UPDATE_COLOR,
    payload,
  }
}

export function updateBrand(payload) {
  return {
    type: ACT.UPDATE_BRAND,
    payload,
  }
}

export function updateCategory(payload) {
  return {
    type: ACT.UPDATE_CATEGORY,
    payload,
  }
}

export function updatePrice(payload) {
  return {
    type: ACT.UPDATE_PRICE,
    payload,
  }
}

export function updateReview(payload){
  return {
    type:ACT.UPDATE_REVIEW,
    payload,
  }
}

export function updateRandomId(payload){
  return {
    type:ACT.UPDATE_RANDOM_ID,
    payload,
  }
}

export function addCartItem(payload){
  return {
    type:ACT.ADD_CART_ITEM,
    payload
  }
}

export function addCartQty(payload){
  return{
    type:ACT.ADD_CART_QTY,
    payload
  }
}

export function updateCartTotal(payload){
  return{
    type:ACT.UPDATE_CART_TOTAL,
    payload
  }
}

/**/ 

export function updateFilterPrice(payload) {
  return {
    type: ACT.UPDATE_FILTER_PRICE,
    payload,
  }
}
export function updateFilterBrand(payload) {
  return {
    type: ACT.UPDATE_FILTER_BRAND,
    payload,
  }
}
export function updateFilterColor(payload) {
  return {
    type: ACT.UPDATE_FILTER_COLOR,
    payload,
  }
}
export function updateFilterCategory(payload) {
  return {
    type: ACT.UPDATE_FILTER_CATEGORY,
    payload,
  }
}

export function updateFilterSort(payload) {
  return {
    type: ACT.UPDATE_FILTER_SORT,
    payload,
  }
}

export function updateFilterView(payload) {
  return {
    type: ACT.UPDATE_FILTER_VIEW,
    payload,
  }
}

export function updateFilterViewList(payload){
  return{
    type: ACT.UPDATE_FILTER_VIEW_LIST,
    payload
  }
}

export function fetchData(searchText) {

  return (dispatcher) => {

    dispatcher(updateLoading(true)); // установить индикатор загрузки данных в ТРУ - включить спинер
    const data = fetch('http://test-api.ipromote.ru/API/CATALOG/FIND');

    data.then(response => {
      return response.json();
    }).then(localData => {
      // this.setState({movieList: data}); - остатки от вызова в классе (когда фетчинг данных из класса)
      dispatcher(updateCatalogList(localData.data)); // записать в ридакс стор список фильмов

      dispatcher(fetchSuccess()); // установить статус состояния загрузки - УСПЕШНО загружены данные
    }).catch((e) => {

      dispatcher(fetchFailed()); // установить статус состояния загрузки - ПРОВАЛ данные НЕ удалось загрузить

      console.log('Sabotage: data fetch ERROR.', e);
    }).finally(() => {

      dispatcher(updateLoading(false)); // установить индикатор загрузки данных в FALSE (выключить спинер)

    });

  }
}

export function fetchFilterData() {

  return (dispatcher) => {

    dispatcher(updateLoading(true)); // установить индикатор загрузки данных в ТРУ - включить спинер
    const categoryData = fetch('http://test-api.ipromote.ru/API/CATEGORY/FIND');
    const colorData = fetch('http://test-api.ipromote.ru/API/COLOR/FIND');
    const brandData = fetch('http://test-api.ipromote.ru/API/BRAND/FIND');
    const priceData = fetch('http://test-api.ipromote.ru/API/CATALOG/RANGE');

    const allResponse = Promise.all([
      categoryData,
      colorData,
      brandData,
      priceData,
    ]);

    allResponse.then(
      (responseArr) => {
        return Promise.all([
          responseArr[0].json(),
          responseArr[1].json(),
          responseArr[2].json(),
          responseArr[3].json(),
        ]);
      }
    ).then (
      (dataArr) => {
        dispatcher(updateColor(dataArr[1].data));
        dispatcher(updateCategory(dataArr[0].data));
        dispatcher(updatePrice(dataArr[3].data));
        dispatcher(updateBrand(dataArr[2].data));
      }
    ).catch(
      (error) => {
        console.log('Fail =>', error);
      }
    ).finally(
      () => {
        dispatcher(updateLoading(false));
      }
    )
  }
}

export function fetchReviewData() {

  return (dispatcher) => {

    dispatcher(updateLoading(true)); // установить индикатор загрузки данных в ТРУ - включить спинер
    const data = fetch('http://test-api.ipromote.ru/API/REVIEW/FIND');

    data.then(response => {
      return response.json();
    }).then(localData => {
      // this.setState({movieList: data}); - остатки от вызова в классе (когда фетчинг данных из класса)
      dispatcher(updateReview(localData.data)); // записать в ридакс стор список фильмов

      dispatcher(fetchSuccess()); // установить статус состояния загрузки - УСПЕШНО загружены данные
    }).catch((e) => {

      dispatcher(fetchFailed()); // установить статус состояния загрузки - ПРОВАЛ данные НЕ удалось загрузить

      console.log('Sabotage: data fetch ERROR.', e);
    }).finally(() => {

      dispatcher(updateLoading(false)); // установить индикатор загрузки данных в FALSE (выключить спинер)

    });
  }
}
