import type { Template } from "dommie";
import tutorialTemplate from "../../parts/tutorial-template";
import code from "../../parts/code";

export default (__: Template) => {
  return __.component(() => {
    tutorialTemplate(__, {
      title: "Navigating Between Pages",
      content: () => {
        __.div({ class: "flex flex-col gap-4" }, () => {
          __.p(() => {
            __.text(`Dommie provides an object called `);
            __.code({ text: "r" });
            __.text(` in `);
            __.code({ text: "componentParams" });
            __.text(` that contains several methods for dealing with routing.`);
            __.br();
            __.text(`You can use the `);
            __.code({ text: "go" });
            __.text(` method of `);
            __.code({ text: "r" });
            __.text(` to navigate to different routes. `);
          });
          code(__, exampleCode);
        });
      },
    });
  });
};

const exampleCode = `
const Home = ({div, button, component}) => {
  return component(({ r }) => {
    div({ text: "Welcome to the Home page!" });
    button({ text: "Go to About", click: () => r.go("/about") }); // Navigate to the About page
  });
};

const About = ({div, button, component}) => {
  return component(({ r }) => {
    div({ text: "This is the About page." });
    button({ text: "Go to Home", click: () => r.go("/") }); // Navigate back to the Home page
  });
};
`;
