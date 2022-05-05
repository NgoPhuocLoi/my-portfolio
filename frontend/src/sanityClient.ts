import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "3wv1kpb3",
  dataset: "production",
  apiVersion: "2022-05-05",
  useCdn: true,
  ignoreBrowserTokenWarning: true,
  token:
    "skQVMXqpd5gREyMyocstcDJR9b5bJd0DXTWzmRVutoiSeE0VlLqsJdn2s8sqJjiW6E0YAV8mm3Mp8KiSDIrwvV2hVVwy5ZaMm8n9U2111AdE0Rm4LKrFbcQheuZSHCfaV2uQmDFpxM1otFnXnlBFx8BzIWiuGARbRoKtvCNiR85LUriwP6fN",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: object) => builder.image(source);
