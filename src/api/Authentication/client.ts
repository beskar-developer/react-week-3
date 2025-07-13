import { HTTPClient } from "@shared-vendor/helpers";

const client = new HTTPClient({
  domain: "auth",
}).getInstance();

export default client;
