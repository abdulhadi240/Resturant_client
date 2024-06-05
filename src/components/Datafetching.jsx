import { createClient } from 'next-sanity';


const client = createClient({
  projectId: "wtz3x9sz",
  dataset: "production",
  useCdn: true,
  apiVersion: '2021-08-31',
 
});

export const GetProduct = async (slug) => {
   
    const query = `*[_type == 'menu' && title == '${slug}']`;
    const products = await client.fetch(query);
    console.log(query);
    return products
  }

  export const GetCategory = async () => {
   
    const query = `*[_type == 'menu']`;
    const products = await client.fetch(query);
    console.log(query);
    return products
  }

