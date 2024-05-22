// ! DOCS: https://lucide.dev/guide/packages/lucide-react#nextjs-example
// import { LucideProps } from "lucide-react";
// import dynamicIconImports from "lucide-react/dynamicIconImports";
// import dynamic from "next/dynamic";

// export type iconName = keyof typeof dynamicIconImports;

// interface IconProps extends LucideProps {
//   name: iconName;
// }

// const Icon = ({ name, ...props }: IconProps) => {
//   const LucideIcon = dynamic(dynamicIconImports[name]);

//   return <LucideIcon {...props} />;
// };

import { icons } from "lucide-react";
import { type FC } from "react";

export type iconName = keyof typeof icons;

type IconProps = {
  name: string;
  className?: string;
};

const Icon: FC<IconProps> = ({ name, className }) => {
  if (!icons[name as iconName]) {
    return null;
  }
  const LucideIcon = icons[name as iconName];

  return <LucideIcon className={className} />;
};

export default Icon;
export type { IconProps };
