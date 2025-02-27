"use client";

import { ResponsiveModal } from "@/components/responsive-modal";

import { WorkSpaceForm } from "./workspace-form";

import { UseCreateWorkspaceModal } from "../hooks/use-create-workspace-modal";

const CreateWorkspaceModal = () => {
  const { isOpen, setIsOpen, close } = UseCreateWorkspaceModal();
  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <WorkSpaceForm onCancel={close} />
    </ResponsiveModal>
  );
};

export default CreateWorkspaceModal;
