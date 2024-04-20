"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { landingRoutes } from "../routes";

export const NavbarRoutes = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {landingRoutes.map((route) => (
          <NavigationMenuItem key={route.routeName}>
            <NavigationMenuTrigger className="text-base lg:text-lg">
              {route.routeName}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-4">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href={route.href}
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        {route.title}
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        {route.description}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                {route.subroutes.map((subroute) => (
                  <ListItem
                    key={subroute.href}
                    href={subroute.href}
                    title={subroute.title}
                  >
                    {subroute.description}
                  </ListItem>
                ))}
              </ul>
              {/* <ul className="w-[400px] gap-3 p-4 md:w-[500px] ">
                {route.subroutes.map((subroute) => (
                  <ListItem
                    key={subroute.title}
                    href={subroute.href}
                    title={subroute.title}
                  >
                    {subroute.description}
                  </ListItem>
                ))}
              </ul> */}
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-base font-medium leading-none">{title}</div>
          <p className="line-clamp-6 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
