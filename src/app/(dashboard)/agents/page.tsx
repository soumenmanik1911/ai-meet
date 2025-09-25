import { AgentsView } from "@/modules/agents/ui/agent-views";
import { getQueryClient ,trpc} from "@/trpc/server";
import { dehydrate,HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import {LoadingState} from "@/components/loading-state";

const page = async() =>{
     const queryClient =getQueryClient();
    void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions())
    return(
        <HydrationBoundary state = {dehydrate(queryClient)}>
            <Suspense fallback={<LoadingState title="Loading agents" description="Please wait while we load the agents"/>}>
         
        <AgentsView/>
      </Suspense>
        </HydrationBoundary> 
          
    )
}
export default page;
