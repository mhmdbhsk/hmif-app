import { DesktopFooter } from "./desktop-footer";
import { DesktopHeader } from "./desktop-header";

interface DesktopContainerProps {
  children: React.ReactNode;
}

export function DesktopContainer({ children }: DesktopContainerProps) {
  return (
    <div className="flex h-screen flex-col justify-between">
      <DesktopHeader />
      <div className="container mx-auto hidden max-w-screen-md flex-col sm:flex">
        <div className="min-h-max flex-1 py-5">{children}</div>
      </div>
      <DesktopFooter />
    </div>
  );
}
