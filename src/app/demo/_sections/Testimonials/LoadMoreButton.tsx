import { Button } from "@/components/ui/button";
import { type FC } from "react";

interface LoadMoreButtonProps {
  onClick: () => void;
  hasMore: boolean;
}

const LoadMoreButton: FC<LoadMoreButtonProps> = ({ onClick, hasMore }) => (
  <Button onClick={onClick}>
    {hasMore ? "Ver más testimonios" : "Mostrar código de descuento"}
  </Button>
);

export default LoadMoreButton;
