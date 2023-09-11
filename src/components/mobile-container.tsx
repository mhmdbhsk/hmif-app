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

      <div>
        <div className="mt-[74px] min-h-max flex-1">{children}</div>
      </div>

      {/* <MobileFooter /> */}

      <MobileNavigation />
    </div>
  );
}
