import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: "wtz3x9sz",
  dataset: "production",
  useCdn: true,
  apiVersion: '2021-08-31',
 
});

export const GetProduct = async (slug) => {
   
    const query = `*[_type == 'menu' && title == '${slug}']`;
    const products = await client.fetch(query);
    console.log(products);
    return products
  }

  export const GetFamous = async () => {
   
    const query = `*[_type == 'famous']`;
    const products = await client.fetch(query);
    console.log(products);
    return products
  }

  export const GetCategory = async () => {
   
    const query = `*[_type == 'menu']`;
    const products = await client.fetch(query);
    console.log(products);
    return products
  }

  export const GetEvent = async () => {
   
    const query = `*[_type == 'event']`;
    const products = await client.fetch(query);
    console.log(query);
    return products
  }
  

  export const GetEventData = async (slug) => {
   
    const query = `*[_type == 'event' && _id == '${slug}']`;
    const products = await client.fetch(query);
    console.log(query);
    return products
  }

  export const builder = imageUrlBuilder(client);