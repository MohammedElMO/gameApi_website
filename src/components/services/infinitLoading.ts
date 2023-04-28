
import BaseApi from "./api-client"
import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query" 


export default function LoadMore(gameCount:number) {

    useInfiniteQuery({
        queryKey:["newgames"],
        queryFn: (context:QueryFunctionContext) =>  context.pageParam,
    })




} 