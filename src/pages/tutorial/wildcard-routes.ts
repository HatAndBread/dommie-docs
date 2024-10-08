import type { Template } from "dommie";
import tutorialTemplate from "../../parts/tutorial-template";
import code from "../../parts/code";

export default (__: Template) => {
  return __.component(() => {
    tutorialTemplate(__, {
      title: "Wildcard Routes",
      content: () => {
        __.div({ class: "flex flex-col gap-4" }, () => {
          __.p(() => {
            __.text(` You can define routes with dynamic segments using the `);
            __.code({ text: "*" });
            __.text(` wildcard character. This allows matching paths like `);
            __.code({ text: "/blog/123/comments/456" });
            __.text(` where the numbers (or other path parts) can vary. `);
            __.br();
            __.text(` Here’s an example of using a wildcard route: `);
          });
          code(__, exampleCode);
          __.p(() => {
            __.text(`Note that `);
            __.code({ text: "r.path" });
            __.text(
              ` is a stateful variable, and as such allows you to subscribe to changes in the path. `,
            );
            code(__, example2);
          });
        });
      },
    });
  });
};

const exampleCode = `const Blog = ({component}) => {
  return component(({ r }) => {
    console.log(r.path.value);  // Full path, e.g. "/blog/123/comments/456"
    console.log(r.pathVariables.value); // Array of variables from the path, e.g. ["123", "456"]
    console.log(r.pathVariablesMap.value); // Object with named variables, e.g. { blog: "123", comment: "456" }
    // ...
  });
};

// ...
router({
  "/": Home,
  "/about": About,
  "/blog/*": Blog, // This will match any path that starts with /blog/
});
// ...
`;

const example2 = `
const MyComponent = ({component}) => {
  return component(({ r, subscribe }) => {
    // Log the path whenever it changes
    subscribe(() => console.log(r.path.value), [r.path])
  });
};
`;
