import { ProjectAnalyticsResponseType } from "@/features/projects/api/use-get-project-analytics";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { AnalyticsCard } from "./analytics-card";
import { DotterSeperator } from "@/components/dotted-seperator";

export const ProjectAnalytics = ({ data }: ProjectAnalyticsResponseType) => {
  return (
    <ScrollArea className="border rounded-lg w-full whitespace-nowrap shrink-0">
      <div className="w-full flex flow-row">
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title={"Total Tasks"}
            value={data.taskCount}
            variant={data.taskDifference > 0 ? "up" : "down"}
            increaseValue={data.taskDifference}
          />
          <DotterSeperator direction="vertical" />
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title={"Assigned Tasks"}
            value={data.assignedTaskCount}
            variant={data.assignedTaskDifference > 0 ? "up" : "down"}
            increaseValue={data.assignedTaskDifference}
          />
          <DotterSeperator direction="vertical" />
        </div>

        <div className="flex items-center flex-1">
          <AnalyticsCard
            title={"Completed Tasks"}
            value={data.completeTaskCount}
            variant={data.completeTaskDifference > 0 ? "up" : "down"}
            increaseValue={data.completeTaskDifference}
          />
          <DotterSeperator direction="vertical" />
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title={"Overdue Tasks"}
            value={data.overdueTaskCount}
            variant={data.overdueTaskDifference > 0 ? "up" : "down"}
            increaseValue={data.overdueTaskDifference}
          />
          <DotterSeperator direction="vertical" />
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title={"Incomplete Tasks"}
            value={data.incompleteTaskCount}
            variant={data.incompleteTaskDifference > 0 ? "up" : "down"}
            increaseValue={data.incompleteTaskDifference}
          />
          <DotterSeperator direction="vertical" />
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
