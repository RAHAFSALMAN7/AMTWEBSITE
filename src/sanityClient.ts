import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanity = createClient({
    projectId: "lgtz8nod",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: true,
});

const builder = imageUrlBuilder(sanity);

// لتحويل صورة Sanity إلى URL
export const urlFor = (source: any) => {
    return builder.image(source);
};
