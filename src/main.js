import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';
import mynoahv from './mynoahv';
import noahvRequest from 'noahv-request';
import noahvComponent from 'noahv-component';
import SAVisualComponents from 'noahv-visual-components';
import store from './store';

import routerConfig from './common/router';
import WidgetConfig from './common/dashboard/widgetConfig';
import './common/hook/ajax';

import './common/assets/css/main.less';


// keep this
Vue.use(VueRouter);
// import iview & noahvComponent
Vue.use(iView);
// must use noahvRequest
Vue.use(noahvRequest);
Vue.use(noahvComponent);
Vue.use(SAVisualComponents, WidgetConfig);


mynoahv.router(routerConfig);

mynoahv._router.beforeEach((to, from, next) => {
    const isLogin = sessionStorage.getItem('isLogin')
    if (to.path === "/login") {
        isLogin ? next("/") : next();
    } else {
        isLogin ? next() : next("/login");
    }
});


// if you want use baidu tongji, add this line
// for detail info, you can visit this page: http://tongji.baidu.com/web/help/article?id=174&type=0
// noahv.useBaiduTrack('baidutongjiaccountId')

// init project
mynoahv.start('#app', store);
