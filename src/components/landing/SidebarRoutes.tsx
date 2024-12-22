"use client";

import { CopyIcon } from "lucide-react";
import { landingRoutes } from "../../app/(landing)/_config/routes";
import SidebarItem from "./SidebarItem";

export const SidebarRoutes = () => {
  // const { data: session } = auth();

  return (
    <div className="flex w-full flex-col">
      {landingRoutes.map((route) => (
        <div className="px-3 py-2" key={route.title}>
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            {route.title}
          </h2>

          <div className="space-y-1">
            {route.subroutes.map((route) => (
              <SidebarItem
                key={route.href}
                icon={CopyIcon}
                label={route.title}
                href={route.href}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
