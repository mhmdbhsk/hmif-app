import Image from "next/image";
import { DesktopNavigation } from "./desktop-navigation";

export function DesktopHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-20 flex h-[74px] border-b bg-white py-3">
      <div className="container flex h-max w-full max-w-screen-lg items-center justify-between">
        <div className="flex h-12 items-center gap-4">
          <Image src={"/images/logo.png"} alt="Logo" height={24} width={65} />
        </div>

        <DesktopNavigation />
      </div>
    </header>
  );
}
