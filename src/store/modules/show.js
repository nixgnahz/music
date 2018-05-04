export default {
  state: {
    showPlay: false,
    showList: false,
    showAdd: false,
    showMiniPlay: false,
    showSongs: false
  },
  mutations: {
    changeShowPlay (state) {
      state.showPlay = !state.showPlay;
    },
    changeShowList (state) {
      state.showList = !state.showList;
    },
    changeShowAdd (state) {
      state.showAdd = !state.showAdd;
    },
    changeShowMiniPlay (state) {
      if(!state.showMiniPlay) state.showMiniPlay = !state.showMiniPlay;
    }
  },
  actions: {
    changeShowPlay (context) {
      context.commit('changeShowPlay');
    },
    changeShowList (context) {
      context.commit('changeShowList');
    },
    changeShowAdd (context) {
      context.commit('changeShowAdd');
    },
    changeShowMiniPlay (context) {
      context.commit('changeShowMiniPlay');
    }
  }
}