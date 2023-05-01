import { routes } from "@/routes";
import { MenuLink } from "../components/MenuLink";

export type CategoryNames =
  | "Roštilji i pečenjare"
  | "Krušne peći"
  | "Uređenje okoliša"
  | "Dekorativne obloge"
  | "Industrijska galanterija"
  | "Ostali proizvodi";

export const categoryLinks: MenuLink[] = [
  {
    name: "Roštilji i pečenjare",
    href: routes.rostiljiIPecenjare,
    belongsTo: "Proizvodi",
    children: [
      { name: "Mini kamini", href: "#" },
      { name: "Rostilji", href: "#" },
      { name: "Mini pecenjare", href: "#" },
      { name: "Pecenjare", href: "#" },
      { name: "Rostilj oprema", href: "#" },
    ],
  },
  {
    name: "Krušne peći",
    href: routes.krusnePeci,
    belongsTo: "Proizvodi",
    children: [
      { name: "Hobby", href: "#" },
      { name: "Profi", href: "#" },
      { name: "Oprema", href: "#" },
    ],
  },
  {
    name: "Uređenje okoliša",
    href: routes.uredenjeOkolisa,
    belongsTo: "Proizvodi",
    children: [
      { name: "Žardinjere", href: "#" },
      { name: "Fontane", href: "#" },
      { name: "Vrtne figure i statue", href: "#" },
      { name: "Zdenčeki, bunari", href: "#" },
      { name: "Škarpni element", href: "#" },
      { name: "Stolovi i klupe", href: "#" },
      { name: "Stalci za suncobrane", href: "#" },
      { name: "Ostali betonski elementi", href: "#" },
    ],
  },
  {
    name: "Dekorativne obloge",
    belongsTo: "Proizvodi",
    href: routes.dekorativneObloge,
  },
  {
    name: "Industrijska galanterija",
    belongsTo: "Proizvodi",
    href: routes.industrijkaGalanterija,
  },
  {
    name: "Ostali proizvodi",
    belongsTo: "Proizvodi",
    href: routes.ostaliProizvodi,
  },
];
