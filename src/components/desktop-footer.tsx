import { socialConfig } from "@/configs/social-config";
import { Ribbon } from "./ribbon";
import Link from "next/link";

export function DesktopFooter() {
  return (
    <div className="relative mt-12 flex flex-col py-3">
      <Ribbon />
      <div className="container mt-20 flex w-full max-w-screen-md justify-between py-10">
        <div className="flex flex-1 flex-col gap-4 text-gray-500">
          <div>
            <span className="font-medium text-black">Hubungi Kami</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm">
              Himpunan Mahasiswa Universitas Diponegoro
            </span>
            <span className="text-sm">
              Gedung E Lantai 3, Fakultas Sains dan Matematika - Universitas
              Diponegoro, Tembalang, Semarang
            </span>
            <span className="text-sm">
              {" "}
              +62 895-4107-57890 (Nafis)
              <br /> +62 821-4618-4680 (Dhimas)
            </span>
            <span className="text-sm">hmif@student.undip.ac.id</span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <div>
            <span className="font-medium">Akun Kami</span>
          </div>
          <div className="flex flex-col gap-2">
            {socialConfig.map((social) => (
              <Link
                href={social.url}
                className="cursor-pointer text-sm text-gray-500 hover:text-black"
                key={social.title}
                target="_blank"
              >
                {social.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
