/**
 * @file router config
 */
import Home from 'src/common/layout/Home.vue';
import Login from 'src/common/layout/Login.vue';

export default [
    /* eslint-disable no-undef */
    // Keep this line if you want auto add router by noahv create
    {
        component: Login,
        path: '/login',
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                component: r => require.ensure([], () => r(require('src/dash/index')), 'dash/index'),
                path: 'dash/index'
            }
        ]
    },
    // please keep this object last one
    {
        component: r => require.ensure([], () => r(require('src/common/layout/404')), '404'),
        path: '*'
    }
    /* eslint-enable */
];
