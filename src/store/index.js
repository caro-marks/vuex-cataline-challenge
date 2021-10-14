import { createStore } from 'vuex'
import { faqCategories } from './../assets/data/db.json'

export default createStore({
  state: {
    cats: []
  },
  mutations: {
    SET_CATS(state, categories) {
      state.cats = categories
    }
  },
  actions: {
    fetchTodos(context) {
      const categories = faqCategories

      context.commit('SET_CATS', categories)
    }
  },
  getters: {
    $allCats(state) {
      return state.cats
    }
  }
})
