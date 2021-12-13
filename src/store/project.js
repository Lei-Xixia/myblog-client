import { getProjects } from "@/api/project";

export default {
  namespaced: true,
  state: {
    loading: false,
    data: [],
  },
  mutations:{
    setLoading(state, payload){
      state.loading = payload;
    },
    setData(state, payload){
      state.data = payload;
    }
  },
  actions: {
    async fetchProject(ctx){
      if(ctx.state.data.length){
        return;
      }
      ctx.commit("setLoading", true);
      const resp = await getProjects();
      // console.log(resp);
      for(var item of resp){
        item.thumb = "http://localhost:7001" + item.thumb
      }
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);

    }
  }
}
