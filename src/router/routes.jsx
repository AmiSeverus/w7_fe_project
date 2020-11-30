import React from 'react';
import {

  Switch,
  Route
} from "react-router-dom";
import * as URL from './url';

// импортируем страницы - это просто ваши компоненты, которые должны быть отрисованы для какого-то урла
import RootPage from "../pages/root";
import Catalog from "../pages/catalog";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout";
import ProductInfo from "../pages/productinfo";
// import MovieListPage from "../pages/movies";
// import ViewOneMoviePage from '../pages/view_one';

export default (
  
    <Switch> { /* Компонент-матрешка, работает аналогично switch-case в JavaScript, только в качестве значения для сравнения использует URL из браузера  */ }
      <Route exact path={ URL.ROOT } component={ RootPage } /> {/* Маршруты - конкретные URL для которых отображаются конкретные компоненты */}
      <Route exact path={ URL.CATALOG } component={ Catalog} /> {/* Маршруты - конкретные URL для которых отображаются конкретные компоненты */}
      <Route exact path={ URL.CART } component={ Cart } /> {/* Маршруты - конкретные URL для которых отображаются конкретные компоненты */}
      <Route exact path={ URL.CHECKOUT } component={ Checkout } /> {/* Маршруты - конкретные URL для которых отображаются конкретные компоненты */}
      <Route exact path={ URL.VIEW_ONE } component={ ProductInfo } /> {/* Маршруты - конкретные URL для которых отображаются конкретные компоненты */}
      <Route exact path={ URL.CATALOG_CATEGORY } component={ Catalog } /> {/* Маршруты - конкретные URL для которых отображаются конкретные компоненты */}

      {/* <Route exact path={ URL.MOVIES } component={ MovieListPage } />

      <Route exact path={ URL.VIEW_ONE_MOVIE } component={ ViewOneMoviePage } /> */}

    </Switch>

);