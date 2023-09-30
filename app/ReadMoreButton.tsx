'use client'
import {Article} from "@/typing";
import {useRouter} from "next/navigation";

type Props={
    article:Article;
}

export default function ReadMoreButton({article}:Props){
    const router=useRouter();
      const handleclick=()=>{
          const queryString=Object.entries(article)
              .map(([key,value])=>`${key}=${value}`)
              .join("&")
          console.log(queryString);
          const url=`/article?${queryString}`;
          router.push(url)
      }
    return <button
    onClick={handleclick}
    className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500"
    >Read More</button>
}