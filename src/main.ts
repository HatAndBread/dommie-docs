import "./style.css";
import "highlight.js/styles/default.css";
import "highlight.js/styles/base16/dracula.css";
import app, { router } from "dommie";
import type { Template } from "dommie";
import home from "./pages/home";
import base from "./pages/tutorial/base";
import createAnApplication from "./pages/tutorial/create-an-application";
import templating from "./pages/tutorial/templating";
import loops from "./pages/tutorial/loops";
import reuseableComponents from "./pages/tutorial/reuseable-components";
import state from "./pages/tutorial/state";
import multipleSubscriptions from "./pages/tutorial/multiple-subscriptions";
import sideEffects from "./pages/tutorial/side-effects";
import notFound from "./pages/not-found";

const routes = {
  "/": home,
  "/tutorial": base,
  "/tutorial/create": createAnApplication,
  "/tutorial/templating": templating,
  "/tutorial/reusable-components": reuseableComponents,
  "/tutorial/loops": loops,
  "/tutorial/state": state,
  "/tutorial/multiple-subscriptions": multipleSubscriptions,
  "/tutorial/side-effects": sideEffects,
};

const main = (__: Template) => {
  return __.component(({ r }) => {
    const goHome = (e: Event) => {
      e.preventDefault();
      r.go("/");
    };
    __.div({ class: "navbar bg-accent" }, () => {
      __.a(
        { class: "btn btn-ghost text-xl", text: "DOMMIE", click: goHome },
        () => {
          __.img({ src: "/icon.png", width: 32, class: "rounded-lg" });
        },
      );
    });
    router(routes, __, notFound);
  });
};

app(main, "#app", { spa: true });
