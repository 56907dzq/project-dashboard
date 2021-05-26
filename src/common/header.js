/**
 * @file header config
 */

export default {
    header: [
        {
            label: '仪表盘',
            key: 'dashboard',
            link: 'dashboard/list'
        },
        {
            label: '模板示例',
            key: 'tplDemo',
            children: [
                {
                    label: '表格示例',
                    key: 'tableDemo',
                    link: 'tableDemo'
                },
                {
                    label: '表单示例',
                    key: 'formDemo',
                    link: 'formDemo'
                },
                {
                    label: '筛选表格示例',
                    key: 'filterTableDemo',
                    link: 'filterTableDemo'
                }
            ]
        },
        {
            label: '图表示例',
            key: 'chart',
            children: [
                {
                    label: '图表示例',
                    key: 'chartDemo',
                    link: 'chartDemo'
                },
                {
                    label: '时序趋势图示例',
                    key: 'demo/chart/trend',
                    link: 'demo/chart/trend'
                }
            ]
        },
        {
            label: '使用文档',
            linkTarget: 'https://baidu.github.io/NoahV/#/guide/about'
        },
        {
            label: '首页',
            key: 'dash/index',
            link: 'dash/index'
        }
    ],
    hasBread: false,
    logo: {
        // 是否需要logo
        hasLogo: true,
        src: require('common/assets/img/logo.png')
    },
    login: {
        hasLogin: true,
        url: '/api/user',
        logout: '/api/logout'
    },
    type: 'header-sidebar',
    separator: '/'
};