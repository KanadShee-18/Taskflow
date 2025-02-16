import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";

interface UseGetProjectsProps {
  taskId: string;
}

export const useGetSingleTask = ({ taskId }: UseGetProjectsProps) => {
  const query = useQuery({
    queryKey: ["tasks", taskId],
    queryFn: async () => {
      const response = await client.api.tasks[":taskId"].$get({
        param: { taskId },
      });
      if (!response.ok) {
        throw new Error("Problem occurred to fetch individual task!");
      }
      const { data } = await response.json();
      return data;
    },
  });
  return query;
};
