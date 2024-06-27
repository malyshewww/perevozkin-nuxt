export const usePreloaderStore = defineStore("loading", {
   state: () => ({ loading: true }),
   actions: {
      switchLoading() {
         this.loading = false;
      },
   },
});
