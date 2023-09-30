import '@/styles/globals.css'
import {categories} from "@/constants";
import fetchNews from "@/lib/fetchNews";
const fs = require('fs');
import {NewsRepsonse} from "@/typing";
import NewsList from "@/app/NewsList";
import response from '../response.json'
// const newsPromise = () => {
//     return new Promise(async (resolve, reject) => {

//         } else {
//             const news = await fetchNews(categories.join(","));
//             fs.writeFileSync('response.json', JSON.stringify(news), 'utf8');
//             resolve(news);
//         }
//     });
// };
// const news: NewsRepsonse = await newsPromise();
export default async function Homepage(){
    //fetch the news data
    const responseJSON = await fs.readFileSync('response.json', 'utf8');
    // if (responseJSON) {
    const news =JSON.parse(responseJSON);
       await new Promise((resolve)=>setTimeout(resolve,1000));


    return (<div>
      <NewsList news={news}/>
    </div>);
}