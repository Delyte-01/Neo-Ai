"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface CancelConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function CancelConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
}: CancelConfirmationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md h-[259px] md:h-[220px] md:w-[533px] shadow-sm  bg-white/1 rounded-3xl transition-all font-sora backdrop-blur-md  text-white shadow-[#52398a] border-0 ring-[#52398a] ring">
        <DialogHeader className="gap-2">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <DialogTitle className="font-normal">
            Are you sure you want to cancel your subscription?
          </DialogTitle>
          <DialogDescription className="text-white">
            Your plan will remain active until your renewal date. After that,
            you&apos;ll lose access to premium features.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col md:flex-row sm:gap-3 overflow-hidden w-full ">
          <Button
            variant="outline"
            className="flex-1 bg-transparent cursor-pointer hover:text-white hover:bg-[#503d7a] hover:border-0"
            onClick={onClose}
          >
            Keep my plan
          </Button>
          <Button
            className=" bg-blue-600 hover:bg-blue-700 flex-1 cursor-pointer"
            onClick={onConfirm}
          >
            Yes, Cancel subscription
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
