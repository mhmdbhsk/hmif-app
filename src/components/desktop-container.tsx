import { DesktopHeader, DesktopFooter } from "@/components";

interface DesktopContainerProps {
  children: React.ReactNode;
}

export function DesktopContainer({ children }: DesktopContainerProps) {
  return (
    <div className="flex h-screen w-full flex-col justify-between">
      <DesktopHeader />

      <div>
        <div className="mt-[74px] min-h-max flex-1">{children}</div>
      </div>
      <DesktopFooter />
    </div>
  );
}
