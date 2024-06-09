import { type FC } from "react";

const DiscountMessage: FC = () => (
  <div className="mt-4 text-xl font-bold">
    ¡Usa el código <span className="text-primary">DESCUENTO20</span> para un 20%
    de descuento!
  </div>
);

export default DiscountMessage;
