import { defineStore } from "pinia";
import { getData } from "@/utils/api";
import Swal from "sweetalert2";

export const useTopicStore = defineStore("topic", {
  state: () => ({
    topics: [],
    lastFiveTopics: [],
    topic: "",
  }),
  actions: {
    getActionLastFiveTopics(loading) {
      getData(loading, "lastFiveTopic")
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
    getTopicsAction(loading, id) {
      getData(loading, `topic?size=5&id_category=${id}`)
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
            this.topics = res.data;
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
  },
});
