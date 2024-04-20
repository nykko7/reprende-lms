// import { UserAvatar } from "@/components/auth/user-avatar";
import Logo from "@/components/brand/Logo";
import { MobileSidebar } from "./MobileSidebar";
import { NavbarRoutes } from "./NavbarRoutes";
import { SocialLinks } from "./SocialLinks";

export const Navbar = () => {
  return (
    <header className="sticky inset-y-0 top-0 z-50 w-full border-b">
      <div className="bg-background flex items-center justify-between px-6 py-2 sm:px-8">
        <nav className="flex">
          <MobileSidebar />

          <Logo showTitle={false} className="sm:hidden" />
          <Logo showTitle={true} className="hidden sm:flex" />
        </nav>
        <nav className="xs:flex xs:flex-1 hidden justify-center">
          <NavbarRoutes />
        </nav>
        <nav className="flex justify-end gap-1 sm:gap-2">
          <SocialLinks />
          {/* <UserAvatar /> */}
        </nav>
      </div>
    </header>
  );
};
