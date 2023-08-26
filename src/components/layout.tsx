import { DesktopContainer } from "./desktop-container";
import { MobileContainer } from "./mobile-container";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div className="hidden w-full sm:flex">
        <DesktopContainer>{children}</DesktopContainer>
      </div>

      <div className="flex w-full sm:hidden">
        <MobileContainer>{children}</MobileContainer>
      </div>
    </div>
  );
}
