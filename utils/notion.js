// const { Client } = require("@notionhq/client");

// export const notionClient = new Client({
//   auth: process.env.NEXT_PUBLIC_NOTION_ACCESS_TOKEN
// })

// export const getExperiences = async () => {
//   const res = await notionClient.databases.query({
//     database_id: process.env.NEXT_PUBLIC_NOTION_EXPERIENCES_DATABASE_ID
//   });
  
//   console.log(process.env.NEXT_PUBLIC_NOTION_EXPERIENCES_DATABASE_ID);
//   console.log(res.results);
//   return res.results;
// }

const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_ACCESS_TOKEN });

(async () => {
  const databaseId = process.env.NEXT_PUBLIC_NOTION_EXPERIENCES_DATABASE_ID;
  try{
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    console.log(response);
  }catch(e){
    console.log(e);
  }
})();