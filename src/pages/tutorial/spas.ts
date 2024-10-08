import type { Template, State } from "dommie";
import tutorialTemplate from "../../parts/tutorial-template";
import code from "../../parts/code";

export default (__: Template) => {
  return __.component(() => {
    tutorialTemplate(__, {
      title: "Single Page Applications",
      content: () => {
        __.div({ class: "flex flex-col gap-4" }, () => {
          __.p(() => {
            __.text(
              `Dommie supports building single page applications (SPAs) out of the box. All you need to do is import `,
            );
            __.code({ text: "router" });
            __.text(` from `);
            __.code({ text: "dommie" });
            __.text(
              ` and pass it an object with routes as keys and components as values. Add the `,
            );
            __.code({ text: "{spa: true}" });
            __.text(" option to ");
            __.code({ text: "app" });
            __.text(" and you're good to go.");
          });
          code(__, exampleCode);
        });
      },
    });
  });
};

const exampleCode = `
import app, { router } from "dommie";

const Home = ({div, component}) => {
  return component(() => {
    div({ text: "Welcome to the Home page!" });
  });
};

const About = ({div, component}) => {
  return component(() => {
    div({ text: "This is the About page." });
  });
};

const App = ({div, component}) => {
  return component(() => {
    div(() => {
      router({
        "/": Home,    // When the path is '/', render the Home component
        "/about": About, // When the path is '/about', render the About component
      });
    });
  });
};

app(App, "#app", { spa: true });
`;
