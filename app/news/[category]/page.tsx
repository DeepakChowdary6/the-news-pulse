import {Category, NewsRepsonse} from "@/typing";
import fetchNews from "@/lib/fetchNews";
import NewsList from "@/app/NewsList";

type Props={
    params:{category:Category};
};

export default async  function NewsCategory({params:{category}}:Props){
    const news:NewsRepsonse=await fetchNews(category);

    return <div>
        <h1 className={"headerTitle"}>{category}</h1>
        <NewsList news={news}/>
    </div>
}

// export async function generateStaticParams(){
//     return categories.map(category=>({
//         category:category,
//     }));
// }