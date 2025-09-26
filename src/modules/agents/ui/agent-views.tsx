"use client";

import { useSuspenseQuery} from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { DataTable } from "./componenets/data-table";
import { columns } from "./componenets/columns";
import { AgentsEmptyState } from "./componenets/agents-empty-state";
import { useState } from "react";
import { NewAgentDialog } from "./componenets/new-agentdialog";

export const AgentsView = () => {
  const trpc = useTRPC();
  const { data} = useSuspenseQuery(
    trpc.agents.getMany.queryOptions()
  );
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Show empty state if no agents
  if (!data || data.length === 0) {
    return (
      <>
        <NewAgentDialog 
          open={isDialogOpen} 
          onOpenChange={setIsDialogOpen}
        />
        <AgentsEmptyState onCreateAgent={() => setIsDialogOpen(true)} />
      </>
    );
  }

  return (
    <div>
      <DataTable data={data} columns={columns} />
    </div>
  );
};


