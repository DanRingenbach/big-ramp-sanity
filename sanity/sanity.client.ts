// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";


const config: ClientConfig = {
  projectId: "p2ep0njv",
  dataset: "production",
  apiVersion: "2024-02-06",
  useCdn: false,
  
};



const client = createClient(config);




export default client;