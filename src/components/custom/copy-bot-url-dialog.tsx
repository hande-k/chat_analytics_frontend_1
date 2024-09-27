"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Share2Icon } from "@radix-ui/react-icons";
import { IconCheck, IconCopy } from "@/components/custom/icons";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export interface CopyBotUrlDialogProps {
  shareURL: string;
}

export function CopyBotUrlDialog({ shareURL }: CopyBotUrlDialogProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 });
  const onCopy = () => {
    if (isCopied) return;
    copyToClipboard(shareURL);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <Share2Icon className="h-4 w-4 mr-1 text-white" />
          <p>Share Bot Link</p>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-2xl w-fit">
        <AlertDialogHeader className="max-w-2xl w-fit">
          <AlertDialogTitle>{"Copy the bot link!"}</AlertDialogTitle>
          <AlertDialogDescription>
            {"Copy the link below to share it:"}
          </AlertDialogDescription>
          <div className="rounded-md px-4 py-1 font-mono text-sm flex items-center justify-between max-w-xl border">
            <span className="whitespace-nowrap overflow-x-scroll max-w-xl">
              {shareURL}
            </span>
            <Button variant="ghost" size="icon" onClick={onCopy}>
              {isCopied ? <IconCheck /> : <IconCopy />}
              <span className="sr-only">{"Copy link"}</span>
            </Button>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter className="max-w-xl">
          <AlertDialogCancel>{"Close"}</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
