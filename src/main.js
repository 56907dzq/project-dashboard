/**
 * NoahV
 * Copyright (c) 2019 Baidu, Inc. All Rights Reserved.
 *
 * @file main entry for project
 * @author darren(darrenywyu@gmail.com)
 *         Joannamo(joannamo123@163.com)
 */

import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';
import noahv from 'noahv-core';
import noahvRequest from 'noahv-request';
import noahvComponent from 'noahv-component';
import SAVisualComponents from 'noahv-visual-components';

import store from './store/';
import routerConfig from './common/router';
import headerConfig from './common/header';
import footerApp from './common/layout/footer';
import WidgetConfig from './common/dashboard/widgetConfig';
import './common/hook/ajax';

import './common/assets/css/main.less';

// If wanted diy layout, please import this file
// import layoutApp from './common/layout/layout';

// keep this
Vue.use(VueRouter);


// import iview & noahvComponent
Vue.use(iView);

// must use noahvRequest
Vue.use(noahvRequest);

Vue.use(noahvComponent);


Vue.use(SAVisualComponents, WidgetConfig);


// use default layout with header config
noahv.layout(headerConfig, footerApp);

// If wanted diy layout, please use this line
// noahv.useLayout(layoutApp);

// keep this
noahv.router(routerConfig);

// noahv._router.beforeEach((to, from, next) => {
//     const isLogin = GetCookie();
//     if (to.path === "/login") {
//       isLogin ? next("/index") : next();
//     } else if (to.path === "/") {
//       isLogin ? next() : next("/login");
//     } else {
//       if (isLogin) {
//         let role_name;
//         if (store.getters.role_name) role_name = store.getters.role_name;
//         else {
//           localStorage.getItem("userMsg")
//             ? (role_name = JSON.parse(localStorage.getItem("userMsg")).role.role)
//             : (role_name = "");
//         }
//         to.matched.some(record => _.includes(record.meta.roles, role_name))
//           ? next()
//           : next("404");
//       } else next("/login");
//     }
// });


// if you want use baidu tongji, add this line
// for detail info, you can visit this page: http://tongji.baidu.com/web/help/article?id=174&type=0
// noahv.useBaiduTrack('baidutongjiaccountId')

// init project
noahv.start('#app', store);
