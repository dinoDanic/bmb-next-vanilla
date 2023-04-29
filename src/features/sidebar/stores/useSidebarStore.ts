import { create } from "zustand";
import { NavLinkNames } from "../utils/navLinks";
import { MenuLink } from "../components/MenuLink";

interface ThemeStore {
  activeNavLink: NavLinkNames | undefined;
  activeCategoryLink: MenuLink | undefined;
  setActiveNavLink: (name: NavLinkNames | undefined) => void;
  setCategoryLink: (link: MenuLink | undefined) => void;
  resetStore: () => void;
}

const initialState = {
  activeNavLink: undefined,
  activeCategoryLink: undefined,
};

export const useSidebarStore = create<ThemeStore>((set) => ({
  ...initialState,
  setActiveNavLink: (name) => set(() => ({ activeNavLink: name })),
  setCategoryLink: (name) => set(() => ({ activeCategoryLink: name })),
  resetStore: () => set(() => initialState),
}));
