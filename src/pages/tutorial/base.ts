import type { Template } from "dommie";
import tutorialTemplate from "../../parts/tutorial-template";
import codepen from "../../parts/codepen";

export default (__: Template) => {
  return __.component(() => {
    tutorialTemplate(__, {
      title: "Welcome To The Dommie Tutorial",
      content: () => {
        __.div({ class: "flex flex-col gap-4" }, () => {
          __.p({
            text: "This tutorial will guide you through the basics of Dommie.",
          });
          __.p(() => {
            __.text(`Dommie allows you to build dynamic and reactive web applications using pure JavaScript templating.
              Whether you simply want to add small "islands" of interactivity to your application or build a full-fledged single-page application, Dommie has you covered.
              There are no special syntaxes to learn, just plain JavaScript you already know and love (or not!).`);
          });
          __.p(() => {
            __.text(`In this tutorial, you will learn how to create components, handle events, manage state, and more.
              By the end of this tutorial, you will have a good understanding of how Dommie works and be able to build your own Dommie applications with ease.`);
          });
        });
      },
      codepen: () => {
        codepen(__, {
          title: "Dommie Tutorial",
          hash: "wvVMwBz",
          height: "100%",
        });
      },
    });
  });
};
