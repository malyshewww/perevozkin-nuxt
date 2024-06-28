import Scrollbar from "smooth-scrollbar";

// import { AnchorPlugin } from "~/utils/AnchorPlugin.js";
// import { ModalPlugin } from "~/utils/ModalPlugin.js";
// import { LockPlugin } from "~/utils/LockPlugin.js";

function initCustomScrollbar() {
   let bodyScrollBar;
   let scroller;
   scroller = document.querySelector(".scroller");
   if (scroller) {
      bodyScrollBar = Scrollbar.init(scroller, {
         damping: 0.1,
         delegateTo: document,
         alwaysShowTracks: true,
         renderByPixels: true,
         continuousScrolling: true,
         thumbMinSize: 20,
         syncCallbacks: true,
      });
   }
   // Scrollbar.use(ModalPlugin, AnchorPlugin, LockPlugin);
   // Scrollbar.use(ModalPlugin);
   // bodyScrollBar.addListener((status) => {
   //    window.dispatchEvent(new Event("scroll"));
   // });
   return { bodyScrollBar, scroller };
}

export default initCustomScrollbar;
