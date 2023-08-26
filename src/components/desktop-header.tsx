import { DesktopNavigation } from "@/components";

export function DesktopHeader() {
  return (
    <div className="flex border-b py-3">
      <div className="container flex h-max w-full max-w-screen-md flex-col">
        <div className="flex h-12 items-center">
          <span className="font-medium">
            Himpunan Mahasiswa Informatika Universitas Diponegoro
          </span>
        </div>

        {/* <div>
          <DesktopNavigation />
        </div> */}
      </div>
    </div>
  );
}
