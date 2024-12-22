import { cn } from "./utils";

export const formatText = (text: string) => {
  const parts = text.split(/(\*\*\__.*?\__\*\*|\*\*.*?\*\*|\__.*?\__)/);
  return parts.map((part, index) => {
    if (part.startsWith("**__") && part.endsWith("__**")) {
      return (
        <span key={index} className="font-bold underline">
          {part.slice(4, -4)}
        </span>
      );
    } else if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={index} className="font-bold">
          {part.slice(2, -2)}
        </span>
      );
    } else if (part.startsWith("__") && part.endsWith("__")) {
      return <u key={index}>{part.slice(2, -2)}</u>;
    }
    return <span key={index}>{part}</span>;
  });
};
//   const parts = text.split(/(?<=\*\*)(?=\*\*)/);
//   return parts.map((part, index) => (
//     <span key={index} className={cn(part.startsWith("**") && "font-bold")}>
//       {part.replace(/\*\*/g, "")}
//     </span>
//   ));
// };
