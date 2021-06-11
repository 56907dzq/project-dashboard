/**
 * @file header config
 */

export default {
    header: [
        {
            label: '仪表盘',
            key: 'dashboard/list',
            link: 'dashboard/list'
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
                    selected: true,
                    link: 'demo/chart/trend'
                }
            ]
        }
    ],
    logo: {
        // 是否需要logo
        hasLogo: true,
        src: require('common/assets/img/logo.png')
    },
    separator: '/'
};
