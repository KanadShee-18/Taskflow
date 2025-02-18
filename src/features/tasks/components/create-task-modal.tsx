"use client";

import { ResponsiveModal } from "@/components/responsive-modal";
import { UseCreateTaskModal } from "../hooks/use-create-task-modal";
import { CreateTaskFormWrapper } from "./create-task-modal-wrapper";

export const CreateTaskModal = () => {
  const { isOpen, close, setIsOpen } = UseCreateTaskModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      {/* <CreateTaskForm onCancel={close} /> */}
      <CreateTaskFormWrapper onCancel={close} />
    </ResponsiveModal>
  );
};
