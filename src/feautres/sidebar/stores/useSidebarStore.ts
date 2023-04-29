import { create } from "zustand";
import { NavLinkNames } from "../utils/navLinks";

interface ThemeStore {
  activeNavLink: NavLinkNames | undefined;
  setActiveNavLink: (name: NavLinkNames | undefined) => void;
}

export const useSidebarStore = create<ThemeStore>((set) => ({
  activeNavLink: undefined,
  setActiveNavLink: (name) => set(() => ({ activeNavLink: name })),
}));
