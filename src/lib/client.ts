import  sanityClient  from "@sanity/client";
import { ImageUrlBuilder } from "next-sanity-image";

const client = sanityClient({
  projectId: '',
  dataset: '',
  apiVersion: '',
  useCdn: true,
  token: '',
})