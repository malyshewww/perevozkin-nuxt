import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";

import { AnchorPlugin } from "./anchorPlugin.js";
import { ModalPlugin } from "./modalPlugin.js";

function initCustomScrollbar() {
   let bodyScrollBar;
   let scroller;
   scroller = document.querySelector(".scroller");
   if (scroller) {
      Scrollbar.use(ModalPlugin, AnchorPlugin);
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
   bodyScrollBar.addListener((status) => {
      window.dispatchEvent(new Event("scroll"));
   });

   return { bodyScrollBar, scroller };
}

export default initCustomScrollbar;
