"use client";

import { ResponsiveModal } from "@/components/responsive-modal";
import { UseEditTaskModal } from "../hooks/use-edit-task-modal";
import { EditTaskFormWrapper } from "./edit-task-modal-wrapper";

export const EditTaskModal = () => {
  const { taskId, close } = UseEditTaskModal();

  return (
    <ResponsiveModal open={!!taskId} onOpenChange={close}>
      {taskId && <EditTaskFormWrapper id={taskId} onCancel={close} />}
    </ResponsiveModal>
  );
};
