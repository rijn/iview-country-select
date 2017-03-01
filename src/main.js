import Vue from 'vue';
import Demo from './Demo';

import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

/* eslint-disable no-new */
new Vue({
    el: 'body',
    components: { Demo }
});
