import { Slider as SliderPrimitive } from "radix-ui";
import React from "react";
import { cn } from "../../utils/cn";

export default function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: SliderPrimitive.SliderProps) {
  const _values = React.useMemo(
    () => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]),
    [value, defaultValue, min, max],
  );

  return (
    <SliderPrimitive.Root
      className={cn("relative flex size-full items-center", className)}
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className="relative h-pag-sizing-75 grow rounded-pag-full bg-pag-scrollbar-track"
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className="absolute h-full rounded-pag-full bg-pag-scrollbar-thumb"
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="
            block size-pag-sizing-150 rounded-pag-full border border-pag-border-primary bg-pag-scrollbar-thumb
            ring-pag-border-primary/50 transition-[color] select-none
            after:absolute after:-inset-pag-sizing-25
            hover:ring-[3px]
            focus-visible:outline-hidden
            active:ring-[3px]
          "
        />
      ))}
    </SliderPrimitive.Root>
  );
}
