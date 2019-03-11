import state from './state'
import getters from './getter'
import mutations from './mutation'
import actions from './action'
// import modules from '../modules'
import createPersistedState from 'vuex-persistedstate'

export default {
    state,
    getters,
    actions,
    mutations,
    // modules,
    strict: true,
    plugins: [
        createPersistedState()
    ]
}
