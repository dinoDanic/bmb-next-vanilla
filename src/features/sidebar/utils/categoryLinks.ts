import { routes } from "@/routes";
import { MenuLink } from "../components/MenuLink";

export const categoryLinks: MenuLink[] = [
  {
    name: "Rostilji i pecenjare",
    href: routes.rostiljiIPecenjare,
    children: [
      { name: "Mini kamini", href: "#" },
      { name: "Rostilji", href: "#" },
      { name: "Mini pecenjare", href: "#" },
      { name: "Pecenjare", href: "#" },
      { name: "Rostilj oprema", href: "#" },
    ],
  },
  {
    name: "Krusne peci",
    href: routes.krusnePeci,
    children: [
      { name: "Hobby", href: "#" },
      { name: "Profi", href: "#" },
      { name: "Oprema", href: "#" },
    ],
  },
  {
    name: "Uredenje okolisa",
    href: routes.uredenjeOkolisa,
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
  { name: "Dekorativne obloge", href: routes.dekorativneObloge },
  { name: "Industrijska galanterija", href: routes.industrijkaGalanterija },
  { name: "Ostali proizvodi", href: routes.ostaliProizvodi },
];
