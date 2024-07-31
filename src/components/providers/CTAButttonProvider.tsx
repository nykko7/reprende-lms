"use client";

import React, { createContext, useRef } from "react";

export const CTAButtonRefContext =
  createContext<React.RefObject<HTMLAnchorElement> | null>(null);

export const CTAButtonRefProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  return (
    <CTAButtonRefContext.Provider value={buttonRef}>
      {children}
    </CTAButtonRefContext.Provider>
  );
};
