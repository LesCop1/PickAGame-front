import { BadgeEuro } from "lucide-react";
import Badge from "./Badge";
import Divider from "../Divider/Divider";

type Props = {
  retailPrice: number;
  keyShopPrice: number;
};

export default function GamePriceBadge({ retailPrice, keyShopPrice }: Props) {
  return (
    <Badge className="gap-pag-sizing-200 border-none bg-pag-bg-primary p-pag-sizing-75">
      <div className="flex items-center gap-pag-sizing-50">
        <BadgeEuro size={16} className="text-pag-icon-stat" />
        <span>Prices</span>
      </div>
      <Divider direction="vertical" className="w-pag-sizing-1 bg-pag-bg-secondary" />
      <div className="flex flex-col text-pag-text-muted">
        <span>Retail</span>
        <span>Keyshops</span>
      </div>
      <div className="flex flex-col text-pag-md font-bold">
        <span className="text-pag-text-success">{retailPrice}€</span>
        <span className="text-pag-text-error">{keyShopPrice}€</span>
      </div>
    </Badge>
  );
}
