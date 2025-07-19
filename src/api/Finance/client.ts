import { HTTPClient } from "@shared-vendor/helpers";

const client = new HTTPClient({
  domain: "finance",
}).getInstance();

export default client;
