import clsx from "clsx";
import { HomeIcon, Beaker } from "lucide-react";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { RouteState, routeState } from "../utils";

export type Route = {
  href: string;
  id: string;
  icon: React.ReactNode;
  className?: string;
};
export const routes = [
  {
    href: "/",
    id: "home",
    // className:
    //   "border-blue-800  bg-gradient-to-br from-blue-700 to-blue-800",
    icon: (
      <HomeIcon className="smooth_transition group-hover:scale-[1.075] scale-[1] group-active:scale-[0.95]" />
    ),
  },
  {
    href: "/craft",
    id: "craft",
    icon: (
      <Beaker className="smooth_transition group-hover:scale-[1.12] scale-[1] group-active:scale-[0.95]" />
    ),
  },
] as Route[];

export function NavigationItem(
  props: {
    active?: boolean;
    index: number;
    setHref: (s: string) => void;
  } & Route
) {
  return (
    <motion.div className="flex flex-col gap-1 items-center justify-center">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: props.index * 0.15,
        }}
        className={clsx(
          `p-[0.4rem] smooth_transition ${
            props.active ? "bg-neutral-800" : "bg-neutral-800/40 hover:bg-neutral-800/65"
          } border-neutral-800 cursor-pointer rounded-[8px] border  flex items-center justify-center`,
          props.className
        )}
        id={props.id}
        onClick={() => {
          props.setHref(props.href);
        }}
      >
        {props.icon}
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: props.active ? 1 : 0,
          y: props.active ? 0 : 20,
        }}
        // transition={{
        //   delay: 0.25,
        // }}
        className={`w-[12px] h-[2px] rounded-full ${
          props.active ? "bg-yellow-400" : "bg-transparent"
        }`}
      />
    </motion.div>
  );
}

export default function NavigationDock() {
  const { href, setHref } = routeState((s) => s);
  const [activeId, setActiveId] = useState(href);
  useEffect(() => {
    const route = routes.find(
      (f) => f.href.toLowerCase() === href.toLowerCase()
    );
    setActiveId(route ? route.id : "home");
  }, [href]);
  return (
    <div className="fixed top-auto bottom-0 left-0 right-0 m-[1.5rem]">
      <div className="w-screen flex items-center justify-center">
        <div className="flex gap-3 w-fit bg-neutral-800/10 border border-neutral-800/10 bg-opacity-30 backdrop-blur-md p-[0.7rem] rounded-md">
          {routes.map((r, i) => (
            <NavigationItem
              setHref={setHref}
              index={i}
              active={activeId.toLowerCase() === r.id.toLowerCase()}
              {...r}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
