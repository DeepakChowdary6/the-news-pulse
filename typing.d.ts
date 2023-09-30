 export type Category="business"|"entertainment"|"general"|"health"|"science"|"sports"|"technology";

export type Pagination={
    count:Int;
    limit:Int;
    offset:Int;
    total:Int;
 }
export type Article={
    author:string|null;
    category:string;
    country:string;
    description:string;
    image:string|null;
    language:string;
    published_at:string;
    source:string;
    title:string;
    url:string;
}
export type NewsRepsonse ={
    pagination:Pagination;
    data:Article[];
}