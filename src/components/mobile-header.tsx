import Image from "next/image";

export function MobileHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-20 flex h-[74px] border-b bg-white py-3">
      <div className="container flex h-max w-full max-w-screen-lg items-center justify-center">
        <div className="flex h-12 items-center gap-4">
          <Image src={"/images/logo.png"} alt="Logo" height={24} width={65} />
        </div>
      </div>
    </header>
  );
}
