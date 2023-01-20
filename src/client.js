import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Here we will connect frontend to sanity js

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,  //get this project id using command npx sanity manage
    dataset: "production",
    apiVersion: "2022-02-01",
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN
});

const builer = imageUrlBuilder(client);

// console.log(process.env.REACT_APP_SANITY_PROJECT_ID);
// console.log("Hello")

export const urlFor = (source) => builer.image(source);