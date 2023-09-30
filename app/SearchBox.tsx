'use client'
import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";

export default function SearchBox(){
    const [input,setInput]=useState("")
    const router=useRouter();
const handleSearch=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(!input)return ;
    router.push(`/search?term=${input}`)
}


    return <form onSubmit={handleSearch} className={"max-w-6xl mx-auto flex justify-between items-center"}>
        <input type={"text"} className={"w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-500 flex-1"}
        placeholder={"Search Keywords..."}
               onChange={(e)=>setInput(e.target.value)}
        />
        <button type={"submit"}
        disabled={!input}
                className={"text-orange-500 disabled:text-gray-500"}
        >Search</button>
    </form>

}