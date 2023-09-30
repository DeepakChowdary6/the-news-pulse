import {Article} from "@/typing";
import ReadMoreButton from "@/app/ReadMoreButton";

type Props={
    article:Article
}
export default function Article({article}:Props){
    return <article className=" px-6 py-6 border-2  dark:hover:bg-slate-800
    dark:bg-slate-800 dark:border-b-white flex flex-col rounded-lg shadow-sm hover:scale-105
      transition-all duration-200 ease-out
    ">
        {article.image && (
            <img
            src={article.image}
            alt={article.title}
            className={"h-56 w-full object-cover rounded-t-lg shadow-md"}
            />
        )}
        <div className={"flex-1 flex flex-col dark:bg-black"}>
            <div className={"flex-1 flex flex-col p-5 "}>
                <h2 className={"font-bold font-serif"}>{article.title}</h2>
                <section className={"mt-2 flex-1 "}>
                    <p className={"text-xs line-clamp-6"}>{article.description}</p>
                </section>
                <footer className={"text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400"}>
                    <p>{article.source}</p>
                    <p>{article.published_at}</p>

                </footer>
            </div>
          <ReadMoreButton article={article}/>
        </div>

    </article>


}