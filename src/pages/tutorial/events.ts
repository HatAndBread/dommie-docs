import type { Template } from "dommie";
import tutorialTemplate from "../../parts/tutorial-template";
import codepen from "../../parts/codepen";

export default (__: Template) => {
  return __.component(() => {
    tutorialTemplate(__, {
      title: "Events",
      content: () => {
        __.div({ class: "flex flex-col gap-4" }, () => {
          __.p(() => {
            __.text(
              `In previous examples we have looked at how to handle clicks on buttons, but of course we need to handle more than just clicks in web applications.`,
            );
          });
          __.p(() => {
            __.text(`In this example, we are listening for input in the text `);
            __.code({ text: "input" });
            __.text(
              ` element. You can listen for any valid DOM event by adding the name of the event along with a handler function as an option to the element.
              As you can see in the example, Dommie passes the event object as the first argument to the handler function.
              `,
            );
          });

          __.p(() => {
            __.strong({ text: "The most common DOM events are: " });
            __.code({ text: `${events.join(", ")}` });
          });
        });
      },
      codepen: () => {
        codepen(__, {
          title: "Events",
          hash: "GRVqgVz",
          height: "100%",
        });
      },
    });
  });
};

const events = [
  "abort",
  "afterprint",
  "animationend",
  "animationiteration",
  "animationstart",
  "beforeprint",
  "beforeunload",
  "blur",
  "canplay",
  "canplaythrough",
  "change",
  "click",
  "contextmenu",
  "copy",
  "cut",
  "dblclick",
  "drag",
  "dragend",
  "dragenter",
  "dragleave",
  "dragover",
  "dragstart",
  "drop",
  "durationchange",
  "ended",
  "error",
  "focus",
  "focusin",
  "focusout",
  "fullscreenchange",
  "fullscreenerror",
  "hashchange",
  "input",
  "invalid",
  "keydown",
  "keypress",
  "keyup",
  "load",
  "loadeddata",
  "loadedmetadata",
  "loadstart",
  "message",
  "mousedown",
  "mouseenter",
  "mouseleave",
  "mousemove",
  "mouseover",
  "mouseout",
  "mouseup",
  "mousewheel",
  "offline",
  "online",
  "open",
  "pagehide",
  "pageshow",
  "paste",
  "pause",
  "play",
  "playing",
  "popstate",
  "progress",
  "ratechange",
  "resize",
  "reset",
  "scroll",
  "search",
  "seeked",
  "seeking",
  "select",
  "show",
  "stalled",
  "storage",
  "submit",
  "suspend",
  "timeupdate",
  "toggle",
  "touchcancel",
  "touchend",
  "touchmove",
  "touchstart",
  "transitionend",
  "unload",
  "volumechange",
  "waiting",
  "wheel",
];
