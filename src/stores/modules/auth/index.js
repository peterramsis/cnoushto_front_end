import {defineStore} from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: "click"
    }),
    actions: {
        login(token) {
            this.token = token
        },
        logout() {
            this.token = null
        }
    },
    getters: {
        isAuthenticated() {
            return !!this.token
        }
    }
})