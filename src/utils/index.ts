import { create } from "zustand";


export type RouteState = {
    href: string;
    setHref: (r: string) => void;
}
export const routeState = create<RouteState>((set) => ({
  href: "/",
  setHref: (r: string) =>
    set({
      href: r,
    }),
}));
