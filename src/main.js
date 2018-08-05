import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
});