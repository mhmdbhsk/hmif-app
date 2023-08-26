import { DesktopFooter } from "./desktop-footer";
import { DesktopHeader } from "./desktop-header";

interface DesktopContainerProps {
  children: React.ReactNode;
}

export function DesktopContainer({ children }: DesktopContainerProps) {
  return (
    <div className="flex h-screen w-full flex-col justify-between">
      <DesktopHeader />
      <div className="container mx-auto max-w-screen-md flex-col">
        <div className="min-h-max flex-1 py-5">{children}</div>
      </div>
      <DesktopFooter />
    </div>
  );
}
