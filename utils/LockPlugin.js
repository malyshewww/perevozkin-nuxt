import { ScrollbarPlugin } from "smooth-scrollbar";

export class LockPlugin extends ScrollbarPlugin {
   static pluginName = "lock";
   static defaultOptions = {
      lock: false,
   };
   transformDelta(delta) {
      return this.options.lock ? { x: 0, y: 0 } : delta;
   }
}
