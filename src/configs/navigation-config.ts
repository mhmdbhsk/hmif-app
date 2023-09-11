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
    title: "Organisasi",
    path: "/organization",
    icon: IconUserHexagon,
  },
  {
    title: "Kontak",
    path: "/contact",
    icon: IconAddressBook,
  },
];

export const appNavigationConfig = [
  {
    title: "Informatics Ongoing Story",
    path: "/",
    icon: IconHome2,
    disabled: true,
  },
  {
    title: "Informatics Open Project",
    path: "/",
    icon: IconHome2,
    disabled: true,
  },
  {
    title: "Database Organisasi",
    path: "/",
    icon: IconHome2,
    disabled: true,
  },
  {
    title: "DMW++",
    path: "/",
    icon: IconHome2,
    disabled: true,
  },
  {
    title: "Bukulink",
    path: "/",
    icon: IconHome2,
    disabled: true,
  },
];
