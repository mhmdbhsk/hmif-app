import { Card, CardHeader } from "@/components";
import LinkCard from "@/components/link-card";
import { appNavigationConfig } from "@/configs";
import { cn } from "@/lib/utils";
import { IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="flex w-full flex-1 items-center justify-center border-b">
        <div className="desktop-container flex h-52 items-center justify-center md:h-96">
          <span className="pb-12 text-center text-2xl font-bold md:pb-0 md:text-4xl">
            Selamat Datang di Himpunan Mahasiswa Informatika Universitas
            Diponegoro! 👋
          </span>
        </div>
      </div>

      <div className="desktop-container -mt-10 flex flex-col items-center justify-center">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {appNavigationConfig.map((item) => (
            <LinkCard data={item} key={item.title} />
          ))}
        </div>

        <div className="my-20 flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <span className="text-2xl font-medium">Tentang Kami</span>
            <span className="text-justify text-sm text-gray-500">
              Himpunan Mahasiswa Informatika (HMIF) Undip merupakan lembaga
              aspirasi mahasiswa tingkat departemen sebagai wadah independen,
              struktural berbasis Ilmu Komputer/ Informatika dan berketuhanan
              Yang Maha Esa.
            </span>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-2xl font-medium">Visi HMIF</span>
            <span className="text-justify text-sm text-gray-500">
              Menjadi Himpunan Mahasiswa yang progresif, bermartabat dan
              bermanfaat di tingkat nasional maupun internasional.
            </span>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-2xl font-medium">Misi HMIF</span>
            <div>
              <ul className="ml-4 list-outside list-decimal text-justify text-sm text-gray-500">
                <li>
                  Mengorientasikan segala bentuk kegiatan akademik maupun
                  nonakademik kepada Tuhan Yang Maha Esa.
                </li>
                <li>
                  Menjalin keakraban dan kebersamaan internal mahasiswa Ilmu
                  Komputer/ Informatika dari generasi ke generasi.
                </li>
                <li>
                  Membentuk suatu wadah terstruktur secara sistematis,
                  profesional dengan aturan organisasi yang jelas dan bersinergi
                  dengan civitas akademika Ilmu Komputer/ Informatika
                  Universitas Diponegoro.
                </li>
                <li>
                  Pemberdayaan potensi intelektual mahasiswa Ilmu Komputer/
                  Informatika yang kompetitif dan kreatif dengan
                  kegiatan-kegiatan bersifat keilmuan maupun keorganisasian
                  berbasis teknologi informasi.
                </li>
                <li>
                  Berperan aktif dalam mengembangkan dan memajukan teknologi
                  informasi secara global.
                </li>
                <li>
                  Aktif membangun kerjasama dengan kelompok, organisasi,
                  institusi, dan perusahaan yang dapat menunjang dan mendukung
                  aktifitas mahasiswa Ilmu Komputer/ Informatika Universitas
                  Diponegoro.
                </li>
                <li>
                  Mengimplementasikan disiplin ilmu yang diperoleh sebagai wujud
                  tanggung jawab moral dan pengabdian diri kepada masyarakat
                  luas.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-2xl font-medium">Fungsi HMIF</span>
            <span className="text-justify text-sm text-gray-500">
              Fungsi dari HMIF Undip adalah sebagai media informasi, penyalur
              aspirasi anggota, tempat menempa diri untuk pemberdayaan kemampuan
              intelektual, daya cipta, rasa, kreasi, seni, pembentukan insan
              berteknologi, beriman dan bertaqwa.
            </span>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-2xl font-medium">Tujuan HMIF</span>
            <div
              className="grid grid-cols-1
             gap-4 md:grid-cols-2"
            >
              <div>
                <span>Khusus</span>
                <ul className="ml-4 list-outside list-decimal text-justify text-sm text-gray-500">
                  <li>Pembentukan pola pikir mahasiswa.</li>
                  <li>Peningkatan aktifitas kemahasiswaan.</li>
                  <li>Peningkatan wawasan kemahasiswaan.</li>
                  <li>
                    Teraplikasikannya teknologi dan disiplin ilmu yang dimiliki
                    oleh mahasiswa dalam kegiatan-kegiatan kemahasiswaan.
                  </li>
                </ul>
              </div>
              <div>
                <span>Umum</span>
                <ul className="ml-4 list-outside list-decimal text-justify text-sm text-gray-500">
                  <li>
                    Pengembangan Ilmu Komputer/ Informatika Universitas
                    Diponegoro.
                  </li>
                  <li>
                    Menjunjung tinggi nama almamater Ilmu Komputer/ Informatika
                    Universitas Diponegoro.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
