import { Button } from "@/components/ui/button";
import { type FC } from "react";

interface LoadMoreButtonProps {
  onClick: () => void;
  hasMore: boolean;
}

const LoadMoreButton: FC<LoadMoreButtonProps> = ({ onClick, hasMore }) =>
  hasMore ? (
    <Button onClick={onClick}>Ver más testimonios</Button>
  ) : null;
  // <Button onClick={onClick}>Mostrar código de descuento</Button>

export default LoadMoreButton;
