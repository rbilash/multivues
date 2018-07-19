if (!global._babelPolyfill) {
  // will that work???
  require('babel-polyfill');
}

import Vue2 from 'vue';

new Vue2({
  el: '#vue2',
  render: h => h('h1', 'Vue2'),
});
