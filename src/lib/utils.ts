import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleScroll = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href")?.substring(1) ?? "";
  const targetElement = document.getElementById(targetId);
  const navbarHeight = 20;

  if (targetElement) {
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
