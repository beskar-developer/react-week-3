import { HTTPClient } from "@shared-vendor/helpers";

const client = new HTTPClient({
  domain: "movie",
}).getInstance();

export default client;
