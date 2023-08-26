import { MobileFooter } from "./mobile-footer";
import { MobileHeader } from "./mobile-header";
import { MobileNavigation } from "./mobile-navigation";

interface MobileContainerProps {
  children: React.ReactNode;
}

export function MobileContainer({ children }: MobileContainerProps) {
  return (
    <div className="w-full max-w-screen-md flex-col justify-between">
      <MobileHeader />

      <div className="flex flex-col">{children}</div>

      <MobileFooter />

      <MobileNavigation />
    </div>
  );
}
