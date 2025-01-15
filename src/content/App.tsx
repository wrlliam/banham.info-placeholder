import React, { useEffect, useState } from "react";
import { routeState } from "../utils";
import { motion } from "motion/react";
import HomePage from "./pages/Home";

export type PageRouter = {
  id: string;
  component: React.ReactNode;
};

export const pageRouter = [
  {
    id: "/",
    component: <HomePage />,
  },
  {
    id: "/craft",
    component: <>hello</>,
  },
] as PageRouter[];

function testId(id: string, href: string) {
  return id.toLowerCase() === href.toLowerCase();
}

export default function App() {
  const { href } = routeState((s) => s);
  const [component, setComponent] = useState(pageRouter[0].component);
  const [previousActiveId, setPreviousActiveId] = useState(pageRouter[0].id);
  const [activeId, setActiveId] = useState(pageRouter[0].id);
  useEffect(() => {
    setPreviousActiveId(activeId);
    const route =
      pageRouter.find((f) => f.id === href.toLowerCase()) ?? pageRouter[0];
    setTimeout(() => {
      setActiveId(route.id);
      setComponent(route.component);
    }, 200);
  }, [href]);
  return (
    <div className="w-screen h-[91vh] flex items-center justify-center">
      <motion.div
        initial={{
          y: 20,
          opacity: 0,
        }}
        animate={{
          y: testId(previousActiveId, href)
            ? 0
            : testId(activeId, href)
            ? 0
            : 20,
          opacity: testId(previousActiveId, href)
            ? 1
            : testId(activeId, href)
            ? 1
            : 0,
        }}
        className="w-full h-full p-[1rem]"
      >
        {component}
      </motion.div>
    </div>
  );
}
