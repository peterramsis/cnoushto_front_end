import { defineStore } from "pinia";
import { postData } from "@/utils/api.js";
import Swal from "sweetalert2";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    name: "",
    church: "",
    email: "",
    password: "",
    password_confirmation: "",
    image: "",
    phone: "",
    birthday: "",
    gender: "",
    errors: [],
    token: "",
    user: "",
  }),
  actions: {
    login(router) {
      postData("auth/login", {
        email: this.email,
        password: this.password,
      })
        .then((response) => {
          if (response.status == 200) {
            this.user = response.data["data"];
            router.push({ path: "/" });
            localStorage.setItem("token", response.data["token"]);
            this.token = response.data["token"];
          }
        })
        .catch((error) => {
          if (error.response.status == 422) {
            this.errors = error.response.data["errors"];
          } else {
            this.errors = error;
          }
        });
    },
    logout() {},
    register(data) {
      postData("auth/register", data, true).then((res) => {
        if (res.status == 422) {
          this.errors = res.data["errors"];
        } else {
          (this.name = ""),
            (this.church = ""),
            (this.email = ""),
            (this.password = ""),
            (this.password_confirmation = ""),
            (this.image = ""),
            (this.phone = ""),
            (this.birthday = ""),
            (this.gender = ""),
            (this.errors = []),
            Swal.fire("تم التسجيل بنجاح");
        }
      });
    },
  },
  getters: {
    isAuthenticated() {
      return !!this.token;
    },
  },
});
