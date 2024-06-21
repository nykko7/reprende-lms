import { Button } from "@/components/ui/button";
import { type FC } from "react";

interface LoadMoreButtonProps {
  onClick: () => void;
  showDiscount: boolean;
}

const LoadMoreButton: FC<LoadMoreButtonProps> = ({ onClick, showDiscount }) =>
  showDiscount ? null : <Button onClick={onClick}>Ver más testimonios</Button>;
// <Button onClick={onClick}>Mostrar código de descuento</Button>

export default LoadMoreButton;
