/* eslint-disable */
const Mock = require('mockjs');
const data = function() {
    return {
        data: {
            
        },
        success: true
    }
}
Mock.mock('/api/tpl/form/get', 'get', data);