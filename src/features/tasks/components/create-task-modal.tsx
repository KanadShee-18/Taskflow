"use client";

import { ResponsiveModal } from "@/components/responsive-modal";
import { UseCreateTaskModal } from "../hooks/use-create-task-modal";
import { CreateTaskForm } from "./create-task-form";
import { CreateTaskFormWrapper } from "./create-task-modal-wrapper";

export const CreateTaskModal = () => {
  const { isOpen, close, setIsOpen } = UseCreateTaskModal();

  console.log("is open: ", isOpen);

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      {/* <CreateTaskForm onCancel={close} /> */}
      <CreateTaskFormWrapper onCancel={close} />
    </ResponsiveModal>
  );
};
