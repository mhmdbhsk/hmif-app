import {
  IconAddressBook,
  IconArticle,
  IconCalendar,
  IconHome2,
  IconMedal,
  IconPhoto,
  IconUserHexagon,
} from "@tabler/icons-react";

export const navigationConfig = [
  {
    title: "Beranda",
    path: "/",
    icon: IconHome2,
  },
  {
    title: "Agenda",
    path: "/agenda",
    icon: IconCalendar,
  },
  {
    title: "Artikel",
    path: "/article",
    icon: IconArticle,
  },
  {
    title: "Galeri",
    path: "/gallery",
    icon: IconPhoto,
  },
  {
    title: "Prestasi",
    path: "/achievement",
    icon: IconMedal,
  },
  {
    title: "Tentang Kami",
    path: "/about-us",
    icon: IconUserHexagon,
    subMenu: [
      {
        title: "Profil",
        path: "/about-us/profile",
        description:
          "Profil umum Himpunan Mahasiswa Informatika Universitas Diponegoro",
      },
      {
        title: "Kepengurusan",
        path: "/about-us/management",
        description:
          "Kepengurusan dalam Himpunan Mahasiswa Informatika Universitas Diponegoro",
      },
      {
        title: "Badan Pengurus",
        path: "/about-us/organization",
        description:
          "Badan Pengurus dalam Himpunan Mahasiswa Informatika Universitas Diponegoro",
      },
      {
        title: "Biro",
        path: "/about-us/bureau",
        description:
          "Biro dibawah naungan Departement Informatika Universitas Diponegoro",
      },
      {
        title: "Komunitas",
        path: "/about-us/community",
        description:
          "Komunitas dibawah naungan Departement Informatika Universitas Diponegoro",
      },
    ],
  },
  {
    title: "Kontak",
    path: "/contact",
    icon: IconAddressBook,
  },
];

export const appNavigationConfig = [
  {
    title: "DMW++",
    path: "/",
    icon: IconHome2,
  },
  {
    title: "Bukulink",
    path: "/",
    icon: IconHome2,
  },
  {
    title: "DBO",
    path: "/",
    icon: IconHome2,
  },
  {
    title: "IOS",
    path: "/",
    icon: IconHome2,
  },
  {
    title: "iojek",
    path: "/",
    icon: IconHome2,
  },
];
