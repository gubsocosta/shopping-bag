import {createStore} from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    productsInBag: []
  },
  getters: {
  },
  mutations: {
    loadProducts(state, products) {
      state.products = products;
    },

    addToBag(state, product) {
      state.productsInBag.push(product);
    },

    removeFromBag(state, productId) {
      state.productsInBag = state.productsInBag.filter(item => item.id !== productId);
    }
  },
  actions: {
    loadProducts({commit}) {
      axios.get('https://fakestoreapi.com/products')
        .then(response => {
          commit('loadProducts', response.data);
        });
    },

    addToBag({ commit }, product) {
      commit('addToBag', product);
    },

    removeFromBag({commit}, productId) {
      if(confirm('Are you sure you want to remove the item from bag?')) {
        commit('removeFromBag', productId);
      }
    }
  },
  modules: {
  }
});
