import { defineStore } from "pinia";
import { getData } from "@/utils/api";
import Swal from "sweetalert2";

export const useTopicStore = defineStore("topic", {
  state: () => ({
    topics: [],
    sliderTopic: [],
    lastFiveTopics: [],
    topic: "",
  }),
  actions: {
    getActionLastFiveTopics(loading, idCategory = "") {
      getData(
        loading,
        "lastFiveTopic" + (idCategory ? `?id_category=${idCategory}` : "")
      )
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
            this.lastFiveTopics = res.data;
          }
        })
        .catch((error) => {
          console.log(`--------------${error}`);
          Swal.fire({
            icon: "error",
            title: "خطا...",
            text: error.message,
            confirmButtonText: "اوك",
          });
        });
    },
    getActionSliderTopic(loading, idCategory = "") {
      getData(
        loading,
        "lastFiveTopic" + (idCategory ? `?id_category=${idCategory}` : "")
      )
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
            this.sliderTopic = res.data;
          }
        })
        .catch((error) => {
          console.log(`--------------${error}`);
          Swal.fire({
            icon: "error",
            title: "خطا...",
            text: error.message,
            confirmButtonText: "اوك",
          });
        });
    },
    showTopic(loading, id) {
      getData(loading, `topic/${id}`)
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
            this.topic = res.data;
          }
        })
        .catch((error) => {
          console.log(`--------------${error}`);
          Swal.fire({
            icon: "error",
            title: "خطا...",
            text: error.message,
            confirmButtonText: "اوك",
          });
        });
    },
    getTopicsAction(loading, id, page = 1, size = 5) {
      getData(loading, `topic?size=${size}&id_category=${id}&page=${page}`)
        .then((res) => {
          if (res instanceof Error) {
            Swal.fire({
              icon: "error",
              title: "خطا...",
              text: res.message,
              confirmButtonText: "اوك",
            });
          } else {
            this.topics = res;
          }
        })
        .catch((error) => {
          console.log(`--------------${error}`);
          Swal.fire({
            icon: "error",
            title: "خطا...",
            text: error.message,
            confirmButtonText: "اوك",
          });
        });
    },
    getYourTopicsAction(loading, page = 1, size = 5) {
      getData(loading, `yourTopic?size=${size}&&page=${page}`)
        .then((res) => {
          if (res instanceof Error) {
            Swal.fire({
              icon: "error",
              title: "خطا...",
              text: res.message,
              confirmButtonText: "اوك",
            });
          } else {
            this.topics = res;
          }
        })
        .catch((error) => {
          console.log(`--------------${error}`);
          Swal.fire({
            icon: "error",
            title: "خطا...",
            text: error.message,
            confirmButtonText: "اوك",
          });
        });
    },
    getYourFavoriteTopicsAction(loading, page = 1, size = 5) {
      getData(loading, `favorite?size=${size}&&page=${page}`)
        .then((res) => {
          if (res instanceof Error) {
            Swal.fire({
              icon: "error",
              title: "خطا...",
              text: res.message,
              confirmButtonText: "اوك",
            });
          } else {
            this.topics = res;
          }
        })
        .catch((error) => {
          console.log(`--------------${error}`);
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
    getTopics: (state) => {
      return state.topics;
    },
    getLastFiveTopics: (state) => {
      return state.lastFiveTopics;
    },
    getSliderTopic: (state) => {
      return state.sliderTopic;
    },
  },
});
