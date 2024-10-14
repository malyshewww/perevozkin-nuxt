export const usePopupNoticeStore = defineStore("popupnotice", {
   state: () => ({ isActivePopupNotice: false }),
   actions: {
      openPopupNotice() {
         this.isActivePopupNotice = true;
      },
      closePopupNotice() {
         this.isActivePopupNotice = false;
      },
   },
});
