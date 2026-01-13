import { createClient } from "@sanity/client";

export const sanity = createClient({
    projectId: "lgtz8nod", // ← هذا لازم يكون موجود
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: true,
});
