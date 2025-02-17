import { useParams } from "next/navigation";

export const useTaskIdFromParams = () => {
  const param = useParams();
  return param.taskId as string;
};
