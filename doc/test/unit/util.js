import Vue from 'vue';
import iView from 'iview';
import noahvComponent from 'noahv-component';

Vue.use(iView);
Vue.use(noahvComponent);

let id = 0;

const createEle = function() {
  const noahv = document.createElement('div');

  noahv.id = 'app' + ++id;
  document.body.appendChild(noahv);

  return noahv;
};

/**
 * 回收 vm
 * @param  {Object} vm
 */
export const destroyVM = function(vm) {
  if (vm) {
      vm.$destroy && vm.$destroy();
      vm.$el &&
      vm.$el.parentNode &&
      vm.$el.parentNode.removeChild(vm.$el);
  }
};

/**
 * 创建一个 Vue 的实例对象
 * @param  {Object|String}  Compo   组件配置，可直接传 template
 * @param  {Boolean=false} mounted 是否添加到 DOM 上
 * @return {Object} vm
 */
export const createVue = function(Compo, mounted = false) {
  if (Object.prototype.toString.call(Compo) === '[object String]') {
    Compo = { template: Compo };
  }
  return new Vue(Compo).$mount(mounted === false ? null : createEle());
};

/**
 * 创建一个测试组件实例
 * @link http://vuejs.org/guide/unit-testing.html#Writing-Testable-Components
 * @param  {Object}  Compo          - 组件对象
 * @param  {Object}  propsData      - props 数据
 * @param  {Boolean=false} mounted  - 是否添加到 DOM 上
 * @return {Object} vm
 */
export const createTest = function(Compo, propsData = {}, mounted = false) {
  if (propsData === true || propsData === false) {
    mounted = propsData;
    propsData = {};
  }
  const noahv = createEle();
  const Ctor = Vue.extend(Compo);
  return new Ctor({ propsData }).$mount(mounted === false ? null : noahv);
};
