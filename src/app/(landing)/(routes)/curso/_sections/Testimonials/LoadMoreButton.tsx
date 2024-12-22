import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { type FC } from "react";

interface LoadMoreButtonProps {
  onClick: () => void;
  showDiscount: boolean;
}

const LoadMoreButton: FC<LoadMoreButtonProps> = ({ onClick, showDiscount }) =>
  showDiscount ? null : (
    <Button onClick={onClick} variant={"outline"}>
      Ver más testimonios
      <ChevronDown className="ml-2" />
    </Button>
  );
// <Button onClick={onClick}>Mostrar código de descuento</Button>

export default LoadMoreButton;
