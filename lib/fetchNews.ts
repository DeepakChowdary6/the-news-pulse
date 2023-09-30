import {gql} from "graphql-request";
import {Category, NewsRepsonse} from "@/typing";
import sortNewsByImage from "@/lib/sortNewsByImage";

const fetchNews=async(category?:Category, keywords?:string, isDynamic?:boolean)=>{
const query=gql`
    query MyQuery(
        $access_key:String!
        $categories:String!
        $keywords:String
    )
    {
        myQuery(access_key: $access_key
        categories: $categories
            countries: "us"
            sort: "published_desc"
            keywords: $keywords
           
        ){
            data {
                author
                category
                image
                description
                country
                language
                published_at
                source
                title
                url
            }
            pagination {
                count
                limit
                offset
                total
            }
            
        }
        
    }
`;
    //Graph Ql query
    //Fetch function with next.hs 13 caching
    const res=await fetch('https://yuzha.stepzen.net/api/getting-started/__graphql',{
        method:'POST',
        cache:isDynamic?"no-cache":"default",
        headers:{
            "Content-Type":"application/json",
            Authorization:`Apikey ${process.env.STEPZEN_API_KEY}`,
        },
        body:JSON.stringify({
            query,
            variables:{
                access_key:process.env.MEDIASTACK_API_KEY,
                categories:category,
                keywords:keywords,
            }
        })
    });
   // console.log("LOADING data ",category,keywords);
    const newsResponse=await res.json()
    //sort the function by images present\
    const news:NewsRepsonse=sortNewsByImage(newsResponse.data.myQuery);
    return news;
}
export default fetchNews;