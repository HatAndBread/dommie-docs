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
import conditionals from "./pages/tutorial/conditionals";
import customComponents from "./pages/tutorial/custom-components";
import reuseableComponents from "./pages/tutorial/reuseable-components";
import componentParams from "./pages/tutorial/component-params";
import state from "./pages/tutorial/state";
import multipleSubscriptions from "./pages/tutorial/multiple-subscriptions";
import sideEffects from "./pages/tutorial/side-effects";
import events from "./pages/tutorial/events";
import refs from "./pages/tutorial/refs";
import afterMounted from "./pages/tutorial/after-mounted";
import apiCalls from "./pages/tutorial/api-calls";
import afterDestroyed from "./pages/tutorial/after-destroyed";
import typescript from "./pages/tutorial/typescript";
import spas from "./pages/tutorial/spas";
import navigation from "./pages/tutorial/navigation";
import wildcardRoutes from "./pages/tutorial/wildcard-routes";
import done from "./pages/tutorial/done";
import notFound from "./pages/not-found";

const routes = {
  "/": home,
  "/tutorial": base,
  "/tutorial/create": createAnApplication,
  "/tutorial/templating": templating,
  "/tutorial/reusable-components": reuseableComponents,
  "/tutorial/loops": loops,
  "/tutorial/conditionals": conditionals,
  "/tutorial/custom-components": customComponents,
  "/tutorial/component-params": componentParams,
  "/tutorial/state": state,
  "/tutorial/multiple-subscriptions": multipleSubscriptions,
  "/tutorial/side-effects": sideEffects,
  "/tutorial/events": events,
  "/tutorial/refs": refs,
  "/tutorial/after-mounted": afterMounted,
  "/tutorial/api-calls": apiCalls,
  "/tutorial/after-destroyed": afterDestroyed,
  "/tutorial/typescript": typescript,
  "/tutorial/single-page-applications": spas,
  "/tutorial/navigation": navigation,
  "/tutorial/wildcard-routes": wildcardRoutes,
  "/tutorial/done": done,
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
