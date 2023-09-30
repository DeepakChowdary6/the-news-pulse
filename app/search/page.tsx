type Props={
    searchParams?:{term:string}
}
import fetchNews from "@/lib/fetchNews";
import NewsList from "@/app/NewsList";
import {NewsRepsonse} from "@/typing";

export default async  function SearchPage({searchParams}:Props){

    try {
        const news:NewsRepsonse=await fetchNews(
            "general",
            searchParams?.term,
            true
        );
        return <div>
            <h1 className={"headerTitle"}>Search Results for:{searchParams?.term}</h1>
            <NewsList news={news}/>
        </div>
    }catch (e){
        console.log('Error',e);

    }


}