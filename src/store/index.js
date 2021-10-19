import { createStore } from 'vuex'
import { faqCategories } from '@/assets/data/db.json'

export default createStore({
  state: {
    cats: [],
    cat: [],
    quest: [],
    page: 'Home'
  },
  mutations: {
    SET_CATS(state, categories) {
      state.cats = categories
    },
    SET_CAT(state, cat) {
      state.cat = cat
    },
    SET_QUEST(state, quest) {
      state.quest = quest
    },
    SET_PAGE(state, page) {
      state.page = page
    }
  },
  actions: {
    fetchCats(context) {
      const categories = faqCategories

      context.commit('SET_CATS', categories)
    },
    fetchCat(context, cat) {
      context.commit('SET_CAT', cat)
    },
    fetchQuest(context, quest) {
      context.commit('SET_QUEST', quest)
    },
    fetchPage(context, page) {
      context.commit('SET_PAGE', page)
    }
  },
  getters: {
    $allCats(state) {
      return state.cats
    },
    $getCat(state) {
      return state.cat
    },
    $getQuest(state) {
      return state.quest
    },
    $getPage(state) {
      return state.page
    }
  }
})
