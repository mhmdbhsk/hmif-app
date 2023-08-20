export function DesktopFooter() {
  return (
    <div className="flex border-t py-3">
      <div className="container flex w-full max-w-screen-md justify-between py-10">
        <div className="flex flex-1 flex-col gap-4">
          <div>
            <span className="font-medium">Hubungi Kami</span>
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
              0822-9845-2837 (Made)
              <br /> 081229750812 (Ingkafi)
            </span>
            <span className="text-sm">hmif@student.undip.ac.id</span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <div>
            <span className="font-medium">Akun Kami</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm">Facebook</span>
            <span className="text-sm">Twitter</span>
            <span className="text-sm">YouTube</span>
            <span className="text-sm">Line</span>
            <span className="text-sm">Instagram</span>
            <span className="text-sm">Email</span>
            <span className="text-sm">Spotify</span>
          </div>
        </div>
      </div>
    </div>
  );
}
