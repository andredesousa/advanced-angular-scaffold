
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../dist/documentation/documentation.json";

setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
