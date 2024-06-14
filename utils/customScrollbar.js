import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";

function initCustomScrollbar() {
   let bodyScrollBar;
   let scroller;
   scroller = document.querySelector(".scroller");
   bodyScrollBar = Scrollbar.init(scroller, {
      damping: 0.1,
      delegateTo: document,
      alwaysShowTracks: true,
      renderByPixels: true,
      continuousScrolling: true,
      thumbMinSize: 20,
      syncCallbacks: true,
   });

   return { bodyScrollBar, scroller };
}

export default initCustomScrollbar;
