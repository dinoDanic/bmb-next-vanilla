export type NavLink = {
  name: NavLinkNames;
};

export const navLinks: NavLink[] = [
  { name: "Proizvodi" },
  { name: "Kontakt" },
  { name: "Podrska" },
  { name: "Extra1" },
  { name: "Extra2" },
];

export type NavLinkNames =
  | "Proizvodi"
  | "Kontakt"
  | "Podrska"
  | "Extra1"
  | "Extra2";
