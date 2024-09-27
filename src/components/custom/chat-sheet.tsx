import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetDescription,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import {
  DashboardMessagesResponse
} from "@/lib/types";

interface ChatSheetProps {
  setSheetOpen: (isOpen: boolean) => void;
  sheetOpen: boolean;
  chatDetailsData: DashboardMessagesResponse | null;
  isLoading: boolean;
}

export function ChatSheetComponent({
  setSheetOpen,
  sheetOpen,
  chatDetailsData,
  isLoading,
}: ChatSheetProps) {

  return isLoading ? (
    <Skeleton />
  ) : chatDetailsData ? (
    <div>
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen} modal>
        <SheetContent className="overflow-y-scroll w-[400px] sm:w-[800px]">
          <SheetHeader>
            <SheetTitle>{"Conversation history"}</SheetTitle>
            <Separator />
            <SheetDescription>
              {chatDetailsData.messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-2 relative group/message ${
                    message.identity === "user" ? "bg-gray-100" : "bg-gray-200"
                  }`}
                >
                  <div className="font-bold mt-1 grid gap-1 mb-2">
                    <p>
                      {new Date(message.timestamp).toLocaleString("en", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      })}
                    </p>
                    <p className="underline">
                      {message.identity === "user"
                        ? "User"
                        : "Bot"}
                      :
                    </p>
                  </div>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {message.message_content}
                  </ReactMarkdown>
                </div>
              ))}{" "}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  ) : (
    <div>{"No conversation history available"}</div>
  );
}
