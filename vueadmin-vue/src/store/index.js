import Vue from 'vue';
import Vuex from 'vuex';
import menus from "./modules/menus";

Vue.use(Vuex)

export default new Vuex.Store({
    /* 保存登陆状态jwt的值 */
    state: {
        token: ''

    },
    /* 将返回的token值存到本地状态的token中 */
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
            localStorage.setItem("token", token)
        },
    },
    actions: {},
    modules: {
        menus
    }
})
