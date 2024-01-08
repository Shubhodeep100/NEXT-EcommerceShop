import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "x9ct74ie",
  dataset: "production",
  apiVersion: "2024-08-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
