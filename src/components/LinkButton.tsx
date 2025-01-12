import clsx from "clsx";
import React from "react";

export type LinkedButtonProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};
export default function LinkedButton(props: LinkedButtonProps) {
  return (
    <a
      href={props.href}
      className={clsx(
        "px-[15px] smooth_transition text-sm py-[7.5px] rounded-[8px]  bg-gradient-to-br from-violet-700 to-violet-900 border border-violet-500 scale-[1] hover:scale-[1.05] active:scale-[0.95]",
        props.className
      )}
    >
      {props.children}
    </a>
  );
}
