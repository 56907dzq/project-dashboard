/**
 * @file dashBoard API 配置信息
 *
 * @author duzq(duzq@fashion-tele.com)
 */

export default {

    // 仪表盘管理页面

    // 1.获取已有仪表盘信息
    dashboardList: '/api/proxy/dashboard/list',
    // 2.新建仪表盘
    dashboardCreate: '/api/proxy/dashboard',
    // 3.复制仪表盘
    dashboardCopy: '/api/proxy/dashboard/copy',
    // 4.删除仪表盘
    dashboardDelete: '/api/proxy/dashboard',


    // 仪表盘综合配置页面

    // 1.更新仪表盘基础信息(名称&是否自动刷新)
    updateMeta: '/api/proxy/updateMeta',
    // 2.新增组件(点击加号)
    widgetCreate: '/api/proxy/widgets',
    // 3.删除组件
    widgetDelete: '/api/proxy/widgets',
    // 4.拷贝组件
    widgetCopy: '/api/proxy/widgetscopy',
    // 5.更改仪表盘布局(拖动时)
    dashboardUpdate: '/api/proxy/updatelayout',


    // 组件配置页面

    // 1.获取组件配置信息
    widgetConfig: '/api/proxy/widgets',

    // 2.保存组件配置
    widgetSave: '/api/proxy/widgetSave',


    // 仪表盘查看页面

    // 1.获取仪表盘配置
    dashboardGet: '/api/proxy/dashboard'

};
