import { defineStore } from "pinia";
import Swal from "sweetalert2";
import { getData } from "@/utils/api";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: [],
  }),
  actions: {
    getActionCategories(loading) {
      getData(loading, "categories")
        .then((res) => {
          if (res instanceof Error) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: res.message,
            });
          } else {
            this.categories = res.data;
          }
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "خطا...",
            text: error.message,
            confirmButtonText: "اوك",
          });
        });
    },
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
  },
});
