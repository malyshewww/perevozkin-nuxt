import Scrollbar from "smooth-scrollbar";

import { AnchorPlugin } from "~/utils/anchorPlugin.js";
import { ModalPlugin } from "~/utils/modalPlugin.js";
import { LockPlugin } from "~/utils/LockPlugin.js";

function initCustomScrollbar() {
   let bodyScrollBar;
   let scroller;
   scroller = document.querySelector(".scroller");
   Scrollbar.use(ModalPlugin, AnchorPlugin, LockPlugin);
   bodyScrollBar = Scrollbar.init(scroller, {
      damping: 0.1,
      delegateTo: document,
      alwaysShowTracks: true,
      renderByPixels: true,
      continuousScrolling: true,
      thumbMinSize: 20,
      syncCallbacks: true,
   });
   // bodyScrollBar.addListener((status) => {
   //    window.dispatchEvent(new Event("scroll"));
   // });
   return { bodyScrollBar, scroller };
}

export default initCustomScrollbar;
