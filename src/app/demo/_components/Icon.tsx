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

export type iconName = keyof typeof icons;

interface IconProps {
  name: string;
}

const Icon = ({ name }: IconProps) => {
  if (!icons[name as iconName]) {
    return null;
  }
  const LucideIcon = icons[name as iconName];

  return <LucideIcon />;
};

export default Icon;
export type { IconProps };
