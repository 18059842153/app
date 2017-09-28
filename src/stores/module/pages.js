const state = {
    active:''
}
const getters = {
    classids(state){
        return state.active
    }
}
const actions = {
    getclassid(context,data){
        context.commit('getactive', data)
    }
}
const mutations = {
     getactive(state,data){
        state.active=data
    },
}
export default {
    state,
    getters,
    actions,
    mutations
}