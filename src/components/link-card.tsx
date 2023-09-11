import { cn } from "@/lib/utils";
import Link from "next/link";
import { Card, CardHeader } from "./ui";
import { IconExternalLink, type TablerIconsProps } from "@tabler/icons-react";

type LinkCardProps = {
  data: {
    title: string;
    path: string;
    icon: (props: TablerIconsProps) => JSX.Element;
    disabled?: boolean;
  };
};

export default function LinkCard({ data }: LinkCardProps) {
  console.log(typeof data.icon, "data icon");

  return (
    <Link
      key={data.title}
      href={data.disabled ? "#" : data.path}
      className={cn(
        "group/nav h-max w-full rounded-lg bg-black transition duration-150 ease-in-out group-hover:bg-white group-hover:text-black",
        data.disabled && "cursor-not-allowed",
      )}
    >
      <Card className="relative flex h-auto flex-1 rounded-md shadow-none transition duration-150 ease-in-out hover:translate-x-1.5 hover:translate-y-1.5 hover:border-black active:translate-x-1 active:translate-y-1">
        {data.disabled && (
          <div className="absolute inset-0 z-10 flex items-center justify-center rounded  bg-black bg-opacity-70">
            <span className="text-sm font-medium text-white">Coming Soon</span>
          </div>
        )}
        <CardHeader className="flex w-full flex-row items-center justify-between font-medium">
          <span>{data.title}</span>
          <div className="!m-0 flex items-center">
            {/* <data.icon
              className="m-0 block opacity-30 group-hover/nav:hidden"
              stroke={1.3}
            /> */}
            <IconExternalLink
              className="m-0 hidden group-hover/nav:block"
              stroke={1.3}
            />
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
