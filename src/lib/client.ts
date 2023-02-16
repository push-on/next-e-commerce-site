import  sanityClient  from "@sanity/client";
import { ImageUrlBuilder } from "next-sanity-image";

export const client = sanityClient({
  projectId: '',
  dataset: '',
  apiVersion: '',
  useCdn: true,
  token: '',
})