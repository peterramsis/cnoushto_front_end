import { defineStore } from "pinia";
import { postData, getData } from "@/utils/api.js";
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
          if (response.status == 422) {
            this.errors = response.data["errors"];
          } else if (response.status == 200) {
            this.user = response.data["data"];
            router.push({ path: "/" });
            localStorage.setItem("token", response.data["token"]);
            this.token = response.data["token"];
            this.email = "";
            this.password = "";
          }
        })
        .catch((error) => {
          this.errors = error;
        });
    },
    logout(loading, router) {
      getData(loading, "auth/logout")
        .then((res) => {
          if (res instanceof Error) {
            Swal.fire({
              icon: "error",
              title: "خطا...",
              text: res.message,
              confirmButtonText: "اوك",
            });
          } else {
            localStorage.removeItem("token");
            this.token = null;
            this.user = null;
            router.push({ path: "/login" });
          }
        })
        .catch((error) => {
          console.log(`--------------${error}`);
        });
    },
    getUser(loading) {
      getData(loading, "auth/me")
        .then((res) => {
          if (res instanceof Error) {
            Swal.fire({
              icon: "error",
              title: "خطا...",
              text: res.message,
              confirmButtonText: "اوك",
            });
            // Handle the error appropriately
          } else {
            this.user = res["data"];
          }
        })
        .catch((error) => {
          console.log(`--------------${error}`);
        });
    },
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
