import Slider from "../Slider/Slider";
import { Slider as SliderPrimitive } from "radix-ui";

type Props = {
  range: [number, number];
  variant?: "light" | "dark";
} & SliderPrimitive.SliderProps;

export default function PlayerCountSelect({ value, range, variant, ...rest }: Props) {
  return (
    <div className="flex items-center gap-pag-spacing-125">
      <span className="min-w-pag-sizing-200 text-end text-pag-md">{range[0]}</span>
      <Slider {...rest} min={range[0]} max={range[1]} step={1} value={value} variant={variant} />
      <span className="min-w-pag-sizing-300 text-pag-md">
        {value?.find((v) => v >= range[1]) ? `${range[1]}+` : range[1]}
      </span>
    </div>
  );
}
