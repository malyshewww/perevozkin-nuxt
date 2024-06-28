import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";

export default defineNuxtPlugin((nuxtApp) => {
   class ModalPlugin extends ScrollbarPlugin {
      static pluginName = "modal";
      static defaultOptions = {
         open: false,
      };
      transformDelta(delta) {
         return this.options.open ? { x: 0, y: 0 } : delta;
      }
   }
   class LockPlugin extends ScrollbarPlugin {
      static pluginName = "lock";
      static defaultOptions = {
         lock: false,
      };
      transformDelta(delta) {
         return this.options.lock ? { x: 0, y: 0 } : delta;
      }
   }
   class AnchorPlugin extends ScrollbarPlugin {
      static pluginName = "anchor";

      onHashChange = () => {
         this.jumpToHash(window.location.hash);
      };
      onClick = (event) => {
         const { target } = event;
         if (target.tagName !== "A") {
            return;
         }
         const hash = target.getAttribute("href");
         if (!hash || hash.charAt(0) !== "#") {
            return;
         }
         this.jumpToHash(hash);
      };
      jumpToHash = (hash) => {
         console.log("hash:", hash);
         const { scrollbar } = this;
         if (!hash) {
            return;
         }
         if (hash === "#top") {
            scrollbar.setMomentum(0, -scrollbar.scrollTop);
         } else {
            console.log("scrollTop:", scrollbar.containerEl.scrollTop);
            scrollbar.scrollIntoView(document.querySelector(hash), {
               offsetTop: -scrollbar.containerEl.scrollTop - 100,
            });
            scrollbar.containerEl.scrollTop = 0;
         }
      };
      onInit() {
         this.jumpToHash(window.location.hash);
         window.addEventListener("hashchange", this.onHashChange);
         this.scrollbar.contentEl.addEventListener("click", this.onClick);
      }
      onDestory() {
         window.removeEventListener("hashchange", this.onHashChange);
         this.scrollbar.contentEl.removeEventListener("click", this.onClick);
      }
   }
   Scrollbar.use(ModalPlugin, LockPlugin, AnchorPlugin);
   return {
      provide: {
         Scrollbar,
         ScrollbarPlugin,
      },
   };
});
