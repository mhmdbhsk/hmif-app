import { navigationConfig } from "@/configs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const MotionLink = motion(Link);

export function MobileNavigation() {
  const router = useRouter();
  const { pathname } = router;
  const checkActive = (path: string) => {
    const splitPath = path.split("/");
    const splitPathname = pathname.split("/");
    console.log(
      splitPathname[1]?.match(`/^${splitPath[1]!}$/`),
      path,
      pathname,
      splitPath,
      splitPathname,
      "anjing",
    );
    // return pathname.includes(splitPath[1]!);
    return splitPathname[1]!.includes(splitPath[1]!);
  };

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const controls = useAnimation();
  const navRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    void controls.start({ opacity: 0 }); // Reset highlight position and width
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    const ref = navRefs.current[index];
    if (ref) {
      const { width, left } = ref.getBoundingClientRect();
      const parentLeft = ref.parentElement?.getBoundingClientRect().left ?? 0;
      const iconWidth = 32; // Icon size
      const padding = (width - iconWidth) / 2; // Adjust the padding to achieve 1:1 aspect ratio
      const adjustedWidth = iconWidth + 3 * padding;
      const adjustedX = left - parentLeft + (width - adjustedWidth);
      void controls.start({
        width: adjustedWidth,
        x: adjustedX,
        opacity: 1,
      });
    }
  };

  useEffect(() => {
    if (typeof hoveredIndex === "number") {
      handleMouseEnter(hoveredIndex);
    }
  }, [navRefs.current]);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 flex w-full justify-center p-6">
      <div className="relative flex flex-nowrap gap-3 overflow-x-scroll rounded-full border bg-white p-2">
        <motion.div
          initial={{ width: 0, x: 0, opacity: 0 }}
          animate={controls}
          className="absolute bottom-0 h-full rounded-full bg-gray-200 p-2"
        />
        {navigationConfig.map((item, index) => (
          <MotionLink
            key={item.path}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={cn(
              checkActive(item.path) && "rounded-full bg-gray-300",
              "relative z-10 flex w-full flex-1 items-center justify-center gap-2 whitespace-nowrap p-4 text-sm",
            )}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            ref={(el) => (navRefs.current[index] = el)}
            href={item.path}
          >
            <item.icon size={32} stroke={1.2} />
          </MotionLink>
        ))}
      </div>
    </nav>
  );
}
