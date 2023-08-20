import { DesktopContainer } from "./desktop-container";
import { MobileContainer } from "./mobile-container";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <DesktopContainer>{children}</DesktopContainer>

      <MobileContainer>{children}</MobileContainer>
    </div>
  );
}
