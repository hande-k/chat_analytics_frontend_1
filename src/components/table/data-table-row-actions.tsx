
"use client";
import React, { useState } from "react";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getDetailedMessages } from "@/lib/api_calls";

import { conversationSchema } from "@/components/table/schema";
import { ChatSheetComponent } from "../custom/chat-sheet";
import { DashboardMessagesResponse } from "@/lib/types";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}


export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {

  const task = conversationSchema.parse(row.original);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [chatDetailsData, setChatDetailsData] = useState<DashboardMessagesResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleSeeDetailsClick = async () => {
    console.log("Fetching chat details for chat_id:", task.chat_id); // Confirm chat ID
    setIsLoading(true);
    setSheetOpen(true);
    try {
      const chat_details = await getDetailedMessages(task.chat_id);
      console.log("Chat details fetched:", chat_details); // Log fetched data
      setChatDetailsData(chat_details);
    } catch (error) {
      console.error("Failed to fetch chat details:", error);
      setError(error instanceof Error ? error : new Error("An unexpected error occurred"));
    }
    setIsLoading(false);
  };

  const handleClose = () => {
    console.log("Closing chat details sheet");
    setSheetOpen(false);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuItem onClick={handleSeeDetailsClick}>
          View conversation
        </DropdownMenuItem>
      </DropdownMenuContent>
      {sheetOpen && (
        <ChatSheetComponent
          setSheetOpen={setSheetOpen}
          sheetOpen={sheetOpen}
          chatDetailsData={chatDetailsData}
          isLoading={isLoading}
        />
      )}
    </DropdownMenu>
  );
}
