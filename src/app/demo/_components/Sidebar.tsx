import Logo from "@/components/brand/Logo";
import { Separator } from "@/components/ui/separator";
import { SidebarRoutes } from "./SidebarRoutes";

export const Sidebar = () => {
  return (
    <div className="flex h-full flex-col overflow-y-auto border-r shadow-sm">
      <div className="flex h-[80px] items-center justify-center">
        <Logo />
      </div>
      <div className="space-y-4 py-4">
        <SidebarRoutes />
        <Separator />
        {/* <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Colores:
          </h2>
        </div> */}
      </div>
    </div>
  );
};
