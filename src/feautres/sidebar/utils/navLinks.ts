export type NavLink = {
  name: NavLinkNames;
};

export const navLinks: NavLink[] = [
  { name: "Proizvodi" },
  { name: "Kontakt" },
  { name: "Podrska" },
];

export type NavLinkNames = "Proizvodi" | "Kontakt" | "Podrska";
