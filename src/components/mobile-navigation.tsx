import { navigationConfig } from "@/configs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";

export function MobileNavigation() {
  const router = useRouter();
  const checkActive = (path: string) => {
    return router.pathname.includes(path);
  };

  console.log(checkActive("/"));

  return (
    <div className="flex flex-nowrap overflow-x-scroll border-t">
      {navigationConfig.map((item) => (
        <Link
          // className={cn(
          //   checkActive(item.path) && "bg-gray-200",
          //   "flex w-full flex-1 items-center justify-center gap-2 whitespace-nowrap px-4 py-2 text-sm"
          // )}
          className="flex w-full flex-1 items-center justify-center gap-2 whitespace-nowrap px-4 py-2 text-sm"
          key={item.path}
          href={item.path}
        >
          <item.icon size={16} stroke={1.2} />

          <span>{item.title}</span>
        </Link>
      ))}
    </div>
  );
}
