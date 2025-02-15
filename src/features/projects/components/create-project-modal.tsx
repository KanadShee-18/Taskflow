"use client";

import { ResponsiveModal } from "@/components/responsive-modal";
import { UseCreateProjectModal } from "../hook/use-create-project-modal";
import { CreateProjectForm } from "./create-project-form";

const CreateProjectModal = () => {
  const { isOpen, setIsOpen, close } = UseCreateProjectModal();
  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateProjectForm onCancel={close} />
    </ResponsiveModal>
  );
};

export default CreateProjectModal;
