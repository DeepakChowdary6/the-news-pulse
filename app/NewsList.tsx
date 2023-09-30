import {NewsRepsonse} from "@/typing";
import Article from "@/app/Article";

type Props={
    news:NewsRepsonse;
}

export default  function NewsList({news}:Props){
    return (
        <main className="dark:bg-black grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3  gap-6  " >

            {news.data.map((article=>(
                <Article  key={article.title} article={article}/>
            )))}

        </main>
    )

}