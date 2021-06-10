import Vue from 'vue';
import VueRouter from 'vue-router';
import invariant from 'invariant';
import _ from 'lodash';
// import headerHandler from './myheader';


let mynoahv = {};

/**
 * render APP
 *
 * @param  {string} container dom to render
 * @param  {Object} mynoahv     mynoahv object
 * @param  {Object} store     data store
 */
function render(container, mynoahv, store, i18n) {
    mynoahv.vueInstance = new Vue({
        router: mynoahv._router,
        store: store || {},
        i18n: i18n || null
    }).$mount(container);
}

/**
 * entry for project
 *
 * @param  {string} container dom to render app
 * @param  {Object} store  data store
 * @return {Object} vue instance
 */
const start = (container, store, i18n) => {
    // container是字符串
    if (typeof container === 'string') {
        let isContainer = document.querySelector(container);
        invariant(
            isContainer,
            `[mynoahv.start] container ${container} not found`
        );
    }
    // 路由必须提前注册
    invariant(
        mynoahv._router,
        '[mynoahv.start] router must be registered before mynoahv.start()'
    );

    if (container) {
        render(container, mynoahv, store, i18n);
        return mynoahv.vueInstance;
    }
};


/**
 * create router for project
 *
 * @param  {Object} config router config for project
 */
const router = (routes, mode) => {
    invariant(
        routes instanceof Array,
        `[mynoahv.router] router should be Array, but got ${typeof router}`
    );
    mynoahv._router = new VueRouter({
        mode: mode ? mode : 'hash',
        routes
    });
};


mynoahv.router = router;
mynoahv.start = start;


export default mynoahv;
