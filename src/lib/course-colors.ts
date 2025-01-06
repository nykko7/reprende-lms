export type CourseColor = "red" | "blue" | "green" | "yellow";

export const courseColorVariants = {
  blue: {
    primary: "from-blue-500 to-indigo-500",
    secondary: "from-blue-900/90 to-blue-950/90",
    border: "border-blue-700/50 group-hover:border-blue-500/70",
    text: "text-blue-200",
    background: "bg-blue-950/40 group-hover:bg-blue-950/50",
    icon: "bg-gradient-to-br from-blue-500 to-indigo-500",
    number: "bg-gradient-to-br from-blue-600 to-indigo-700",
  },
  green: {
    primary: "from-green-500 to-emerald-500",
    secondary: "from-green-900/90 to-green-950/90",
    border: "border-green-700/50 group-hover:border-green-500/70",
    text: "text-green-200",
    background: "bg-green-950/40 group-hover:bg-green-950/50",
    icon: "bg-gradient-to-br from-green-500 to-emerald-500",
    number: "bg-gradient-to-br from-green-600 to-emerald-700",
  },
  yellow: {
    primary: "from-yellow-500 to-amber-500",
    secondary: "from-yellow-900/90 to-amber-950/90",
    border: "border-yellow-700/50 group-hover:border-yellow-500/70",
    text: "text-yellow-200",
    background: "bg-yellow-950/40 group-hover:bg-yellow-950/50",
    icon: "bg-gradient-to-br from-yellow-500 to-amber-500",
    number: "bg-gradient-to-br from-yellow-600 to-amber-700",
  },
  red: {
    primary: "from-red-500 to-rose-500",
    secondary: "from-red-900/90 to-rose-950/90",
    border: "border-red-700/50 group-hover:border-red-500/70",
    text: "text-red-200",
    background: "bg-red-950/40 group-hover:bg-red-950/50",
    icon: "bg-gradient-to-br from-red-500 to-rose-500",
    number: "bg-gradient-to-br from-red-600 to-rose-700",
  },
} as const;
