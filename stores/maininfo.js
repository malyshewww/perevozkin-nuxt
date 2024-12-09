import { defineStore } from "pinia";
export const useMainInfoStore = defineStore("mainInfoStore", {
   state: () => ({
      menu: [],
      info: {},
      // isReady: true,
   }),
   actions: {
      async setData(res) {
         const { data } = res;
      },
   },
});
