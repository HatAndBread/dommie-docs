import type { Template } from "dommie";

export default (__: Template) => {
  return __.component(() => {
    __.h1({ text: "404: Sorry, we couldn't find that page 😿" });
  });
};
