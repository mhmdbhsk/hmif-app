import { BottomNavigation } from "./bottom-navigation";
import { MobileFooter } from "./mobile-footer";
import { MobileHeader } from "./mobile-header";

interface MobileContainerProps {
  children: React.ReactNode;
}

export function MobileContainer({ children }: MobileContainerProps) {
  return (
    <div className="relative flex w-full max-w-md flex-col sm:hidden">
      <MobileHeader />

      <div className="flex flex-col">
        {children}
        <MobileFooter />
      </div>

      <BottomNavigation />
    </div>
  );
}
