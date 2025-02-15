import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";

interface UseGetProjectsProps {
  workspaceId: string;
}

export const useGetTasks = ({ workspaceId }: UseGetProjectsProps) => {
  const query = useQuery({
    queryKey: ["tasks", workspaceId],
    queryFn: async () => {
      const response = await client.api.tasks.$get({
        query: { workspaceId },
      });
      if (!response.ok) {
        throw new Error("Problem occurred to fetch tasks!");
      }
      const { data } = await response.json();
      return data;
    },
  });
  return query;
};
