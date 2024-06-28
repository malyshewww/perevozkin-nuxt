export const useScrollerStore = defineStore("scroller", {
   state: () => ({ scroller: null }),
   actions: {
      setScroller(selector) {
         this.scroller = selector;
      },
   },
});
